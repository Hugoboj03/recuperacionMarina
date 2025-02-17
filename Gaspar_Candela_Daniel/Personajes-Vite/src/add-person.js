// Daniel Gaspar Candela

"use strict";

let SERVER = 'http://localhost:5001';

let formulario = document.getElementById("formPerson");

formulario.addEventListener("submit", (e) =>{
    e.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let casa = document.getElementById("casa").value.trim();
    let patronus = document.getElementById("patronus").value.trim();
    let fechaNacimiento = document.getElementById("fechaNacimiento").value.trim();
    let sangre = document.getElementById("sangre").value.trim();
    let varita = document.getElementById("varita").value.trim();

    async function anadir(personaje) {
        try {
            const resp = await fetch(`${SERVER}/personajes`, {
            method: 'POST',
            body: JSON.stringify(personaje),
            headers: {
                'Content-Type': 'application/json'
            }});
            if (!resp.ok) throw new Error(`Error: ${resp.status} ${resp.statusText}`);

            location.assign("./index.html");
        } catch (error) {
            console.error("Fallo insertando el personaje:", error);
        }
    }

    let personaje = {
        "nombre": nombre,
        "casa": casa,
        "patronus": patronus, 
        "fechaNacimiento": fechaNacimiento,
        "sangre": sangre,
        "varita": varita
    }

    anadir(personaje);

});
