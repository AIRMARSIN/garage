

let countNum = document.getElementById("count-num");
let saveEl = document.getElementById("save-el")
let enter = 0




console.log(countNum);

function addNum() {
    enter += 1
    countNum.innerText = enter 

}


function saveBtn() {
    var saveStr = enter + "-"
    saveEl.textContent += saveStr
    countNum.textContent = 0
    enter = 0
}

function resetBtn() {
    let saveEl = document.getElementById("save-el")
    saveEl.innerText += 0
    e
}

