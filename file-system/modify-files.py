from os.path import join, dirname, isdir, isfile 
from os import rename, getcwd, listdir

import argparse

# import datetime
# Current_Date = datetime.datetime.today().strftime ('%d-%b-%Y')

root = getcwd()
ignored_names = ["node_modules"]

parser = argparse.ArgumentParser(description='Choose mode: ')
parser.add_argument('mode', help="Choose the mode")

args = parser.parse_args()

if args.mode == "move":
    folders_to_empty = [path for path in listdir(root) if isdir(path) and path not in ignored_names]
    for path in sorted(folders_to_empty):
        for file in listdir(join(root, path)):
            original_path = join(root, path, file)
            new_path = join(root, file)
            rename(original_path, new_path)
elif args.mode == "rename":
    print("Make sure you've oredered the file in the chosen order before renaming!!!!")
    segment = input("Choose new name: ")
    files_to_rename = [file for file in listdir(root) if isfile(file) and file != __file__ and file not in ignored_names]

    for i,file in enumerate(sorted(files_to_rename)):
        original_path = join(root, file)
        new_path = join(root, segment + "-" + str(i) + "." + file.split(".").pop())
        rename(original_path, new_path)
else:
    print("The only options are MOVE and RENAME, choose accordingly.")