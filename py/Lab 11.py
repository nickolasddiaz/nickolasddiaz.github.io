# Lab #11 by Nickolas Diaz
from Contact import Contact
import pickle
def load_contacts():
   """ Unpickle the data on mydata.dat and save it to a dictionary
   Return an empty dictionary if the file doesn't exist """
   try:
      with open("mydata.dat", 'rb') as file:
         return pickle.load(file)
   except FileNotFoundError:
      return {}


def save_contacts(contacts):
   """ Serialize and save the data in the 'contacts' dictionary """
   with open("mydata.dat", 'wb') as file:
      pickle.dump(contacts, file)


def add(contacts):
   """ Ask the user to add a contact to the 'contacts' dictionary
   Do not allow duplicate names """
   name = input("Name: ")
   if name in contacts:
      print("An entry already exists for that contact!")
      return

   email = input("Email: ")
   entry = Contact(name, email)

   # Add phone numbers to the new Contact object until the user decides to stop
   while True:
      next_num = input("Enter a phone number (or -1 to stop): ")
      if next_num == "-1":
         break
      entry.add_number(next_num)

   # Add the new Contact object to the dictionary
   contacts[name] = entry


def look_up(contacts):
   """ Print the information related to the given name (if it exists in the dictionary) """
   name = input("Enter a name: ")
   if name in contacts:
      print(contacts[name])
   else:
      print("There is no contact with that name")


def delete(contacts):
   """ Delete the contact associated with the name the user enters (if it exists in the dictionary) """
   name = input("Enter a name to remove from your list of contacts: ")
   if name in contacts:
      print("Are you sure you want to delete the following contact? ")
      print(contacts[name])
      choice = input("'y' or 'n': ")
      if choice == 'y':
         del contacts[name]
      else:
         print("Contact saved in dictionary")
   else:
      print("There is no contact with that name")

def edit(contacts):
   name = input("Enter a name: ")
   if name in contacts:
      print(contacts[name])
      temp = input("1 for name 2 for email and 3 for number")

      if temp == '1':
         temp_name = input("Type new name")
         contacts[temp_name] = contacts.pop(name)
         contacts[temp_name].set_name(temp_name)
      elif temp == '2':
         temp_email = input("Type new email")
         contacts[name].set_email(temp_email)
      elif temp == '3':
         temp_old_num = input("type old phone number")
         temp_new_num = input("type new phone number")
         contacts[name].remove_number(temp_old_num)
         contacts[name].add_number(temp_new_num)
      else:
         print("Invalid choice")
   else:
      print("There is no contact with that name")


def main():
   contacts = load_contacts()

   ### Ask the user what to do next each loop iteration
   while True:
      choice = int(input("\nEnter 1) to add a contact, 2) to lookup a contact, "
                  "3) to delete a contact, 4) to edit a contact, 5) to quit: "))
      if choice == 1:
         add(contacts)
      elif choice == 2:
         look_up(contacts)
      elif choice == 3:
         delete(contacts)
      elif choice == 4:
         edit(contacts)
      elif choice == 5:
         break

   save_contacts(contacts)


main()
