# Lab #9 by Nickolas Diaz

dic = {}
count = 1
while True:
    key = input(f"Give me the #{count} City or type 1 to quit \t")
    if (key[0] == "1" ):
        break
    value = input(f"Give me the #{count} population or type quit to quit \t")
    if (key[0].lower() == "q" ):
        break
    elif (isinstance(value, int)):
        print("Population should be a digit no characters")
    elif any(char.isdigit() for char in key):
        print("City should be a string no numbers")
    else:
        dic[key] = abs(int(value))
        count += 1

over2mil = {key: value for key, value in dic.items() if (value > 2000000)}
for key, value in over2mil.items() :
    print (key, value)


