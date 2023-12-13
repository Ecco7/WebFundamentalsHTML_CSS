let count1 = 9;
let count2 = 12;
let count3 = 9;

let countElement1 = document.querySelector("#count1");
let countElement2 = document.querySelector("#count2");
let countElement3 = document.querySelector("#count3");

function add1(){
    count1++;
    countElement1.innerText = count1 + " Like(s)";
}

function add2(){
    count2++;
    countElement2.innerText = count2 + " Like(s)";
}
function add3(){
    count3++;
    countElement3.innerText = count3 + " Like(s)";
}
