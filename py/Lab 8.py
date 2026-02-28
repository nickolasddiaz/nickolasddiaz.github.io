# Lab #8 by Nickolas Diaz
lin = 0
dictionary = {}
with open("quote.txt", "r") as file:
    for line in file.readlines():
        lin += 1
        sline = line.split()
        for word in sline:
            try:
                s = (dictionary[word])
                dictionary[word] = str(s) + " " + str(lin)
            except:
                dictionary[word] = str(lin)


for word, num in dictionary.items():
    print(word, num)