import os
import requests

def download_images(urls, filenames, save_directory):
    os.makedirs(save_directory, exist_ok=True)  # Ensure the directory exists

    for url, filename in zip(urls, filenames):  # Pair each URL with its corresponding filename
        try:
            response = requests.get(url, stream=True)
            response.raise_for_status()  # Ensure the request was successful
            
            # Ensure all files are saved as .jpg
            file_name = f"{filename}.jpg"
            file_path = os.path.join(save_directory, file_name)

            # Save the image
            with open(file_path, 'wb') as file:
                for chunk in response.iter_content(1024):
                    file.write(chunk)
            
            print(f"Downloaded: {file_name}")

        except requests.exceptions.RequestException as e:
            print(f"Failed to download {url}: {e}")

# Example usage
urls = [
    "https://configurator.fifty8.eu:8002/assets/design/st-garden/default.jpg"
]

filenames = [
    "default"
]

# # Example usage
# urls = [
#     "https://configurator.fifty8.eu:8002/assets/design/st-garden/4/antraciet/41000001.jpg",
#     "https://configurator.fifty8.eu:8002/assets/design/st-garden/4/antraciet/41000002.jpg",
#     "https://configurator.fifty8.eu:8002/assets/design/st-garden/4/antraciet/41000003.jpg",
#     "https://configurator.fifty8.eu:8002/assets/design/st-garden/4/antraciet/41000004.jpg",
#     "https://configurator.fifty8.eu:8002/assets/design/st-garden/4/antraciet/41000005.jpg"
#     # "https://configurator.fifty8.eu:8002/assets/design/st-garden/4/creme/430006.jpg"
# ]

# filenames = [
#     "Open-voorkant",
#     "Helder-glazen-schuifwanden",
#     "Getint-glazen-schuifwanden",
#     "Aluminium-schuifpui",
#     "Getint-schuifpui"
# ]

# creme 43  zwart 42    antraciet 41
# # Example usage
# urls = [
#     # "https://configurator.fifty8.eu:8002/assets/design/st-garden/4/zwart/4200011.jpg",
#     "https://configurator.fifty8.eu:8002/assets/design/st-garden/4/zwart/4200062.jpg",
#     "https://configurator.fifty8.eu:8002/assets/design/st-garden/4/zwart/4200063.jpg",
#     "https://configurator.fifty8.eu:8002/assets/design/st-garden/4/zwart/4200064.jpg",
#     "https://configurator.fifty8.eu:8002/assets/design/st-garden/4/zwart/4200065.jpg"
#     # "https://configurator.fifty8.eu:8002/assets/design/st-garden/4/zwart/4200016.jpg"
# ]

# filenames = [
#     # "Geen-spie",
#     "Aluminium-spie",
#     "Glazen-spie",
#     "Polycarbonaat-opaal",
#     "Polycarbonaat-helder"
# ]


save_directory = "/Users/mehmet/Business/Pictures/ProductChoice Images/demo1"

download_images(urls, filenames, save_directory)


    # "https://configurator.fifty8.eu:8002/assets/design/st-garden/4/antraciet/410001.jpg",
    # "https://configurator.fifty8.eu:8002/assets/design/st-garden/4/antraciet/410002.jpg",
    # "https://configurator.fifty8.eu:8002/assets/design/st-garden/4/antraciet/410003.jpg",
    # "https://configurator.fifty8.eu:8002/assets/design/st-garden/4/antraciet/410004.jpg",
    # "https://configurator.fifty8.eu:8002/assets/design/st-garden/4/antraciet/410005.jpg",
    # "https://configurator.fifty8.eu:8002/assets/design/st-garden/4/antraciet/410006.jpg"
    # "Geen-zijwand",
    # "Aluminium-zijwand",
    # "Helder-glazen-schuifwanden",
    # "Getint-glazen-schuifwanden",
    # "Aluminium-schuifpui",
    # "Aluminium-kozijn"

    # "Geen-spie",
    # "Aluminium-spie",
    # "Glazen-spie",
    # "Polycarbonaat-opaal",
    # "Polycarbonaat-helder"



# import os
# import requests

# def download_images(urls, save_directory):
#     os.makedirs(save_directory, exist_ok=True)  # Ensure the directory exists

#     for url in urls:
#         try:
#             response = requests.get(url, stream=True)
#             response.raise_for_status()  # Ensure the request was successful
            
#             # Extract filename from the URL
#             file_name = url.split('/')[-1].split('?')[0]  # Handle query parameters if any
            
#             # Ensure all files are saved as .jpg
#             file_name = f"{os.path.splitext(file_name)[0]}.jpg"
#             file_path = os.path.join(save_directory, file_name)

#             # Save the image
#             with open(file_path, 'wb') as file:
#                 for chunk in response.iter_content(1024):
#                     file.write(chunk)
            
#             print(f"Downloaded: {file_name}")

#         except requests.exceptions.RequestException as e:
#             print(f"Failed to download {url}: {e}")

# # Example usage
# urls = [
#     "https://configurator.fifty8.eu:8002/assets/design/st-garden/4/antraciet/410004.jpg",
#     "https://configurator.fifty8.eu:8002/assets/design/st-garden/4/antraciet/410005.jpg",
#     "https://configurator.fifty8.eu:8002/assets/design/st-garden/4/antraciet/410006.jpg"
# ]
# save_directory = "/Users/mehmet/Business/Pictures/ProductChoice Images/demo1"

# download_images(urls, save_directory)


    # "https://configurator.fifty8.eu:8002/assets/design/st-garden/4/antraciet/410001.jpg",
    # "https://configurator.fifty8.eu:8002/assets/design/st-garden/4/antraciet/410002.jpg",
    # "https://configurator.fifty8.eu:8002/assets/design/st-garden/4/antraciet/410003.jpg"