const inpuut1 = document.getElementById("input1");
const inpuut2 = document.getElementById("input2");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");

const submitBtn = document.getElementById("submit");

const resultat = document.getElementById("result");

let action = '+'



plusBtn.onclick = function () {
    action = '+'
}


minusBtn.onclick = function () {
    action = '-'
}

function colorOfResult (result) {
    if (result > 0) {
        resultat.style.color = 'green'
    } else if (result == 0) {
        resultat.style.color = 'pink'
    } else if (result < 0){
        resultat.style.color = 'red'
    }
    resultat.textContent = result;
}


function actionAndNumbers (inpuut1, inpuut2, action) {
    const num1 = +inpuut1.value
    const num2 = +inpuut2.value


    if (action == '+') {
        return num1 + num2
    } else if (action == '-') {
        return num1 - num2
    }
}

submitBtn.onclick = function () {
    const sum = actionAndNumbers (inpuut1, inpuut2, action)
    colorOfResult(sum)
}

// submitBtn.onclick = function () {
//     if (action == '+') {
//         const sum = Number(inpuut1.value) + Number(inpuut2.value);
//         colorOfResult(sum)
//     } else {
//         const sum = Number(inpuut1.value) - Number(inpuut2.value);
//         colorOfResult(sum)
//     }
   
// };



