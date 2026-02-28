# Homework 2 by Nickolas Diaz
grand_total = 0
stop = "yes"
while stop == "yes":
    books = int(input("How many books?\t"))
    cost = int(input("Cost per book\t"))
    member = input("Are you a free member, paid member, or non-member enter free/paid/non\t")

    costofbooks = books * cost
    tax = (books * cost) * 1.0925
    tax_amount = tax - costofbooks
    discount_amount = tax * .10
    points = 0

    total = tax if (member == "non") else tax / 1.1
    if member == "paid" or member == "free":
        if books == 1:
            points += 5
        elif books == 2:
            points += 15
        elif books == 3:
            points += 30 if member == "free" else 50 if member == "paid" else 0
        elif books >= 4:
            points += 100 if member == "paid" else 60 if member == "free" else 0

    grand_total += (total - tax_amount)
    print(f"How many Books:     {books}")
    print(f"Subtotal:           ${costofbooks:,.2f}")
    print(f"Tax Amount:         ${tax_amount:,.2f}")
    print({True: f"Amount Saved:       ${discount_amount:,.2f}\n", False: ""} [member == "paid" or member == "free"], end="")
    print(f"Final Amount:       ${total:,.2f}")
    print(f"Points Received:    {points:,.2f}")
    stop = input("Have Anonther Customer yes/no\t")
print(f"Money Store Made    {grand_total:,.2f}")


