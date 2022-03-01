let operacion = prompt("para sumar marque {+} y para restar {-} y para multiplicar {*}");

let firstValue = prompt("Inserta el primer valor");
let secundValue = prompt("Inserta el segundo valor");



if (operacion == "+" || "-" || "*"){

if (operacion == "+"){
    resultado = (parseFloat(firstValue)+ parseFloat(secundValue));
    alert ("Tu resultado es " + resultado);
}
if (operacion == "-"){
    resta = (firstValue - secundValue);
    alert("tu resultado es " + resta);
}
if (operacion == "*"){
    multiplicacion = (parseFloat (firstValue) * parseFloat (secundValue));
    alert("Tu resultado es " + multiplicacion);
}
}