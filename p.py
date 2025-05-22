import os
import re
from collections import defaultdict

def extract_number_after_last_dash(filename):
    # Extract the part after the last '-' and before the file extension
    match = re.search(r'-(\d+)(?:\.\w+)?$', filename)
    return int(match.group(1)) if match else float('inf')

def group_and_sort_files(directory):
    file_dict = defaultdict(list)

    # List all files in the directory
    for filename in os.listdir(directory):
        if os.path.isfile(os.path.join(directory, filename)):
            # Group by the part before the first '-'
            key = filename.split('-', 1)[0]
            file_dict[key].append(filename)

    # Sort each list by the number after the last '-'
    for key in file_dict:
        file_dict[key].sort(key=extract_number_after_last_dash)

    # Sort the dictionary by keys
    sorted_dict = dict(sorted(file_dict.items()))
    
    return sorted_dict

# Example usage:
if __name__ == "__main__":
    directory = "media\sports\high-res"
    result = group_and_sort_files(directory)

    for key, files in result.items():
        print(f"{key}: {files}")