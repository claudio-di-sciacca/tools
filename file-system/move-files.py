from os.path import join, dirname, isdir, isfile 
from os import rename, getcwd, listdir

# import datetime
# Current_Date = datetime.datetime.today().strftime ('%d-%b-%Y')

root = getcwd()

folders_to_empty = [path for path in listdir(getcwd()) if isdir(path) and path != "node_modules"]

for path in folders_to_empty:
    for file in listdir(join(getcwd(), path)):
        original_path = join(getcwd(), path,file)
        new_path = join(getcwd(),file)
        rename(original_path,new_path )
