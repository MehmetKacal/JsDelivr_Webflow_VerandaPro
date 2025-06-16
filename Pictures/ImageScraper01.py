import os
import requests
import itertools


# Output folder
output_folder = "/Users/mehmet/Business/Pictures/ProductChoice Images/demo1Full/9-plan/"
os.makedirs(output_folder, exist_ok=True)

# File extension
file_extension = "jpg"

# Digit options for each position in filename
digit_options = [
    [5],          # position 0 → directory
    [1,2,3],            # position 1 → color
    [0],                # position 2
    [2,3,4,5,6],        # position 3
    [2,3,4,5],          # position 4
    [0],                # position 5
    [0],                # position 6
    [2,4],              # position 7
    [1,2],              # position 8
    [0]                 # position 9
]

# Color map based on 2nd digit
color_map = {
    1: "antraciet",
    2: "zwart",
    3: "creme"
}

# Generate all filename combinations
combinations = itertools.product(*digit_options)

# Base URL root
base_url = "https://configurator.fifty8.eu:8002/assets/design/st-garden"

for combo in combinations:
    digits = list(combo)
    filename = ''.join(map(str, digits)) + f".{file_extension}"
    
    folder = str(digits[0])  # First digit determines folder (e.g., "5")
    color = color_map.get(digits[1], "unknown")  # Second digit determines color

    # Skip if color mapping fails
    if color == "unknown":
        continue

    url = f"{base_url}/{folder}/{color}/{filename}"
    filepath = os.path.join(output_folder, filename)

    try:
        response = requests.get(url)
        response.raise_for_status()

        with open(filepath, 'wb') as f:
            f.write(response.content)
        print(f"Downloaded: {filename}")
    except Exception as e:
        print(f"Failed to download {filename}: {e}")


# import os
# import requests

# # Define your list of image URLs
# image_urls = [
#     "https://example.com/image1.jpg",
#     "https://example.com/image2.png",
#     # Add more URLs as needed


# #     5202300210
# #     afmeting(4,5,6,7) kleur(1,2,3) dak linker(2,3,4,5,6) linkerSpie(2,3,4,5) 0 0 voorkant(2,X,4,X) zonwering(1,2) 0
# #     "https://configurator.fifty8.eu:8002/assets/design/st-garden/5/zwart/5202300210.jpg"
# #     "https://configurator.fifty8.eu:8002/assets/design/st-garden/5/zwart/5202300220.jpg"
# #     "https://configurator.fifty8.eu:8002/assets/design/st-garden/5/zwart/5202300310.jpg"
# #     "https://configurator.fifty8.eu:8002/assets/design/st-garden/5/zwart/5203300320.jpg"

# # https://configurator.fifty8.eu:8002/assets/design/st-garden/5/zwart/5206500210.jpg

# (4,5,6,7) (1,2,3) 0 (2,3,4,5,6) (2,3,4,5) 0 0 (2,4) (1,2) 0
# 5202300210
# ]

# # Specify your output folder once
# output_folder = "/Users/mehmet/Business/Pictures/ProductChoice Images/demo1Full/9-plan/"

# # Make sure the output folder exists
# os.makedirs(output_folder, exist_ok=True)

# # Download and save each image
# for idx, url in enumerate(image_urls, start=1):
#     try:
#         response = requests.get(url)
#         response.raise_for_status()

#         # Create a unique filename
#         file_extension = url.split('.')[-1].split('?')[0]  # Handles URLs with query parameters
#         filename = f"image_{idx}.{file_extension}"
#         filepath = os.path.join(output_folder, filename)

#         with open(filepath, 'wb') as f:
#             f.write(response.content)
#         print(f"Downloaded: {filename}")
#     except Exception as e:
#         print(f"Failed to download {url}: {e}")
