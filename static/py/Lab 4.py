# Lab #4 by Nickolas Diaz
stores = int(input("How many stores do you have?\n"))
store = [input("Enter today’s sales for store " + str(i+1) + ": \n") for i in range(stores)]
i = 0
t = ""
print("SALES BAR CHART  (Each * = $100)")
for i ,sales in enumerate(store):
    t = "*" * int(int(sales) / 100)
    print(f"Store {i+1}: {t}")
    i += 1
