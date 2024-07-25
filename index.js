//counter program

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const countLab = document.getElementById("countLab")
let count = 0;

btn3.onclick = function(){
    count++;
    countLab.textContent = count;

}
btn1.onclick = function(){
    count--;
    countLab.textContent = count;

}
btn2.onclick = function(){
    count = 0;
    countLab.textContent = count;
}