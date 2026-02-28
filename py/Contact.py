class Contact:

   def __init__(self, name, email):
      self._name = name
      self._email = email
      self._phone_numbers = []

   def add_number(self, phone_number):
      """ Add 'phone_number' to the internal list """
      if phone_number in self._phone_numbers:
         print("That number is already in the list!")
      else:
         self._phone_numbers.append(phone_number)

   def remove_number(self, phone_number):
      if phone_number in self._phone_numbers:
         self._phone_numbers.remove(phone_number)

   def set_name(self, name):
      self._name = name

   def set_email(self, email):
      self._email = email

   @property
   def phone_numbers(self):
      return self._phone_numbers

   @property
   def name(self):
      return self._name

   @property
   def email(self):
      return self._email

   @email.setter
   def email(self, email):
      self._email = email

   @name.setter
   def name(self, name):
      self._name = name

   def __str__(self):
      return_string = "Name: " + self._name + "\n"
      return_string += "Numbers: " + "\n"
      for num in self._phone_numbers:
         return_string += "\t" + num + "\n"
      return_string += "Email: " + self._email
      return return_string