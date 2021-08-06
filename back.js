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
    
    console.log(space);
    return resultJS.innerHTML += number;
}
function addSigns(signs){
    if (resultJS.innerHTML.substr(0) == "") {
        return alert("Digite um número!");
    } else if (resultJS.innerHTML.substr(-1) == " "){
        space = true;
        console.log(space);
        resultJS.innerHTML = resultJS.innerHTML.substring(0, resultJS.innerHTML.length-3);
        return resultJS.innerHTML += signs;
    } else if(resultJS.innerHTML.substr(-1) == "."){
        space =true;
        console.log(space);
        resultJS.innerHTML = resultJS.innerHTML.substring(0, resultJS.innerHTML.length-1);
        return resultJS.innerHTML += signs;
    }else{
        space = true;
        console.log(space);
        return resultJS.innerHTML += signs;
    }
    
  }
function addPoint(){
    if (resultJS.innerHTML.substr(0) == "") {
        return alert("Ta chapando caralho")
    }else{
        for (var cont = resultJS.innerHTML.length; cont >= 0; cont--) {
            if( resultJS.innerHTML.substr(cont - resultJS.innerHTML.length)
             == " " || resultJS.innerHTML.indexOf(".", 0) < 0){
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

    console.log(space);

    if(space == true && resultJS.innerHTML.substr(-1) == " "){
        space = false;
        return resultJS.innerHTML += "0.";
    } else if(space == true){
        space = false;
        return resultJS.innerHTML += ".";
    }
    else if(space == false){
        return resultJS.innerHTML += "";
    }
}
function textClear(){
    return resultJS.innerHTML = "";
}
function textDelete(){
    if (resultJS.innerHTML.substr(-1) ==" ") {
        return resultJS.innerHTML = resultJS.innerHTML.substring(0, resultJS.innerHTML.length-3);
    } else{
        return resultJS.innerHTML = resultJS.innerHTML.substring(0, resultJS.innerHTML.length-1);
    }
}
function calculate(){
    if(resultJS.innerHTML.substr(0) == ""){
        return alert("Nada para calcular");
    } else if(resultJS.innerHTML.substr(-1) == " "){
        resultJS.innerHTML = resultJS.innerHTML.substring(0, resultJS.innerHTML.length-3);
        return  resultJS.innerHTML = eval(resultJS.innerHTML);
    }else{
        resultJS.innerHTML = eval(resultJS.innerHTML).toFixed(2);
    }
    //Porque colocando .toFixed(2) quebra o for
}

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