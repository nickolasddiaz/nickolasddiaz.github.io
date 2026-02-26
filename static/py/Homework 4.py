# Homework 4 by Nickolas Diaz
from Date import Date
from Event import Event
import pickle

def load_event():
   try:
      with open("event.dat", 'rb') as file:
         return pickle.load(file)
   except FileNotFoundError:
      return {}

def save_event(events):
   with open("event.dat", 'wb') as file:
      pickle.dump(events, file)

def add_event(events):
   name = input("Name: ")
   if name in events:
      print(f'{events[name]} already exists')
      return
   start_hour = int(input("Start Hour in numbers 0-23: "))
   end_hour = int(input("End Hour 0-23: "))
   day = int(input("day in numbers: "))
   month = int(input("month in numbers: "))
   year = int(input("year in numbers: "))
   event_date = Date(day, month, year)
   event_time = Event(name, start_hour, end_hour, event_date)
   overlap = []
   for test in events:
      if test.event_date.__str__() == event_date.__str__():
         if test.start_hour <= start_hour < test.end_hour or test.start_hour < end_hour <= test.end_hour:
            overlap.append(test)
   if overlap:
      print("Overlap Occurred")
      for event in overlap:
         print(f"Name:{event.event_name.__str__()} Date:{event.event_date.__str__()} Start:{event.start_hour.__str__()} End:{event.end_hour.__str__()}")
   else:
      events.append(event_time)

def cancel_event(events):
   if not events:
      print("No Events to Cancel")
   else:
      for event in events:
         print(event.event_name.__str__())
      temp = input("Give me the name to cancel")
      for event in events:
         if (event.event_name.__str__() == temp):
            events.remove(event)


def view_event(events):
   if not events:
      print("No events exist")
   else:
      for event in events:
         print(f"Name:{event.event_name.__str__()} Date:{event.event_date.__str__()} Start:{event.start_hour.__str__()} End:{event.end_hour.__str__()}")



def main():
   events = list(load_event())
   while True:
      choice = int(input("\nEnter 1) to add an event, 2) to cancel an event, 3) to view all events, 4) to quit: "))
      if choice == 1:
         add_event(events)
      elif choice == 2:
         cancel_event(events)
      elif choice == 3:
         view_event(events)
      elif choice == 4:
         break

   save_event(events)


main()
