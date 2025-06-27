import os
from PIL import Image, ImageDraw, ImageFont
import pillow_heif

# Enable .heic support in PIL
pillow_heif.register_heif_opener()

# ===== CONFIGURATION =====

input_dir = "/Users/mehmet/Business/Pictures/ProductChoice Images/demo1Full-Adjusted_v03/"
output_dir = "/Users/mehmet/Business/Pictures/ProductChoice Images/demo1Full-Adjusted_v04/"
watermark_text = "VerandaProMax.nl"
font_path = "/System/Library/Fonts/Supplemental/Arial.ttf"
opacity = 120  # 0 (transparent) to 255 (opaque)

# Dynamic sizing limits
min_font_size = 20
max_font_size = 60  
padding_ratio = 1 / 30  
max_padding = 60       
extra_margin = 5        

# ===== PROCESSING =====
supported_exts = (".png", ".jpg", ".jpeg", ".bmp", ".gif", ".heic")

for root, _, files in os.walk(input_dir):
    for filename in files:
        if not filename.lower().endswith(supported_exts):
            continue

        input_path = os.path.join(root, filename)
        relative_path = os.path.relpath(root, input_dir)  # Preserve subdirectory structure
        output_subdir = os.path.join(output_dir, relative_path)

        if not os.path.exists(output_subdir):
            os.makedirs(output_subdir)

        image = Image.open(input_path).convert("RGBA")

        txt_layer = Image.new("RGBA", image.size, (255, 255, 255, 0))
        draw = ImageDraw.Draw(txt_layer)

        dynamic_font_size = max(min_font_size, min(max_font_size, image.width // 20))
        font = ImageFont.truetype(font_path, dynamic_font_size)

        bbox = draw.textbbox((0, 0), watermark_text, font=font)
        text_width, text_height = bbox[2] - bbox[0], bbox[3] - bbox[1]

        padding = min(max_padding, int(image.width * padding_ratio))

        x = image.width - text_width - padding - extra_margin
        y = image.height - text_height - padding - extra_margin

        draw.text((x, y), watermark_text, font=font, fill=(255, 255, 255, opacity))
        watermarked = Image.alpha_composite(image, txt_layer)

        output_filename = (
            os.path.splitext(filename)[0] + ".jpg"
            if filename.lower().endswith(".heic")
            else filename
        )
        output_path = os.path.join(output_subdir, output_filename)
        watermarked.convert("RGB").save(output_path, quality=95)

        print(f"Saved watermarked image: {output_path}")

        # break  # Exit after processing one file
    # break  # Exit after processing one directory

print("Watermarking complete.")
