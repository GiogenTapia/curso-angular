import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 1092929
        },
        {
            nombre: 'Vegeta',
            poder: 1092233
        }
    ];

    get personajes(): Personaje[] {
        return [...this._personajes];
    }


    constructor() {
        console.log('Servicio inicializado');
    }

    agregarPersonaje(nuevoPersonaje: Personaje) {
        this._personajes.push(nuevoPersonaje);
    }

}