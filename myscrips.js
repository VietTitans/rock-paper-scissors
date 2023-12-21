Initialize 
    get random.generator()
    choice = ["rock", "paper", "scissors"]

function getComputerChoice()
    run random.generator(choice)
    set random.generator to computerChoice
    
    return computerChoice

function getUserInput()
    get userinput (give example on input field "Write either rock, paper, scissors")
    if userInput is not equal to either rock, paper or scissors then print "Invalid input. Please write either rock, paper, scissors"
    ENDIF
    return userInput

function playGame()
    if userInput is equal to rock AND computerChoice is equal to scissors then print "You win"
        else if userInput is equal to paper AND computerChoice is equal to rock then print "You win"
        else if userInput is equal to scissors AND computerChoice is equal to paper then print "You win"
        else if userInput is equal to computerChoice print "It's a tie"
        else print "You lose"
    ENDIF
    return score
