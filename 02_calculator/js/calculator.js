'use strict'
// ページ上の要素(Element)を参照
const elementSelect = document.getElementById("calcType");
const elementNum1 = document.getElementById("num1");
const elementNum2 = document.getElementById("num2");
const elementResult = document.getElementById("result");

elementSelect.addEventListener("change",
    function(){
            const result= calculate(
            Number(elementNum1.value), 
            Number(elementNum2.value),
            elementSelect.value
           );
           elementResult.innerHTML=result;
        },false
);
elementNum1.addEventListener("change",
    function(){
            const result= calculate(
            Number(elementNum1.value), 
            Number(elementNum2.value),
            elementSelect.value
           );
           elementResult.innerHTML=result;
        },false
);
elementNum2.addEventListener("change",
    function(){
            const result= calculate(
            Number(elementNum1.value), 
            Number(elementNum2.value),
            elementSelect.value
           );
           elementResult.innerHTML=result;
        },false
);

function calculate(num1, num2, calcType) {
    let result;
    // 計算の種類で処理を分岐
    switch (calcType) {
    case "type-add": // 足し算の場合
        result = num1 + num2;
        break;
    case "type-substract": // 引き算の場合
        result = num1 - num2;
        break;
    case "type-multiply": // 掛け算の場合
        result = num1 * num2;
        break;
    case "type-divide": // 割り算の場合
        result = num1 / num2;
        break;
    }
    return result;
}
/** 計算結果をクリアします。(clear Result**/
