const SERVER = "http://localhost:5001";

let formulario = document.getElementById("formPerson");

formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const casa = document.getElementById('casa').value;
    const fecha = document.getElementById('fechaNacimiento').value;
    const sangre = document.getElementById('sangre').value;
    const patronus = document.getElementById('patronus').value;
    const varita = document.getElementById('varita').value;

    const data = {
        nombre,
        casa,
        fecha,
        sangre,
        patronus, 
        varita
    };

    function postEventos(data){

        fetch(`${SERVER}/personajes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        .then(resp => {

            if(resp.ok){

                console.log("Salio correcto");

            }else{
                throw new Error("Hubo un error");
            }
        })
        .catch(error => {
            console.log("Hubo un error");
        });
    }

    postEventos(data);


    
})