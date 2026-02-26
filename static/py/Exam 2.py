def add_book(query, number):
    if(search_libary(query) == False):
        dictionary[query] = number
    else:
        print("Book already Exist")


def search_libary(query):
    for book, num in dictionary.items():
        if(book == query and query != ''):
            return book, num
    return False

def get_input():
    book = input("Give me the book name").title().replace(',', '')
    num = 'a'
    while(not (num.isnumeric())):
        num = input("Give me the number")
    return book,num

def write_file():
    with open("book.txt", "w") as file:
        for book, num in dictionary.items():
            file.write(f"#{book},{num}")


def remove_dic():
    temp = input("give me the name of the book you want to delete").title()
    del dictionary[temp]

lin = 0
dictionary = {}
with open("book.txt", "r") as file:
    for line in file.readlines():
        returns = line.replace("#", "", 1).split('#')
        for word in returns:
            chara = word.split(',')
            dictionary[chara[0]] = chara[1]




while True:
    action = input("What action do you want to take? (add, search, delete, or quit): ")
    if action == "add":
        book, num = get_input()
        add_book(book, num)
    elif action == "search":
        book = input("What book are you looking for? ")
        result = search_libary(book)
        if result:
            print(f"{result[0]}: {result[1]}")
        else:
            print(f"{book} not found in library.")
    elif action == "delete":
        remove_dic()
    elif action == "quit":
        break
    else:
        print("Invalid input. Please try again.")
