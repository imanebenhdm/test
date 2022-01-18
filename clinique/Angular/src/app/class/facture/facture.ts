import { jitOnlyGuardedExpression } from "@angular/compiler/src/render3/util";
import { PassThrough } from "stream";
import { Person , genre } from "../person/person";

export class Facture extends Person{
    typreIntervention: string;
    Numero : number;
    date : Date;
    remise : number;
    constructor (n:string , p:string , g:genre , typeInter:string , N:number, d:Date , rem:number){
        super(n,p,g);
        this.typreIntervention = typeInter;
        this.Numero = N;
        this.date = d;
        this.remise = rem;
    }

    getDate(){
        let affi ='';
        if ((this.date.getDay()) < 10 ){
            affi += "Fait à Oran, Le : 0" + this.date.getDay() + "/" + (this.date.getMonth()+1) + "/" + this.date.getFullYear();
        }
        else {
            if ((this.date.getMonth() +1) < 10 ){
                affi += "Fait à Oran, Le : " + this.date.getDay() + "/0" + (this.date.getMonth()+1) + "/" + this.date.getFullYear();
        
            }
            else {
                affi += "Fait à Oran, Le : " + this.date.getDay() + "/0" + (this.date.getMonth()+1) + "/" + this.date.getFullYear();
                + "/" + (this.date.getMonth()+1) + "/" + this.date.getFullYear();
            }
        }
        return affi;
        }
}
