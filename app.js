document.querySelector("h1").innerText = "Hora del Desafío";
//document.querySelector("h1").style.backgroundColor = "orange";

function botonClickado() {
    console.log ('El botón fue clicado');

}

// function asignarTextoElemento(elemento, texto) {
//     let titulo = document.querySelector(elemento);
//     titulo.innerText = texto;
//     return;
// }

function ciudad() {
    let ciudad = prompt("Nombre de una ciudad de Brasil", "");
    alert(`Estuve en  ${ciudad} y me acorde de tí`);
}

function alerta() {
    alert('Yo amo JS');
}

function suma() {
    let n1 = prompt("Ingrese el numero 1", "");
    let n2 = prompt("Ingrese el numero 2", "");

    let num1 = parseFloat(n1);
    let num2 = parseFloat(n2);

    let r = num1 + num2;
    alert (`El resultado es:  ${r}`);
}
