const characters = [
  "A",  "B",  "C",  "D",  "E",  "F",  "G",  "H",  "I",  "J",  "K",  "L",  "M",  "N",  "O",  "P",  "Q",  "R",  "S",  "T",  "U",  "V",  "W",  "X",  "Y",  "Z",
  "a",  "b",  "c",  "d",  "e",  "f",  "g",  "h",  "i",  "j",  "k",  "l",  "m",  "n",  "o",  "p",  "q",  "r",  "s",  "t",  "u",  "v",  "w",  "x",  "y",  "z",
  "0",  "1",  "2",  "3",  "4",  "5",  "6",  "7",  "8",  "9",
  "~",  "`",  "!",  "@",  "#",  "$",  "%",  "^",  "&",  "*",  "(",  ")",  "_",  "-",  "+",  "=",  "{",  "[",  "}",  "]",  ",",  "|",  ":",  ";",  "<",  ">",  ".",  "?",  "/",
];


const specialChars = ["~", "`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
const numbersOnly = ["0",  "1",  "2",  "3",  "4",  "5",  "6",  "7",  "8",  "9"]


let passboxoneEl = document.getElementById("passbox-one-el");
let passboxtwoEl = document.getElementById("passbox-two-el");
let eightbtnEl = document.getElementById("eight-btn-el");
let tenbtnEl = document.getElementById("ten-btn-el");
let twentybtnEl = document.getElementById("twenty-btn-el");

let passLength = 15;

function passwordLength(n) {
  passLength = n;
  randomPassword();
}

function randomPassword() {
  passboxoneEl.textContent = "";
  passboxtwoEl.textContent = "";
  console.log(passLength);
  for (let i = 0; i < passLength; i++) {
    let randomNo = Math.floor(Math.random() * characters.length);
    passboxoneEl.textContent += characters[randomNo];
  }
  for (let i = 0; i < passLength; i++) {
    let randomNo = Math.floor(Math.random() * characters.length);
    passboxtwoEl.textContent += characters[randomNo];
  }
}

// Copy-on-click working but could be DRYer
function copyOnClickOne() {
  let p1 = passboxoneEl.textContent;
  navigator.clipboard.writeText(p1);

}

function copyOnClickTwo() {
    let p2 = passboxtwoEl.textContent;
    navigator.clipboard.writeText(p2);

  }


