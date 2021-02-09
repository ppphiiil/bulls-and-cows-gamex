
// Import package
//const prompt = require('prompt-sync')({ sigint: true });

function getSecretNumber(n = 4) {
    let random = 0;
    do {
        random = (Math.floor(Math.random() * ((Math.pow(10, n) - 1) - Math.pow(10, (n - 1))))) + Math.pow(10, (n - 1));
    } while (!unique(random))
    return random;
}
//console.log(getSecretNumber());

function unique(number) {
    //make an array
    let arr = [];
    arr = numberToArray(number);

    for (let num of arr) {
        counter = 0;
        for (let i in arr) {
            if (arr[i] == num) {
                counter++;
            }
        }
        //wenn öfter als 1 mal vorhanden return false
        if (counter > 1) {
            return false; //not unique
        }

    }
    return true; //is unique
}
//!console.log(checkUnique(0224)); works not with 0

function getHints() {
    let bullcounter = 0;
    let cowcounter = 0;
    let restInputArr = [];

    //get input from textfield

    input = document.getElementById("input").value;
    //document.getElementById('log').innerHTML = input;

    error = checkInput(input);
    document.getElementById('error').innerHTML = error;

    if (error != "") {
        return
    }

    //number to array
    let inputArr = [];
    inputArr = numberToArray(input);
    //console.log(inputArr);

    secretArr = numberToArray(secret);
    //console.log(secretArr);


    //look for bulls
    for (let i in inputArr) {

        if (inputArr[i] === secretArr[i]) {
            bullcounter++;
        } else {
            restInputArr.push(inputArr[i]);
        }

    }

    //console.log(restInputArr);

    //look for cows
    for (let i in inputArr) {

        if (restInputArr.includes(secretArr[i])) {
            cowcounter++;
        }
    }
    restInputArr = [];


    //add hints
    let newestHint = `${parseInt(input)} , bulls: ${bullcounter} , cows: ${cowcounter}`;
    addHints(newestHint);
    // document.getElementById("hints").innerHTML = { input: parseInt(input), secret: secret, bulls: bullcounter, cows: cowcounter }.toString();

}
function addHints(newestHint) {
    var para = document.createElement("p");
    para.innerHTML = newestHint;
    document.getElementById("hints").appendChild(para);
}


function numberToArray(number) {
    let array = number.toString().split("");//stringify the number, then make each digit an item in an array
    return array.map(x => parseInt(x));//convert all the items back into numbers
}


function checkInput(input, digitLength = 4) {
    let message = "";

    if (input == "exit") {
        return "It was nice to play with you ;) BYE BYE";
    } else

        if (!input.length) {
            return "Please, guess a number";
        } else

            if (isNaN(parseInt(input))) {
                return "Thats not a number ;) ";
            } else

                if (!unique(input)) {
                    return "please use unique digits";
                } else

                    if (input.length < digitLength) {
                        return "less digits, 4 digits please";
                    }
    return message = "";
}


function getInput() {
    input = document.getElementById('input').value;
    document.getElementById('log').innerHTML = input;
}

function startGame() {
    playerName = prompt('Hi, whats your name? ');


    //welcome text
    document.getElementById("welcome").innerHTML = `Hello ${playerName}... Let's play a game! `;
    document.getElementById("info").innerHTML = "Try to guess the 4 digit numbers";

    //get the secret Number
    secret = getSecretNumber(digitLength);

    //print secret number
    document.getElementById('secret').innerHTML = `Secret Number: ****`;

    //visible input
    document.getElementById("input-form").style.visibility = "visible";

    // document.getElementById("getHints").addEventListener("click", getHints);







}

let secret = [];
let input = 0;
let digitLength = 4;
let bulls = 0;
let cows = 0;
let error = "";
let playerName = "Player1";
