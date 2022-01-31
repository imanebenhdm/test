import { Injectable } from '@angular/core';
import * as Realm from "realm-web";

@Injectable({
  providedIn: 'root'
})
export class DbManagerService {
  
  patients: {"nom":string , "prenom":string , "anneeNaissance" : number , "genre" : string}[] = [];
  parametres: {"logo":string , "nomEtablissement":string, "nomDirecteur":string} [] = [] ;  
  interventions: {"nomIntervention":string, "prix":number} [] = [];
    app : Realm.App;
    user! : Realm.User;
  constructor() {
    this.app = new Realm.App({ id: "application-1-cgglg" });
   }
  async logIn(){
    const credentials = Realm.Credentials.anonymous();
    try {
    this.user = await this.app.logIn(credentials);
       console.log(this.user);
   //console.log(this.patients);
      if (this.user.id === this.app.currentUser?.id)  return this.user
    else 
      return undefined
    }catch(err) {
      console.error("Failed to log in", err);
    return undefined;
  }
}
async getAllPatient(){
this.patients = await this.user.functions['getAllPatient']();
  return this.patients;
}
async getAllParametre(){
  this.parametres = await this.user.functions['getAllParametre']();
    return this.parametres;
  }
async getAllIntervention(){
    this.interventions = await this.user.functions['getAllIntervention']();
      return this.interventions;
    }
}
