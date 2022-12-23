// var username = prompt("Enter your name");
// alert("Our next boss is " + username);

var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")

var serverURL ="	https://api.funtranslations.com/translate/minion.json"

function getTranslateURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error){
    console.log("error occured", error)
    alert("Something wrong with the server! try again after sometime")
}

function clickEvenHandler() {

    // Taking input
    var inputText = txtInput.value;

    // calling server for processing
    fetch(getTranslateURL(inputText))
    .then(Response => Response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickEvenHandler);