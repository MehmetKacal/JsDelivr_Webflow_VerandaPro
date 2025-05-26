import os
from PIL import Image, ImageDraw, ImageFont
import pillow_heif

# Enable .heic support in PIL
pillow_heif.register_heif_opener()

# ===== CONFIGURATION =====
input_dir = "/Users/mehmet/Downloads/Pictures/iCloud_No_Watermark"
output_dir = "/Users/mehmet/Downloads/Pictures/Watermarked"
watermark_text = "VerandaProMax.nl"
font_path = "/System/Library/Fonts/Supplemental/Arial.ttf"
opacity = 120  # 0 (transparent) to 255 (opaque)
# padding = 60  # Padding from the image edges

# ===== SETUP =====
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

supported_exts = (".png", ".jpg", ".jpeg", ".bmp", ".gif", ".heic")

for filename in os.listdir(input_dir):
    if not filename.lower().endswith(supported_exts):
        continue

    input_path = os.path.join(input_dir, filename)
    image = Image.open(input_path).convert("RGBA")

    txt_layer = Image.new("RGBA", image.size, (255, 255, 255, 0))
    draw = ImageDraw.Draw(txt_layer)

    # Dynamically scale font size: about 1/20 of image width
    dynamic_font_size = max(20, image.width // 20)
    font = ImageFont.truetype(font_path, dynamic_font_size)

    bbox = draw.textbbox((0, 0), watermark_text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]

    padding = max(20, image.width // 30)  # adjust divisor to your liking

    extra_margin = 5  # extra padding to ensure text isn’t flush with edge

    x = image.width - text_width - padding - extra_margin
    y = image.height - text_height - padding - extra_margin

    # Just draw the text (no background box)
    draw.text((x, y), watermark_text, font=font, fill=(255, 255, 255, opacity))
    watermarked = Image.alpha_composite(image, txt_layer)

    # Save .HEIC files as .JPG
    output_filename = (
        os.path.splitext(filename)[0] + ".jpg"
        if filename.lower().endswith(".heic")
        else filename
    )
    output_path = os.path.join(output_dir, output_filename)
    watermarked.convert("RGB").save(output_path, quality=95)
    # break  # Remove or comment out this line to process all images

print(f"Using font size {dynamic_font_size} for {filename}")
print("Watermarking complete.")