dic = {}

def load_data():
    year = 1947
    with open("NBAChampions.txt", "r") as file:
        for line in file.readlines():
            dic[year] = line
            year += 1

def query(item):
    for key, value in dic.items():
        if(value[0-6] == item[0-6]):
            print(key, value)

load_data()
query("Philadelphia Warriors")

