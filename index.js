let resultJS = document.getElementById("result");
const buttonResult = document.getElementById("button=");

function x(){
  if (resultJS.innerHTML.indexOf('+', 0) >= 0) {
    console.log("Boa");
  } else {
    console.log("ops");
  }
}

buttonResult.addEventListener("click", x, true);



function addNumber(number) {
  resultJS.value += number;
}


function addText(text){
  let inputResultJS = resultJS.value;
if(inputResultJS.substr(0) == ""){
 console.log("Digite um número!");
}
 else if(inputResultJS.substr(-1) == "."){
  resultJS.value = inputResultJS.substring(0, inputResultJS.length-1);
  resultJS.value += text;
  
} else if(inputResultJS.substr(-1) == " ") {
  resultJS.value = inputResultJS.substring(0, inputResultJS.length-3);
  resultJS.value += text;
}
else{
  resultJS.value += text;
  }
}

function delete2() {
  let input = document.getElementById('result');
  let inputText = input.value;
  input.value = inputText.substring(0,inputText.length-1);
}


function clear2(){
  let input = document.getElementById('result');
  input.value = "";
}



/*function addNumber2(){

  let resultJS = document.getElementById("result");

  for (let cont = 0; cont < resultJS.length; cont++) {
    if (resultJS.value.indexOf('+', cont) >= 0 ||
    resultJS.value.indexOf('-', cont) >= 0||
    resultJS.value.indexOf('x', cont) >=0 ||
    resultJS.value.indexOf('/', cont) >=0) {

      resultJS.value += "tem";
    }
    else{
      resultJS.value += "nao tem";
      }
  }
}*/