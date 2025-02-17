const SERVER = 'http://localhost:5001';


let contenedor = document.getElementById("personsContainer");


async function obtener() {
    try {
        const resp = await fetch(`${SERVER}/personajes`);
        if (!resp.ok) throw new Error(`Error: ${resp.status} ${resp.statusText}`);

        const json = await resp.json();
        let personajes = json.data;

        console.log(personajes);

        contenedor.innerHTML = ""; // Limpiar contenedor antes de agregar nuevos elementos

        personajes.forEach(element => {
            console.log(element);

            // Crear contenedor de la tarjeta
            let carta = document.createElement("div");
            carta.classList.add("col-md-4", "mb-4");

            let carta2 = document.createElement("div");
            carta2.classList.add("card");

            let body = document.createElement("div");
            body.classList.add("card-body");

            let nombre = document.createElement("h5");
            nombre.classList.add("card-title");
            nombre.innerText = element.nombre;

            // Crear texto descriptivo
            let text = document.createElement("p");
            text.classList.add("card-text");

            let p = document.createElement("p");
            p.innerText = `${element.casa} - ${element.patronus} - ${element.fechaNacimiento} - ${element.sangre} - ${element.varita}`;

            // Crear etiqueta de la casa (badge)
            let badge = document.createElement("span");
            badge.classList.add("badge");
            badge.innerText = element.casa;

            // Asignar color según la casa de Hogwarts
            switch (element.casa) {
                case "Gryffindor":
                    badge.classList.add("badge-gryffindor");
                    break;
                case "Slytherin":
                    badge.classList.add("badge-slytherin");
                    break;
                case "Hufflepuff":
                    badge.classList.add("badge-hufflepuff");
                    break;
                case "Ravenclaw":
                    badge.classList.add("badge-ravenclaw");
                    break;
                default:
                    badge.classList.add("badge-secondary");
            }

            // Armar la estructura
            text.appendChild(p);
            body.appendChild(nombre);
            body.appendChild(badge);
            body.appendChild(text);
            carta2.appendChild(body);
            carta.appendChild(carta2);

            // Agregar al contenedor
            contenedor.appendChild(carta);
        });

    } catch (error) {
        console.error("Fallo al obtener personajes:", error);
    }
}

obtener();
