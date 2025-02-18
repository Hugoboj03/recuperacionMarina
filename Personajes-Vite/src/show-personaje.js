const SERVER = 'http://localhost:5001';

import { eliminarPersonaje } from "./delete-person.js";


let contenedor = document.getElementById("personsContainer");


async function obtener() {
    try {

        const obten = await fetch(`${SERVER}/personajes`);

        if (!obten.ok) {

            console.log("Fallo al obtener los personajes");

        } else {

            console.log("Se obtuvieron los personajes");

        }

        const json = await obten.json();
        let person = json.data;

        contenedor.innerHTML = "";

        person.forEach(element => {

            console.log(element);

            let card = document.createElement("div");
            card.classList.add("card");
            let nombreLabel = document.createElement("label");
            nombreLabel.textContent = element.nombre;
            let patronusLabel = document.createElement("label");
            patronusLabel.textContent = element.patronus;
            let sangreLabel = document.createElement("label");
            sangreLabel.textContent = element.sangre;
            let varitaLabel = document.createElement("label");
            varitaLabel.textContent = element.varita;
            let fechaLabel = document.createElement("label");
            fechaLabel.textContent = element.fechaNacimiento;
            let casaLabel = document.createElement("label");
            casaLabel.textContent = element.casa;
            let botonEliminar = document.createElement("button");
            botonEliminar.textContent = "elimiar";
            botonEliminar.setAttribute("name", element.id);

            botonEliminar.addEventListener("click", () => {
                eliminarPersonaje(element.id, element.nombre)

            });


            card.appendChild(nombreLabel);
            card.appendChild(patronusLabel);
            card.appendChild(sangreLabel);
            card.appendChild(varitaLabel);
            card.appendChild(fechaLabel);
            card.appendChild(casaLabel);
            card.appendChild(botonEliminar);
            contenedor.appendChild(card);

        });

    } catch (e) {

        console.log(e);



    }

}

obtener();
