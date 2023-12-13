let count = 3;
let countElement = document.querySelector("#count");

function add1(){
    count++;
    countElement.innerText = count + " Like(s)";
}