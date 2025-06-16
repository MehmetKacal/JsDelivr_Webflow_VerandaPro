import os
import requests

def download_images(urls, filenames, relative_paths, base_directory):
    for url, filename, relative_path in zip(urls, filenames, relative_paths):
        save_directory = os.path.join(base_directory, relative_path)
        os.makedirs(save_directory, exist_ok=True)

        file_name = f"{filename}.jpg"
        file_path = os.path.join(save_directory, file_name)

        try:
            response = requests.get(url, stream=True)
            response.raise_for_status()

            with open(file_path, 'wb') as file:
                for chunk in response.iter_content(1024):
                    file.write(chunk)

            print(f"Downloaded: {file_name} to {save_directory}")
        
        except requests.exceptions.RequestException as e:
            print(f"Failed to download {url}: {e}")

# Example usage
base_directory = "/Users/mehmet/Business/Pictures/ProductChoice Images/demo1Full"

# creme 43  zwart 42    antraciet 41
# 1
# 2
# 3
# 4
# 5
# 6

urls = [
    5202300210
    afmeting(4,5,6,7) kleur(1,2,3) dak linker(2,3,4,5,6) linkerSpie(2,3,4,5) 0 0 voorkant(2,X,4,X) zonwering(1,2) 0
    "https://configurator.fifty8.eu:8002/assets/design/st-garden/5/zwart/5202300210.jpg"
    "https://configurator.fifty8.eu:8002/assets/design/st-garden/5/zwart/5202300220.jpg"
    "https://configurator.fifty8.eu:8002/assets/design/st-garden/5/zwart/5202300310.jpg"
    "https://configurator.fifty8.eu:8002/assets/design/st-garden/5/zwart/5203300320.jpg"

https://configurator.fifty8.eu:8002/assets/design/st-garden/5/zwart/5206500210.jpg




]

filenames = [
    "Ja",
    "Ja",
    "Ja",
    "Ja",
    "Ja",
    "Ja",
    "Ja",
    "Ja",
    "Ja",
    "Ja",
    "Ja",
    "Ja"

    # "Aluminium-spie",
    # "Glazen-spie",
    # "Polycarbonaat-opaal",
    # "Polycarbonaat-helder"

    # "Geen-zijwand",
    # "Aluminium-zijwand",
    # "Helder-glazen-schuifwanden",
    # "Getint-glazen-schuifwanden",
    # "Aluminium-schuifpui",
    # "Aluminium-kozijn"
]

relative_paths = [

    "7-zonwering/4/antraciet",
    "7-zonwering/5/antraciet",
    "7-zonwering/6/antraciet",
    "7-zonwering/7/antraciet",

    "7-zonwering/4/zwart",
    "7-zonwering/5/zwart",
    "7-zonwering/6/zwart",
    "7-zonwering/7/zwart",

    "7-zonwering/4/creme",
    "7-zonwering/5/creme",
    "7-zonwering/6/creme",
    "7-zonwering/7/creme"


    # "Geen-zijwand",
    # "Aluminium-zijwand",
    # "Helder-glazen-schuifwanden",
    # "Getint-glazen-schuifwanden",
    # "Aluminium-schuifpui",
    # "Aluminium-kozijn",

    # "4-linker-zijkant/5/antraciet",
    # "4-linker-zijkant/5/antraciet",
    # "4-linker-zijkant/5/antraciet",
    # "4-linker-zijkant/5/antraciet",
    # "4-linker-zijkant/5/antraciet",

    # "4-linker-zijkant/6/antraciet",
    # "4-linker-zijkant/6/antraciet",
    # "4-linker-zijkant/6/antraciet",
    # "4-linker-zijkant/6/antraciet",
    # "4-linker-zijkant/6/antraciet",

    # "4-linker-zijkant/7/antraciet",
    # "4-linker-zijkant/7/antraciet",
    # "4-linker-zijkant/7/antraciet",
    # "4-linker-zijkant/7/antraciet",
    # "4-linker-zijkant/7/antraciet"
]

download_images(urls, filenames, relative_paths, base_directory)


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