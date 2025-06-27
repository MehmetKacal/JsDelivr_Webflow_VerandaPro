import os
from PIL import Image, ImageFilter

def blur_image(input_path, output_path, blur_radius):
    try:
        image = Image.open(input_path)
        blurred = image.filter(ImageFilter.GaussianBlur(radius=blur_radius))
        blurred.save(output_path)
        print(f"Blurred: {input_path} → {output_path}")
    except Exception as e:
        print(f"Failed to process {input_path}: {e}")

def blur_images_in_directory(input_dir, output_dir, blur_radius=5):
    for root, _, files in os.walk(input_dir):
        for file in files:
            if file.lower().endswith((".jpg", ".jpeg")):
                input_path = os.path.join(root, file)

                # Compute output path preserving folder structure
                relative_path = os.path.relpath(input_path, input_dir)
                output_path = os.path.join(output_dir, relative_path)

                # Ensure output subdirectory exists
                os.makedirs(os.path.dirname(output_path), exist_ok=True)

                # Blur and save the image
                blur_image(input_path, output_path, blur_radius)

# Example usage
if __name__ == "__main__":
    input_directory = "/Users/mehmet/Business/Pictures/ProductChoice Images/demo1Full-Adjusted_v02/"
    output_directory = "/Users/mehmet/Business/Pictures/ProductChoice Images/demo1Full-Adjusted_v03/"
    blur_radius = 0.3

    blur_images_in_directory(input_directory, output_directory, blur_radius)
