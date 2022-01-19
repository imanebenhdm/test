import { Injectable } from '@angular/core';
import * as Realm from "realm-web";
@Injectable({
  providedIn: 'root'
})
export class DbManagerService {
  title = 'Clinique';
  patients: {"nom":string , "prenom":string}[] = [];
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
    this.patients = await this.user.functions['getAllPatient']();
   console.log(this.patients);
      if (this.user.id === this.app.currentUser?.id)  return this.user
    else 
      return undefined
    }catch(err) {
      console.error("Failed to log in", err);
    return undefined;
  }
}
}
