import { Component , OnInit } from '@angular/core';
import * as Realm from "realm-web";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
      this.logIn();
  }
  
  title = 'Angular';
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

}
