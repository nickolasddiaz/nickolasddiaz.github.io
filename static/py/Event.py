class Event:
    def __init__(self, event_name, start_hour, end_hour, event_date):
        self.event_name = event_name
        self.event_date = event_date
        self.start_hour = start_hour
        self.end_hour = end_hour

        @property
        def event_name(self):
            return self.event_name

        @property
        def event_date(self):
            return self.event_date

        @property
        def start_hour(self):
            return self.start_hour

        @property
        def end_hour(self):
            return self.end_hour

        def validate_start_hour(self, start_hour):
            if(0 > start_hour > 23):
                raise ValueError("Invalid Start Hour: " + str(start_hour))

        def validate_end_hour(self, end_hour):
            if(0 > end_hour > 23):
                raise ValueError("Invalid End Hour: " + str(end_hour))

        @event_name.setter
        def name(self, event_name):
            self._event_name = event_name

        @event_date.setter
        def name(self, event_date):
            self._event_date = event_date

        @start_hour.setter
        def name(self, start_hour):
            self.validate_start_hour(start_hour)
            self._start_hour = start_hour

        @end_hour.setter
        def name(self, end_hour):
            self.validate_end_hour(end_hour)
            self._start_end_hour = end_hour

        def __str__(self):
            return "Event name: " + self.event_name + ", Start Time: " + str(self.start_hour) + ", End Time: " + str(self.end_hour) + ", Event Date: " + str(self.event_date)

