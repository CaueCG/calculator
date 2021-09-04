var space = false;
const resultJS = document.getElementById("result");

//Declaração botão numbers
const b1= document.getElementById("button1");
const b2= document.getElementById("button2");
const b3= document.getElementById("button3");
const b4= document.getElementById("button4");
const b5= document.getElementById("button5");
const b6= document.getElementById("button6");
const b7= document.getElementById("button7");
const b8= document.getElementById("button8");
const b9= document.getElementById("button9");
const b0= document.getElementById("button0");
//Declaração botão sign
const bPlus= document.getElementById("button+");
const bMinus= document.getElementById("button-");
const bMultiplication= document.getElementById("buttonx");
const bDivsion= document.getElementById("button/");
const bPoint= document.getElementById("button.");
//Declaração botão cancel, equal, clear
const bEqual= document.getElementById("button=");
const bClear= document.getElementById("buttonClear");
const bCancel= document.getElementById("buttonCancel");

//funções
function addNumber(number){

     resultJS.innerHTML += number;
}
function addSigns(signs){
    if (resultJS.innerHTML.substr(0) == "") {
         alert("Digite um número!");
    } else if (resultJS.innerHTML.substr(-1) == " "){
        resultJS.innerHTML = resultJS.innerHTML.substring(0, resultJS.innerHTML.length-3);
         resultJS.innerHTML += signs;
    } else if(resultJS.innerHTML.substr(-1) == "."){
        resultJS.innerHTML = resultJS.innerHTML.substring(0, resultJS.innerHTML.length-1);
         resultJS.innerHTML += signs;
    }else{
         resultJS.innerHTML += signs;
    }
    space = true;
  }
function addPoint(){
    if (resultJS.innerHTML.substr(0) == "") {
        resultJS.innerHTML += "0.";
        space = false;
    }else{
        for (var cont = resultJS.innerHTML.length; cont >= 0; cont--) {
            if( resultJS.innerHTML.substr(cont - resultJS.innerHTML.length)
             == " " || resultJS.innerHTML.contOf(".", 0) < 0){
                space = true;
                cont=resultJS.innerHTML.length;
                break;
            } else if(( resultJS.innerHTML.substr(cont - resultJS.innerHTML.length)
             == ".")){
                space = false;
                cont=resultJS.innerHTML.length;
                break;
            }
        }
    }

    if(space && resultJS.innerHTML.substr(-1) == " "){
        space = false;
         resultJS.innerHTML += "0.";
    } else if(space){
        space = false;
         resultJS.innerHTML += ".";
    }
    else if(space){
         resultJS.innerHTML += "";
    }
}
function textClear(){
     space = true;
     resultJS.innerHTML = "";
}
function textDelete(){
    if (resultJS.innerHTML.substr(-1) ==" ") {
        space = false;
        resultJS.innerHTML = resultJS.innerHTML.substring(0, resultJS.innerHTML.length-3);
    } else if(resultJS.innerHTML.substr(-1) =="."){
        space = true;
    }
        else{
         resultJS.innerHTML = resultJS.innerHTML.substring(0, resultJS.innerHTML.length-1);
    }
}
function calculate(){
    if(resultJS.innerHTML.substr(0) == ""){
         alert("Nada para calcular");
    } else if(resultJS.innerHTML.substr(-1) == " "){
        resultJS.innerHTML = resultJS.innerHTML.substring(0, resultJS.innerHTML.length-3);
          resultJS.innerHTML = eval(resultJS.innerHTML);
    }else{
        resultJS.innerHTML = eval(resultJS.innerHTML);
    }
    //Porque colocando .toFixed(2) quebra o for
}


/*function calculate2 (){
    let signsResult = [];
    let re = /\+|\-|\*|\//;
    //Dificuldade sintaxe expressão regular de vários caracteres em um RegExp
    let ContentResultJS = resultJS.innerHTML.split(re);

     for (let cont = 0; cont < resultJS.innerHTML.length; cont++) {
        if(resultJS.innerHTML.substr(cont) == "+")
        signsResult.push("+");
        else if(resultJS.innerHTML.substr(cont) == "-")
        signsResult.push("-");
        else if(resultJS.innerHTML.substr(cont) == "-")
        signsResult.push("*");
        else if(resultJS.innerHTML.substr(cont) == "/")
        signsResult.push("/");
     }

    console.log(ContentResultJS);
    console.log(signsResult);
}*/

//addEventListener Numbers
b1.addEventListener("click",function(){addNumber(1)});
b2.addEventListener("click",function(){addNumber(2)});
b3.addEventListener("click",function(){addNumber(3)});
b4.addEventListener("click",function(){addNumber(4)});
b5.addEventListener("click",function(){addNumber(5)});
b6.addEventListener("click",function(){addNumber(6)});
b7.addEventListener("click",function(){addNumber(7)});
b8.addEventListener("click",function(){addNumber(8)});
b9.addEventListener("click",function(){addNumber(9)});
b0.addEventListener("click",function(){addNumber(0)});
//addEventListener Signs
bPlus.addEventListener("click", function(){addSigns(" + ")});
bMinus.addEventListener("click", function(){addSigns(" - ")});
bMultiplication.addEventListener("click", function(){addSigns(" * ")});
bDivsion.addEventListener("click", function(){addSigns(" / ")});
bPoint.addEventListener("click",addPoint);
//addEventListener clear, delete, calculate
bCancel.addEventListener("click", textDelete);
bClear.addEventListener("click", textClear);
bEqual.addEventListener("click", calculate);
