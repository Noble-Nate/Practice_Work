def percent(input):
    return float(input.strip('%')) / 100.0


meal = raw_input("What is the meals total: ")
meal_int = int(meal)
tax = raw_input("What is the Tax Rate: ")
tip = raw_input("How much do you want to tip: ")

tax_float = percent(tax)
tip_float = percent(tip)

meal_total = meal_int + meal_int * tax_float
total = meal_total + meal_total * tip_float

print total
