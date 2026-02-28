# Lab #7 by Nickolas Diaz
def lookup_employee():
    found = []
    try:
        i = str(int(input("enter the id number of the employee\t")))
    except ValueError:
        return["Only integers are allowed"]
    with open("employees.txt", "r") as file:
        for line in file.readlines():
            sline = line.split()
            if (sline[0] == str(i)):
                found.append(str(sline[1:len(sline)]))
    return found if found else ["Employee not found"]



def lookup_id():
    found = []
    i = str.title(input("enter the first and last name of the employee\t"))
    with open("employees.txt", "r") as file:
        for line in file.readlines():
            sline = line.split()
            search = i.split()
            if (search[0] == sline[1] and search[-1] == sline[-1]):
                 found.append(sline[0])
    return found if found else ["ID not found"]


while True:
    query = input("Enter 1 to search by number of 2 to search by name or 3 to quit\t")
    match query:
        case "1":
            for y in lookup_employee():
                print(y)
        case "2":
            for y in lookup_id():
                print(y)
        case _:
            break


