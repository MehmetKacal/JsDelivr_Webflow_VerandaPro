import os
import numpy as np
import cv2
from rembg import remove
from PIL import Image, ImageFilter

# Define directories
input_dir = "/Users/mehmet/Business/Pictures/ProductChoice Images/demo1-copy/1-start/"
output_dir = "/Users/mehmet/Business/Pictures/ProductChoice Images/demo1-copy-blurred/"

# Process images recursively
for root, _, files in os.walk(input_dir):
    for filename in files:
        if filename.endswith((".png", ".jpg", ".jpeg")):
            input_path = os.path.join(root, filename)

            # Maintain folder structure
            relative_path = os.path.relpath(root, input_dir)
            output_folder = os.path.join(output_dir, relative_path)
            os.makedirs(output_folder, exist_ok=True)

            output_path = os.path.join(output_folder, f"blurred_{filename}")

            # Open the image
            image = Image.open(input_path).convert("RGBA")

            # Extract foreground with rembg
            foreground = remove(image)

            # Create a binary mask (alpha channel)
            alpha_mask = foreground.split()[-1]  # Extract alpha (transparency) layer

            # Convert image to NumPy array for OpenCV processing
            img_cv = np.array(image)
            mask_cv = np.array(alpha_mask)

            # Blur only the background using the inverse mask
            blurred_background = cv2.GaussianBlur(img_cv, (15, 15), 0)
            # Expand the mask to have 4 channels (RGBA)
            mask_expanded = np.repeat(mask_cv[:, :, np.newaxis], 4, axis=2)

            # Apply mask correctly
            foreground_array = np.array(foreground)

            # Ensure foreground and img_cv have matching dimensions
            if foreground_array.shape != img_cv.shape:
                foreground_array = cv2.resize(foreground_array, (img_cv.shape[1], img_cv.shape[0]))

            # Correctly apply foreground over blurred background
            img_cv = np.where(mask_expanded > 0, foreground_array, img_cv)

            # Convert back to PIL image
            final_image = Image.fromarray(img_cv)

            # Save the result
            final_image.convert("RGB").save(output_path)

print("Processing complete! Veranda remains sharp, only background is blurred.")






# # Define directories
# input_dir = "/Users/mehmet/Business/Pictures/ProductChoice Images/demo1-copy/1-start/"
# output_dir = "/Users/mehmet/Business/Pictures/ProductChoice Images/demo1-copy-blurred/"