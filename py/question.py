class question:
    def __init__(self, question, answer, Q4answer):
        self.question = question
        self.answer = answer
        self.Q4answer = Q4answer

    def __str__(self):
        temp = "The Questions are\n"
        for i in range(0, 4):
            temp += f"#{i+1}: {self.Q4answer[i]}\n"
        return temp

    def guess(self, checkifcorrect):
        return self.Q4answer[self.answer] == self.Q4answer[checkifcorrect-1]