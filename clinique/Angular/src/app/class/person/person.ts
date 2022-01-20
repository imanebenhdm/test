export class Person {
    nom:string;
    prenom:string;
    genre : genre;
    constructor(n:string , p:string , g:genre){
        this.nom = n;
        this.prenom = p;
        this.genre = g;
    }
    getNomComplet(d:string){
        return d + this.prenom + " " + this.nom;
    }
    getNomFormate(){
        let formatName = "";
        switch (this.genre){
            case genre.mal:
               // formatName += "M." + this.prenom.charAt(0).toUpperCase + " " + this.nom.toUpperCase;
               formatName += "M." + this.prenom + " " + this.nom;
            break;
            case genre.femelle:
                formatName += "Mme." + this.prenom.charAt(0).toUpperCase + " " + this.nom.toUpperCase;
            break;
        }
        return formatName;
    }
}

export enum genre{
    mal , 
    femelle
}