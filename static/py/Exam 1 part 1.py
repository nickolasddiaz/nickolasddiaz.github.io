from random import randint

randflip = [randint(0, 1) for i in range(8)]
correct = 0
incorrect = 0
userflip = []
throw = []
print("Type 0 for heads and 1 for tails")
for i in range(8):
    userflip.append(input())
    if int(userflip[i]) == int(randflip[i]):
        correct += 1
        throw.append("Y")
        print("correct")
    else:
        incorrect += 1
        throw.append("N")
        print("incorrect")
print("Throw\tCorrect\n")
for i ,stat in enumerate(throw):
    print(f"{i+1}\t\t{stat}\n")
print(f"{correct / 8 * 100}% Correct")

