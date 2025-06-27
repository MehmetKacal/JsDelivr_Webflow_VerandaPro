import os
from PIL import Image, ImageOps

# === Configuration ===
# input_dir = "/Users/mehmet/Business/Pictures/ProductChoice Images/demo1Full copy/"
# output_dir = "/Users/mehmet/Business/Pictures/ProductChoice Images/demo1Full-Adjusted/"
# input_dir = "/Users/mehmet/Business/Pictures/ProductChoice Images/demo1Full copy/1-start/"
# output_dir = "/Users/mehmet/Business/Pictures/ProductChoice Images/demo1Full-Adjusted/1-start/"
# input_dir = "/Users/mehmet/Business/Pictures/ProductChoice Images/demo1Full copy/2-color/"
# output_dir = "/Users/mehmet/Business/Pictures/ProductChoice Images/demo1Full-Adjusted/2-color/"
# input_dir = "/Users/mehmet/Business/Pictures/ProductChoice Images/demo1Full copy/3-dak/"
# output_dir = "/Users/mehmet/Business/Pictures/ProductChoice Images/demo1Full-Adjusted/3-dak/"
# input_dir = "/Users/mehmet/Business/Pictures/ProductChoice Images/demo1Full copy/4-linker-zijkant/"
# output_dir = "/Users/mehmet/Business/Pictures/ProductChoice Images/demo1Full-Adjusted/4-linker-zijkant/"
# input_dir = "/Users/mehmet/Business/Pictures/ProductChoice Images/demo1Full copy/5-rechter-zijkant/"
# output_dir = "/Users/mehmet/Business/Pictures/ProductChoice Images/demo1Full-Adjusted/5-rechter-zijkant/"
# input_dir = "/Users/mehmet/Business/Pictures/ProductChoice Images/demo1Full copy/6-voorkant/"
# output_dir = "/Users/mehmet/Business/Pictures/ProductChoice Images/demo1Full-Adjusted/6-voorkant/"
# input_dir = "/Users/mehmet/Business/Pictures/ProductChoice Images/demo1Full copy/7-zonwering/"
# output_dir = "/Users/mehmet/Business/Pictures/ProductChoice Images/demo1Full-Adjusted/7-zonwering/"
input_dir = "/Users/mehmet/Business/Pictures/ProductChoice Images/demo1Full copy/8-verlichting/"
output_dir = "/Users/mehmet/Business/Pictures/ProductChoice Images/demo1Full-Adjusted/8-verlichting/"

CROP_SCALE = 0.65  # e.g., 0.9 = 90% of original size
X_OFFSET = 0      # Horizontal shift (+ right, - left)
Y_OFFSET = 0     # Vertical shift (+ down, - up) → 36 ensures bottom is untouched for 1280x720 @ 90% crop

## calculate stuff
original_height = 720
crop_height = int(720 * CROP_SCALE)  # 648
# Y_OFFSET = (original_height - crop_height) // 2  # y_offset = 36
# Amount you would normally remove from top and bottom = 720 - 648 = 72
# To crop only from the TOP (and none from bottom), offset crop downward by half that amount
original_width = 1280
crop_width = int(original_width * CROP_SCALE)  # = 1152
# X_OFFSET = (original_width - crop_width) // 2       # = 64


# === Crop Function with Offset ===
def crop_with_offset(img, scale=1.0, x_offset=0, y_offset=0):
    """
    Crop the image to a scaled region with optional offset from center.
    Keeps same aspect ratio.
    """
    w, h = img.size
    new_w, new_h = int(w * scale), int(h * scale)

    # Center with offset
    center_x = w // 2 + x_offset
    center_y = h // 2 + y_offset

    # Calculate crop box
    left = max(0, center_x - new_w // 2)
    upper = max(0, center_y - new_h // 2)
    right = min(w, left + new_w)
    lower = min(h, upper + new_h)

    # Adjust if crop box exceeds boundaries
    if right - left < new_w:
        left = w - new_w
        right = w
    if lower - upper < new_h:
        upper = h - new_h
        lower = h

    return img.crop((left, upper, right, lower))


# === Processing Loop ===
for root, _, files in os.walk(input_dir):
    for file in files:
        if file.lower().endswith('.jpg'):
            input_path = os.path.join(root, file)

            try:
                # Open and process
                img = Image.open(input_path)
                mirrored = ImageOps.mirror(img)
                cropped = crop_with_offset(mirrored, scale=CROP_SCALE, x_offset=X_OFFSET, y_offset=Y_OFFSET)

                # Prepare output path
                relative_path = os.path.relpath(root, input_dir)
                output_path = os.path.join(output_dir, relative_path, file)
                os.makedirs(os.path.dirname(output_path), exist_ok=True)

                # Save image
                cropped.save(output_path)
                print(f"✅ Saved: {output_path}")

            except Exception as e:
                print(f"❌ Error processing {input_path}: {e}")
