var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// outputDiv,innerText = "Tanay Pratap"



function clickHandler() {
    outputDiv.innerText = "acdce" + txtInput.value;
};

btnTranslate.addEventListener("click", clickHandler)