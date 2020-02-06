const inquirer = require("inquirer");
const chalk = require("chalk");

class DigitalPal {
    constructor(hungry, sleepy, bored, age) {
        this.hungry = false;
        this.sleepy = false;
        this.bored = false;
        this.age = 0;
    }
    feed() {
        if (this.hungry) {
            console.log("That was yummy!");
            this.hungry = false;
            this.sleepy = true;
        } else {
            console.log("No thanks! I'm full.");
        };
    };

    sleep() {
        if (this.sleepy) {
            console.log("Zzzzzzz");
            this.sleepy = false;
            this.bored = true;
            increaseAge();
        } else {
            console.log("No way! I'm not tired.");
        };
    };

    play() {
        if (this.bored) {
            console.log("Yay! Let's play!");
            this.bored = false;
            this.hungry = true;
        } else {
            console.log("Not right now. Later?");
        };
    };

    increaseAge() {
        this.age++;
        console.log("Happy birthday to me! I am " + this.age + " old!");
    };
};

const dog = new DigitalPal();

dog.outside = false;

dog.questions = [
    {
        type: "list",
        name: "dogAction",
        choices: ["Go outside", "Go inside", "Bark"],
        message: "What would you like your dog to do?"
    }
];

dog.bark = function () {
    console.log("Woof! Woof!");
};

dog.goOutside = function () {
    if ((dog.outside == false)) {
        console.log("Yay! I love the outdoors!");
        dog.outside = true;
        dog.bark();
        console.log("Dog outside function status: " + dog.outside);
    } else {
        console.log("We're already outside though...");
    };
};

dog.goInside = function () {
    if (dog.outside) {
        console.log("Do we have to?...Fine.");
        dog.outside = false;
    } else {
        console.log("I'm already inside though...");
    };
};

const cat = new DigitalPal();

cat.houseCondition = 100;

cat.meow = function () {
    console.log("Meow! Meow!");
};

cat.destroyFurniture = function () {
    if (cat.houseQuality !== 0) {
        cat.houseQuality -= 10;
        console.log("MUAHAHAHAHAHAHA! TAKE THAT FURNITURE!");
        cat.bored = false;
        cat.sleepy = true;
    };
};

cat.buyNewFurniture = function () {
    cat.houseQuality += 50;
    console.log("Are you sure about that?");
};

const questions = [
    {
        type: "list",
        name: "pet",
        choices: ["cat", "dog", "other"],
        message: "Which pet will you chose?"
    }
];

inquirer.prompt(questions).then(answers => {
    switch (answers.pet) {
        case "dog":
            console.log(chalk.bgBlue("It is a bone you lucky dog!"));
            inquirer.prompt(dog.questions).then(dogAnswers => {
                if (dogAnswers.dogAction === "Bark") {
                    dog.bark();
                };
                if(dogAnswers.dogAction === "Go outside"){
                    dog.goOutside();
                };
                if(dogAnswers.dogAction === "Go inside"){
                    dog.goInside();
                };
            });
            break;
        case "cat":
            console.log(chalk.bgRed("No cats allowed ..."));
            break;
        default:
            console.log(chalk.bgGreen("You chose wrong, Jack!"));
    };
});

console.log("\ndog outside status: " + dog.outside);