class Character {
    constructor(name, profession, gender, age, strength, hitPoints) {
        this.name = name;
        this.profession = profession;
        this.gender = gender;
        this.age = age;
        this.strength = strength;
        this.hitPoints = hitPoints;

    }

    stats() {
        console.log(this.name, this.profession, this.gender, this.age, this.strength, this.hitPoints);
    }

    isAlive() {
        return this.strength >= 0 ? true : false;
    }

    attack(otherCharacter) {
        otherCharacter.strength -= this.hitPoints;
    }

    levelUp(){
        this.age++;
        this.strength += 5;
        this.hitPoints += 25;
    }
};

var Scott = new Character("Scott", "Developer", "male", 39, 100, 10);
var Dan = new Character("Dan", "Teacher", "male", 45, 100, 10);

Scott.stats();
Dan.stats();

Scott.attack(Dan);

Dan.stats();