import os

directory = "media/sports/mid-res"

files = os.listdir(directory)

all_files_list = []
for file in files:
    all_files_list.append(file.split(".")[0])
    
all_files_list = sorted(all_files_list, key=lambda x: int(x.rsplit("-", 1)[-1]))

all_files_dict = {}
for file in all_files_list:
    if file.split("-")[0] in all_files_dict:
        all_files_dict[file.split("-")[0]].append(file)
    else:
        all_files_dict[file.split("-")[0]] = [file]

for x in all_files_dict:
    print(f""{x}" : {all_files_dict[x]}, ")