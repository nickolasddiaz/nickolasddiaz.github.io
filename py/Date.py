# A Date object represents a month, day, and year such as 12/25/21
# Invariant: Every Date's month value is 1-12 inclusive
# and its day value is from 1 to # of days in its month inclusive


class Date:

   # Constructor
   def __init__(self, d, m, y):

      # Attributes that start with an underscore are private and should not be accessed
      # By code outside of the Date class
      self.validate_month(m)
      self._month = m

      self.validate_day(d)
      self._day = d

      self.validate_year(y)
      self._year = y

   def validate_year(self, year):
      if year < 0:
         raise ValueError("Invalid Year: " + str(year))

   def validate_month(self, month):
      if month < 1 or month > 12:
         raise ValueError("Invalid Month: " + str(month))

   def validate_day(self, day):
      if day < 1 or day > self.days_in_month():
         raise ValueError("Invalid Day: " + str(day))

   @property
   def year(self):
      return self._year

   @year.setter
   def year(self, year):
      self.validate_year(year)
      self._year = year

   @property
   def month(self):
      return self._month

   @month.setter
   def month(self, month):
      self.validate_month(month)
      self._month = month

   @property
   def day(self):
      return self._day

   @day.setter
   def day(self, day):
      self.validate_day(day)
      self._day = day

   # The __str__ method is called whenever a Date object is passed to the print function
   def __str__(self):
      return str(self._month) + "/" + str(self._day) + "/" + str(self._year)

   # The __eq__ method is called to compare 'self' to 'other'. Return True if they have the same state
   def __eq__(self, other):
      if self._month == other.month and self._day == other.day and self._year == other.year:
         return True
      else:
         return False

   def __gt__(self, other):
      # Is 'self' greater than 'other'?
      # We define a date as 'greater' than another if it comes later in the calendar
      if self._year > other.year:
         return True
      elif self._year < other.year:
         return False

      # The years are equal, so check the months
      if self._month > other.month:
         return True
      elif self._month < other.month:
         return False

      # The months are equal, so check the days
      if self._day > other.day:
         return True

      # The 'other' comes before 'self' or the dates are equal.
      return False

   # Method to return how many days are in this month
   def days_in_month(self):
      if self._month in (4, 6, 9, 11):
         return 30
      elif self._month == 2:
         return 28
      else:
         return 31

   # Mutator method to move this Date to the following day
   def advance(self):
      self._day += 1
      if self._day > self.days_in_month():
         # We went past the end of the month, update day and month to reflect this
         self._day = 1
         self._month += 1

         if self._month > 12:
            # We moved into the next year. Update month and year to reflect this
            self._month = 1
            self._year += 1
