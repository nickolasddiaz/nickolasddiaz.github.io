
def get_score():
    while True:
        score = input()
        if (score.isdigit() and int(score) >= 0 and int(score) % 1 == 0):
            return(int(score))
def perform_calculations(num):
    list = []
    for i in range(num):
        print(f"Give me the score number {i+1}")
        list.append(get_score())
    average = 0
    high = 0
    low = 99999999
    for i, point in enumerate(list):
        if (high < point):
            high = point
        if (low > point):
            low = point
        average += point
    average = round(average / len(list),2)
    return average, high, low


averages, highs, lows = perform_calculations(int(input("How Many Games?")))
print(f"Average: {averages}")
print(f"Top Score in the Game: {highs}")
print(f"Lowest Score in the Game: {lows}")



