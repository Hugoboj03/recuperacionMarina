class Personaje{

    #nombre;
    #casa;
    #patronus;
    #fecha;
    #sangre;
    #varita;

    constructor(nombre, casa, patronus, fecha, sangre, varita){
        this.#nombre = nombre;
        this.#casa = casa;
        this.#patronus = patronus;
        this.#fecha = fecha;
        this.#sangre = sangre;
        this.#varita = varita;
    }

    toJSON() {
        return {
            nombre: this.nombre,
            casa: this.casa,
            patronus: this.patronus,
            fecha: this.fecha,
            sangre: this.sangre,
            varita: this.varita
        };
    }

    

}