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
    return userInput

function playGame()
    if rock 