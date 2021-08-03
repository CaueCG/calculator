let resultJS = document.getElementById("result");
const buttonResult = document.getElementById("button=");
const buttonMais = document.getElementById("button+");

function x(){
  if (resultJS.innerHTML.indexOf('+', 0) >= 0) {
    console.log("Boa");
  } else {
    console.log("ops");
  }
}

buttonResult.addEventListener("click", calculate);
buttonResult.addEventListener("click", x);

function addPoint(ponto){
  if (resultJS.innerHTML.indexOf(" ", 0) < 0 ){ 
    resultJS.innerHTML +=ponto;
  }
  else if (resultJS.innerHTML.indexOf( " ", 0 ) >= -) {
    
  }
}

function addNumber(number) {
  resultJS.value += number;
}


function addText(text){
  let inputResultJS = resultJS.innerHTML;

if(inputResultJS.substr(0) == ""){
 alert("Digite um número!");
}
 else if(inputResultJS.substr(-1) == "."){
  resultJS.innerHTML = inputResultJS.substring(0, inputResultJS.length-1);
  resultJS.innerHTML += text;
  
} else if(inputResultJS.substr(-1) == " ") {
  resultJS.innerHTML = inputResultJS.substring(0, inputResultJS.length-3);
  resultJS.innerHTML += text;
}
else{
  resultJS.innerHTML += text;
  }
}

function delete2() {
  let input = document.getElementById('result');
  let inputText = input.value;

  if(inputText.substr(-1) == " "){
  input.value = inputText.substring(0,inputText.length-3);
} else{
  input.value = inputText.substring(0,inputText.length-1);
  }
}


function clear2(){
  let input = document.getElementById('result');
  input.value = "";
}

function calculate(){
  let resultJS = document.getElementById("result").innerHTML;
  let resultJSDelete = document.getElementById("result");
  let inputResultJS = resultJSDelete.value;

  if(inputResultJS.substr(-1) == " "){
    resultJSDelete.value = inputResultJS.substring(0, inputResultJS.length-3);
    alert("Digite outro número!") }
    /*Porque dá erro colocando document.getElementById("result").innerHTML 
    = eval(resultJS); aqui em cima?*/
  else if(resultJS){
    document.getElementById("result").innerHTML = eval(resultJS);
  }
  else{
    alert("Nada para calcular");
  }
  
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

/*function noteTwoSigns(){
  let quantity = 0;
  let resultJSD = document.getElementById("result").innerHTML;

  for (let index = 0; index <= resultJS.length; index++) {
    if(resultJS.innerHTML.indexOf(' + ', index) >= 0 ){
      quantity++;
    }
    else{
      quantity;
    }
  }
  
  if (quantity >= 3) {
    document.getElementById("result").innerHTML = eval(resultJSD);
  }
  else{
    addText(text);
  }
}*/

/*buttonMais.addEventListener("click", noteTwoSigns);*/