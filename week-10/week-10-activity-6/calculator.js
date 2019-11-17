console.log(process.argv);

function add() {
    console.log(parseInt(process.argv[3]) + parseInt(process.argv[4]))
};

function substract(){
    console.log(parseInt(process.argv[3]) - parseInt(process.argv[4]))
};

function multiply(){
    console.log(parseInt(process.argv[3]) * parseInt(process.argv[4]))
};

function divide(){
    console.log(parseInt(process.argv[3]) / parseInt(process.argv[4]))
};

function remainder(){
    console.log(parseInt(process.argv[3]) % parseInt(process.argv[4]))
};

switch(process.argv[2]){
    case "add": 
        add()
        break;
    case "subtract":
        substract()
        break;
    case "multiply": 
        multiply()
        break;
    case "divide": 
        divide()
        break;
    case "remainder": 
        remainder()
        break;
    default: console.log("Please type an operator: add, subtract, multiply, divide, remainder.")
};