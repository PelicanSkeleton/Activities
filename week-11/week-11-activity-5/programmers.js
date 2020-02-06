class Programmer {
    constructor(name, job, age, language){
        this.name = name;
        this.job = job;
        this.age = age;
        this.language = language;
    };
    printInfo() {
        console.log(
            "Name: " + this.name +
            "\nPosition: " + this.job +
            "\nAge: " + this.age +
            "\nLanguage: " + this.language
        );
    };

    otherWayToPrint(){
        this.printInfo();
    };
};

var scott = new Programmer("Scott", "Student", 39, "Javascript");

scott.otherWayToPrint();