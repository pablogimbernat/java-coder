
let resultado =0;

function sumar(numeroUno, numeroDos) {
  resultado = parseFloat(numeroUno) + parseFloat(numeroDos)
  console.log("el resulado de la suma de estos numeros es :" + (parseFloat(numeroUno) + parseFloat(numeroDos)) .toString());
}

function mostrar(){
  alert("el resulado de la suma de estos numeros es :" + (resultado).toString())

}
let numeroUno = prompt("ingrese el primer valor");
let numeroDos = prompt("ingrese el segundo valor");

sumar(numeroUno, numeroDos);

mostrar()

