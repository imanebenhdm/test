import { Injectable } from '@angular/core';
import * as Realm from "realm-web";
@Injectable({
  providedIn: 'root'
})
export class DbManagerService {

  constructor() { }
  title = 'Clinique';
  patients: {"nom":string , "prenom":string}[] = [];
  async logIn(){
    const app: Realm.App = new Realm.App({ id: "application-1-cgglg" });
    const credentials = Realm.Credentials.anonymous();
    try {
      const user: Realm.User = await app.logIn(credentials);
   console.log(user);
      this.patients = await user.functions['getAllPatient']();
   console.log(this.patients);
      if (user.id === app.currentUser?.id)  return user
    else 
      return undefined
    }catch(err) {
      console.error("Failed to log in", err);
    return undefined;
  }
}
