export class Person {
    nom:string;
    prenom:string;
    genre : genre;
    constructor(n:string , p:string , g:genre){
        this.nom = n;
        this.prenom = p;
        this.genre = g;
    }
    getNomComplet(){
        return this.prenom + " " + this.nom;
    }
    getNomFormate(){
        let formatName = "";
        switch (this.genre){
            case genre.mal:
                formatName += "M." + this.prenom.charAt(0).toUpperCase + " " + this.nom.toUpperCase;
            break;
            case genre.femelle:
                formatName += "Mme." + this.prenom.charAt(0).toUpperCase + " " + this.nom.toUpperCase;
            break;
        }
        return formatName;
    }
}

enum genre{
    mal , 
    femelle
}