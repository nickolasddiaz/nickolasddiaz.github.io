# Lab #2 by Nickolas Diaz
movie_name = input("Give me the movie name: ")
adult_tickets = int(input("Give me how many adult tickets were sold today: "))
child_tickets = int(input("Give me how many child tickets were sold today: "))

adult_cost = 10
child_cost = 6
gross_profit = adult_tickets * adult_cost + child_tickets * child_cost
studio_profit = gross_profit * .2
theater_profit = gross_profit - studio_profit

print(f"Movie Name:         {movie_name}")
print(f"Adult Tickets:      {adult_tickets:,}")
print(f"Child Tickets:      {child_tickets:,}")
print(f"Theater Profit:     ${theater_profit:,.2f}")
print(f"Studio Profit:      ${studio_profit:,.2f}")
print(f"Gross Profit:       ${gross_profit:,.2f}")