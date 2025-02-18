const SERVER = "http://localhost:5001";


export async function eliminarPersonaje(id, nombre){

    try{

        const respuesta = await fetch (`${SERVER}/personajes/${id}`, {
            method: "Delete",
        });



        if(respuesta.ok){
            localStorage.removeItem(nombre);
            console.log("Se borro el personaje");
        }else{
            console.log("No se pudo borrar el personaje");
        }

    }catch(e){

        console.log(e);

    }
}

