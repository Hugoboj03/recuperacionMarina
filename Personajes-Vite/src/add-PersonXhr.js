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



    function postApi(data) {

        const xhr = new XMLHttpRequest();
        xhr.open('POST', `${SERVER}/personajes`, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200 || xhr.status == 201) {

                    const json = JSON.parse(xhr.responseText);
                    console.log(json);

                            location.assign("index.html");

                }else{

                    console.error("Fallo insertando el producto:", xhr.statusText);

                }

            }
        }

    }

    postApi(data);

})