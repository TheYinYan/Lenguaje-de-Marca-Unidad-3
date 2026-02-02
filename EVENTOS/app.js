"use strict";
console.log("JS cargado ✅");
const nombre = "Samuel";

// Gestion de eventos
// 1ª forma: atributo HTML (MALA)

// function saludar() {
//     const texto = document.querySelector(".salida");
//     texto.textContent = `Salida: Hola ${nombre}`;
// }

// 2ª forma: API JS setAttribute - Añadir atributo HTML
// const boton = document.getElementById("btn");

// boton.setAttribute("onclick", "saludar()");

// function saludar() {
//     const texto = document.querySelector(".salida");
//     texto.textContent = `Salida: Hola ${nombre}`;
// }

// 3ª forma: addEventlistener ✅ (Más Mejor)

const boton = document.getElementById("btn");
const texto = document.querySelector(".salida");

boton,addEventListener("click",() => {
    texto.textContent = `Salida: Hola ${nombre}`;
})