const SERVER = 'http://localhost:5001';

let formulario = document.getElementById('formPerson');



formulario.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const casa = document.getElementById('casa').value;
    const fecha = document.getElementById('fechaNacimiento').value;
    const sangre = document.getElementById('sangre').value;
    const patronus = document.getElementById('patronus').value;
    const varita = document.getElementById('varita').value;

    const nuevoPersonaje = {
        nombre,
        casa,
        patronus,
        fechaNacimiento: fecha,
        sangre,
        varita
    };

    try {
        const respuesta = await fetch(`${SERVER}/personajes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",  // <- Corrección aquí
            },
            body: JSON.stringify(nuevoPersonaje)  // <- Ahora es un objeto normal
        });

        if (respuesta.ok) {
            localStorage.setItem(nuevoPersonaje.nombre, nuevoPersonaje.casa);
            location.assign("index.html");
        } else {
            console.error("Error al enviar el personaje:", await respuesta.text());
        }
    } catch (e) {
        console.error("Error en la petición:", e);
    }
});


