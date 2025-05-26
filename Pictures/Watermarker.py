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

# Dynamic sizing limits
min_font_size = 20
max_font_size = 60  # <-- added maximum font size

padding_ratio = 1 / 30  # padding relative to image width
max_padding = 60        # max padding in pixels
extra_margin = 5        # extra padding to keep text from edge

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

    # Calculate dynamic font size capped by max_font_size
    dynamic_font_size = max(min_font_size, min(max_font_size, image.width // 20))
    font = ImageFont.truetype(font_path, dynamic_font_size)

    bbox = draw.textbbox((0, 0), watermark_text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]

    # Calculate dynamic padding capped by max_padding
    padding = min(max_padding, int(image.width * padding_ratio))

    x = image.width - text_width - padding - extra_margin
    y = image.height - text_height - padding - extra_margin

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

print(f"Using font size {dynamic_font_size} and padding {padding} for {filename}")
print("Watermarking complete.")