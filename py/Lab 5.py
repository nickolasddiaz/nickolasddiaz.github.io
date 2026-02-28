# Lab #5 by Nickolas Diaz
from random import randint
def get_name():
    i = input("Give Me User's Name\t\t")
    return i
def get_email():
    i = input("Give Me User's Email\t")
    return i
def calculate_id():
    i = randint(0, 9999)
    if len(str(i)) != 4:
        i = "0" * (4 - len(str(i))) + str(i)
    return i
def main():
    name = get_name()
    email = get_email()
    company_id = calculate_id()
    print(f"\nName:           {name}")
    print(f"Email:          {email}")
    print(f"Company ID:     {company_id}")
main()
