# Homework 1 by Nickolas Diaz
company = input("name of the company")
stockb = int(input("number of shares purchased"))
stockbm = int(input("cost of each share purchased"))
stocks = int(input("number of shares sold"))
stocksm = int(input("cost of each share sold"))

price_paid = stocks * stocksm
stock_left = stockb - stocks
remaining_worth = stock_left * stocksm
stocks_made = price_paid - (stocks * stockbm)
print(f"name of the company:      {company}")
print(f"price paid for the sale:${price_paid:,.2f}")
print(f"shares remaining:         {stock_left:,}")
print(f"remaining shares worth:  ${remaining_worth:,.2f}")
print(f"profit or loss:          ${stocks_made:,.2f}")
