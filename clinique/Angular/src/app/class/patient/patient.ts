import { Person , genre } from "../person/person"
export class patient extends Person{
    anneeNaissance : number;
constructor(n:string , p:string , g:genre , anne: number){
   super(n,p,g);
   this.anneeNaissance = anne;
}
}