# Lab #6 by Nickolas Diaz
with open("results.txt", "a") as file:
    while True:
        try:
            num1 = int(input("Enter the first number or q to quit: "))
            num2 = int(input("Enter the second number or q to quit: "))
            num3 = num1 + num2
            text = (f"{num1} + {num2} = {num3}\n")
            file.write(text)
            print(f"Added {text}")
        except:
            print("Program Quit")
            break