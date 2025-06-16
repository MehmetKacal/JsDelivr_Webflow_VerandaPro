import os

def list_files_recursive(input_folder, output_folder, output_filename="file_list.txt"):
    output_path = os.path.join(output_folder, output_filename)
    with open(output_path, 'w') as f:
        for root, _, files in os.walk(input_folder):
            for file in files:
                full_path = os.path.join(root, file)
                f.write(full_path + '\n')
    print(f"File list saved to: {output_path}")

# Example usage:
input_dir = '/Users/mehmet/workspaces/VerandaFormTry/assets/imgs/'
output_dir = '/Users/mehmet/Business/Pictures/ProductChoice Images/'
list_files_recursive(input_dir, output_dir)



folder_to_scan = '/Users/mehmet/Business/Pictures/ProductChoice Images/demo1-copy-bali-watermarked/'