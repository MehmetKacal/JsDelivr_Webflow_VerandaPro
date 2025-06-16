import os
import cv2
import numpy as np
from PIL import Image, ImageEnhance


# Define directories
input_dir = "/Users/mehmet/Business/Pictures/ProductChoice Images/demo1-copy/"
output_dir = "/Users/mehmet/Business/Pictures/ProductChoice Images/demo1-copy-bali/"

# Ensure output directory exists
os.makedirs(output_dir, exist_ok=True)

# Set effect strength (reduce from original)
color_intensity = 0.3  # Lower intensity for color shifts
contrast_boost = 1.15  # Reduce contrast boost

# Process images recursively
for root, _, files in os.walk(input_dir):
    for filename in files:
        if filename.endswith((".png", ".jpg", ".jpeg")):
            input_path = os.path.join(root, filename)

            # Maintain folder structure
            relative_path = os.path.relpath(root, input_dir)
            output_folder = os.path.join(output_dir, relative_path)
            os.makedirs(output_folder, exist_ok=True)

            output_path = os.path.join(output_folder, f"{filename}")

            # Open image with OpenCV
            image_cv = cv2.imread(input_path).astype(np.float32)

            # Apply warm tone effect (reduce intensity)
            warm_filter = image_cv.copy()
            warm_filter[:, :, 0] -= int(10 * color_intensity)  # Reduce blue
            warm_filter[:, :, 2] += int(15 * color_intensity)  # Boost red

            # Blend effect with original image
            image_cv = cv2.addWeighted(image_cv, 1 - color_intensity, warm_filter, color_intensity, 0)

            # Convert to PIL for contrast enhancement
            image_pil = Image.fromarray(cv2.cvtColor(image_cv.astype(np.uint8), cv2.COLOR_BGR2RGB))

            # Adjust contrast (less intense)
            enhancer = ImageEnhance.Contrast(image_pil)
            image_pil = enhancer.enhance(contrast_boost)

            # Save processed image
            image_pil.save(output_path)

print("Processing complete! Bali effect applied with reduced intensity.")