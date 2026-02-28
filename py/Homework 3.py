# Homework 3 by Nickolas Diaz
def add_score():
    while True:
        month = validate_num(1, 12, "Give me the month\t")
        lmonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November",  "December"]
        rmonth = lmonth[month-1]
        day = validate_num(1, 31, "Give me the day\t")
        if score_exists_for_date(rmonth,day):
            break
        else:
            print("Error same date in the records")
    scores = validate_num(0, 100, "Give me the number of scores\t") -1
    score = []
    i = 0
    while scores >= i:
        score.append((validate_num(0, 300, str("Give me the #" + str(i+1)) + " score\t")))
        i += 1
    scorelist = ' '.join(map(str, score))
    with open("results2.txt", "a") as file:
        file.write(f"\n{rmonth} {day} {scorelist}")

def validate_num(x, y, t):
    while True:
        try:
            z = int(input(t))
            if x <= z <= y:
                return z
            else:
                print(f"{z} is not between {x} and {y}. Try again.")
        except ValueError:
            print("Only integers are allowed.")

def score_exists_for_date(m,d):
    with open("results2.txt", "r") as file:
        for line in file.readlines():
            sline = line.split()
            if (sline[0] == m and sline[1] == str(d)):
                return False
    return True

def average_scores():
    total = 0
    num = 0
    with open("results2.txt", "r") as file:
        for line in file.readlines():
            sline = line.split()
            i = 2
            x = len(sline)
            num += x - i
            while x > 2:
                total += int(sline[i])
                i += 1
                x -= 1
    try:
        return total / num
    except ZeroDivisionError:
        return "0"

def num_300s():
    total = 0
    with open("results2.txt", "r") as file:
        for line in file.readlines():
            sline = line.split()
            i = 2
            x = len(sline)
            while x > 2:
                total += 1 if sline[i] == "300" else 0
                i += 1
                x -= 1
    return total

def view_scores():
    with open("results2.txt", "r") as file:
        for line in file.readlines():
            sline = line.split()
            scores = sline[1:len(sline)-1]
            scores_str = ', '.join(scores)
            print(f"On {sline[0]} {sline[1]},\tYou scored: {scores_str}, and {scores[-1]}")



while True:
    query = input("1 to quit 2 view scores 3 add score 4 average score 5 num of 300s\t")
    match query:
        case "1":
            break
        case "2":
            view_scores()
        case "3":
            add_score()
        case "4":
            print(f"{average_scores()} is the average score")
        case "5":
            print(f"you have {num_300s()} 300 scores")
        case _:
            break