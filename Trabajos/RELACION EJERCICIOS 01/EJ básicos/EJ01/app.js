"use strict";
const nombre = "Samuel";
const edad = 18;

const app = document.querySelector("#app");

const parrafo = document.createElement("p");

parrafo.innerHTML = `Me llamo ${nombre} y tengo ${edad} años`;

app.appendChild(parrafo);

parrafo.className=("EJ01");