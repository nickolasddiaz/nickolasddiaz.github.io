# Homework #3 by Nickolas Diaz
num1, num3, num2 = [input("Enter a number: \n") if i in (0,2) else input("Enter 0 to add and 1 to multiply: \n") for i in range(3)]

try:
    num1, num2 = int(num1), int(num2)
    result = num1 + num2 if num3 == "0" else num1 * num2
    print(result)
except ValueError:
    print("Error: The input was not a number")