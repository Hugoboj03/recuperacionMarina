// Daniel Gaspar Candela

let SERVER = 'http://localhost:5001';

let container = document.getElementById("personsContainer");


async function obtener() {
    try {
        const resp = await fetch(`${SERVER}/personajes`);

        if (!resp.ok) throw new Error(`Error: ${resp.status} ${resp.statusText}`);

        const json = await resp.json();
        person = json.data;

        console.log(person);

        person.forEach(element => {
            console.log(element);
            let carta = document.createElement("<div class=\"col-md-4 mb-4\">");
            let carta2 = document.createElement("<div class=\"card\">");
            let body = document.createElement("<div class=\"card-body\">");
            let nombre = document.createElement("<h5 class=\"card-title\">");
                nombre.innerText(element.nombre);
            let text = document.createElement("<p class=\"card-text\">");
            let p = document.createElement("<p>");
                p.innerText(element.casa + " " + element.patronus + " " + element.fechaNacimiento + " " + sangre + " " + varita);
                text.append(p);
            body.append(text);
            body.append(nombre);
            carta2.append(body);
            carta.append(carta2);
        });


        let contPers = document.getElementById("personsContainer");

        contPers.innerText = person;
        
    } catch (error) {
        console.error("Fallo al obtener personajes:", error);
    }
}

obtener();

// Al pulsar el boton que no tengo se elimina el personaje

let elim = document.getElementsByClassName("btn btn-danger eliminar-btn");

elim.addEventListener("click", (e) =>{

    async function eliminar() {
        try {
            const resp = await fetch(`${SERVER}/personajes/${'id'}`, {
            method: 'DELETE',
            body: JSON.stringify(),
            headers: {
                'Content-Type': 'application/json'
            }});
            if (!resp.ok) throw new Error(`Error: ${resp.status} ${resp.statusText}`);

        } catch (error) {
            console.error("Fallo eliminando el personaje:", error);
        }
    }

    eliminar();
});