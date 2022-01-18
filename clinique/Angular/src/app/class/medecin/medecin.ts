import { Person , genre } from "../person/person";

export class Medecin extends Person {
    specialite : string;
    constructor(n:string , p:string , g:genre , spe:string){
        super(n,p,g);
        this.specialite = spe;
    }
    
}
