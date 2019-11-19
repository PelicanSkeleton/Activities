class Character {
    constructor(name, profession, gender, age, strength, hitPoints){
        this.name = name;
        this.profession = profession;
        this.gender = gender;
        this.age = age;
        this.strength = strength;
        this.hitPoints = hitPoints;

    }

     stats(){
        console.log(this.name, this.profession, this.gender, this.age, this.strength, this.hitPoints);
    }

    isAlive(){
        if(hitPoints <= 0){
            return false;
        } else {
            return this.strength;
        };
    }

    attack(){

    }
};

var Scott = new Character("Scott", "Developer", "male", 39, 10, 0);
var Dan = new Character("Dan", "Teacher", "male", 45, 10, 0);

Scott.stats();
Dan.stats();
