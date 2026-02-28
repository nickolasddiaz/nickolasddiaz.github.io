from question import question


def main():
    listquestions = [
    question("What college is a sister school of Cypress College",1,["Ceritos","Fulerton","Los Angeles City", "Santa Ana"]),
    question("Cypress College enrolls approximately ______ students each semester",2,["500,000","17,000","16,000","31,000"]),
    question("Cypress College is built on ___ acres.",0,["110","1,220","5,400","17"]),
    question("Cypress College is ranked #___ out of 2,241 schools in the nation that were analyzed for overall quality.",3,["500","234","50","898 "])
    ]
    player1score = 0
    player2score = 0
    number = 0
    while(number < 4):
        print(listquestions[number].question)
        print(listquestions[number])
        player1ans = input("Enter Number Player 1:\t")
        player2ans = input("Enter Number Player 2:\t")
        if listquestions[number].guess(int(player1ans)):
            player1score += 1
            print("Point for Player 1")
        if listquestions[number].guess(int(player2ans)):
            player2score += 1
            print("Point for Player 2")
        print()
        number += 1

    print(f"The Game has ended \nplayer1: {player1score} points\nplayer2: {player2score} points")

main()