var inquirer = require("inquirer");

class Player {
    constructor(name, position, offense, defense) {
        this.name = name;
        this.position = position;
        this.offense = offense;
        this.defense = defense;

        this.goodGame = function () {
            if (Math.floor(Math.random() * 2) === 0) {
                this.offense++;
                console.log(this.name + "'s offense has gone up!\n--------\n");
            } else {
                this.defense++;
                console.log(this.name + "'s defense has gone up!\n--------\n");
            };
        };

        this.badGame = function () {
            if (Math.floor(Math.random() * 2) === 0) {
                this.offense--;
                console.log(this.name + "'s offense has gone down!\n--------\n");
            } else {
                this.defense--;
                console.log(this.name + "'s defense has gone down!\n--------\n");
            };
        };

        Player.prototype.printStats = function () {
            console.log("Name: " + this.name +
                "\nPosition: " + this.position +
                "\nOffense: " + this.offense +
                "\nDefense: " + this.defense);
        };

    };
};


var starterArray = [];
var subsArray = [];
var score = 0;
var roundNumber = 0;
var maxRounds = 5;

create();

function playGame() {
    console.log("\n--------\nPlay Game\n--------\n");
    if (roundNumber < maxRounds) {
        playRound();
    } else {
        endGame();
    };
};


function create() {
    inquirer.prompt([
        {
            name: "name",
            message: "What is your player's name?"
        },
        {
            name: "position",
            message: "What is your player's position?"
        },
        {
            name: "offense",
            message: "On a scale of 1 to 10, how good is your offense?",
            validate: function (value) {
                if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
                    return true;
                } else {
                    return false;
                };
            }
        },
        {
            name: "defense",
            message: "On a scale of 1 to 10, how good is your defense?",
            validate: function (value) {
                if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
                    return true;
                } else {
                    return false;
                };
            }
        }
    ]).then(function (answers) {
        var newPlayer = new Player(answers.name, answers.position, parseInt(answers.offense), parseInt(answers.defense));


        if (starterArray.length < 2) {
            create();
            starterArray.push(newPlayer);
        } else if (subsArray < 1) {
            create();
            subsArray.push(newPlayer);
            newPlayer.printStats();
            playGame();
        };
    });

};

function playRound() {
    roundNumber++;
    console.log("\n--------\nRound: " + roundNumber + "\n--------\n");

    var offenseRandom = Math.floor(Math.random() * 20) + 1;
    var defenseRandom = Math.floor(Math.random() * 20) + 1;

    var teamOffense = 0;
    var teamDefense = 0;
    for (i = 0; i < starterArray.length; i++) {
        teamOffense += starterArray[i].offense;
        teamDefense += starterArray[i].defense;
    };

    console.log("Team Offense: " + teamOffense);
    console.log("Team Defense: " + teamDefense);
    console.log("Opponent Offense: " + offenseRandom);
    console.log("Opponent Defense: " + defenseRandom);

    if (teamOffense > defenseRandom) {
        score++;
        console.log("You scored a point!\nScore: " + score);
    };

    if (teamDefense < offenseRandom) {
        score--;
        console.log("You lost a point...\nScore: " + score);
    };

    substitutePlayer();
};

function substitutePlayer() {
    inquirer
        .prompt([
            {
                name: "confirm",
                type: "confirm",
                message: "Would you like to swap out a player?"
            }
        ]).then(function (answer) {
            if (answer.confirm === true) {
                inquirer
                    .prompt([
                        {
                            name: "sub",
                            type: "rawlist",
                            message: "Who would you like to sub in?",
                            choices: subsArray
                        }
                    ]).then(function (subIn) {
                        var sideline = {};
                        var number = 0;
                        for (i = 0; i < subsArray.length; i++) {
                            if (subsArray[i].name === subIn.sub) {
                                number = i;
                                sideline = subsArray[i];
                            };
                        }
                        inquirer
                            .prompt([
                                {
                                    name: "sub",
                                    type: "rawlist",
                                    message: "Who would you like to sub out?",
                                    choices: starterArray
                                }
                            ]).then(function (subOut) {
                                for (i = 0; i < starterArray.length; i++) {
                                    if (starterArray[i].name === subOut.sub) {
                                        subsArray[number] = starterArray[i];
                                        starterArray[i] = sideline;
                                        console.log("Swap out successful!");
                                    };
                                }
                                playGame();
                            });
                    });
            } else {
                playGame();
            };

        })
};

function endGame() {
    console.log("\n--------\n FINAL SCORE: " + score + "\n--------\n");

    if (score > 0) {
        console.log("Good game team! Way to hustle!\nYour starters' stats have improved.");
        for (i = 0; i < starterArray.length; i++) {
            starterArray[i].goodGame();
        };
    }

    if (score < 0) {
        console.log("Better luck next time!\nYour starters' stats have decreased.");
        for (i = 0; i < starterArray.length; i++) {
            starterArray[i].badGame();
        };
    }

    if (score === 0) {
        console.log("It was a tie game. No change in stats.");
    };

    inquirer
        .prompt([
            {
                name: "again",
                type: "confirm",
                message: "Would you like to play another match?"
            }
        ]).then(function (answer) {
            if (answer.again === true) {
                roundNumber = 0;
                playGame();
            } else {
                console.log("Play again soon!");
            };
        })
};