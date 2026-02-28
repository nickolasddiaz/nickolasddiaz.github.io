

class FullName:
    def __init__ (self, fname, lname):
        self.fname = fname
        self.lname = lname
    def __str__(self):
        return f"Full name: {self.fname} {self.lname}"

    def __gt__(self,other):
        alpha = { "A": 1, "B": 2, "C": 3, "D": 4, "E": 5, "F": 6, "G": 7, "H": 8, "I": 9, "J": 10, "K": 11, "L": 12, "M": 13, "N": 14, "O": 15, "P": 16, "Q": 17, "R": 18, "S": 19, "T": 20, "U": 21, "V": 22, "W": 23, "X": 24, "Y": 25, "Z": 26 }
        if (self.lname != other.lname):
            name1 = self.lname.upper()
            name2 = other.lname.upper()
        elif (self.fname != other.fname):
            name1 = self.fname.upper()
            name2 = other.fname.upper()
        else:
            return f"{self.fname} {self.lname} and {other.fname} {other.lname} are the same"
        temp1 = 0
        temp2 = 0
        for i in range(min(len(name1), len(name2))):
            temp1 = alpha[name1[i]]
            temp2 = alpha[name2[i]]
            if (temp1 > temp2):
                return f"{self.fname} {self.lname} is greater than {other.fname} {other.lname}"
            elif (temp1 < temp2):
                return f"{self.fname} {self.lname} is less than {other.fname} {other.lname}"
        if len(name1) > len(name2):
            return f"{self.fname} {self.lname} is greater than {other.fname} {other.lname}"
        elif len(name1) < len(name2):
            return f"{self.fname} {self.lname} is less than {other.fname} {other.lname}"
        else:
            return f"{self.fname} {self.lname} and {other.fname} {other.lname} are the same"
