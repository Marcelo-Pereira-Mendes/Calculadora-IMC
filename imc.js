
https://www.bing.com/videos/search?q=como+chamar+funcao+da+calculadora+imc+no+javascript&docid=608039701500407946&mid=061E3DCF49DCCB16D720061E3DCF49DCCB16D720&view=detail&FORM=VIRE
function calculate(){
    var height = document.getElementById("height").value /100
    var weight = document.getElementById("weight").value
    var imc= (weight / (height **2)).toFixed(1);
    var text="";
if (imc < 18.5){
text = "Você está abaixo peso!";

}else if(imc < 24.9){
   text ="Peso normal";

}else if(imc < 29.9){
    text = "Você está com sobrepeso!";


}else if(imc < 35){
    text = "Você esta com obesidade grau 1!";


}else if(imc > 40){
    text = "Você está com obesidade grau 2!";

}else{
    text = "Você está com obesidade morbida cuidado!";

}
document.getElementById("text").innerHTML = `Seu imc é de `+" "+ imc + " " +text



}

