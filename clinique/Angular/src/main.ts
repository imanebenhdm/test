import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Person , genre } from "./app/class/person/person";
//import { AppComponent} from "./app/app.component";
import { DbManagerService } from './app/service/dbManager/db-manager.service';
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
 //********************************************************************* */ 
let a = new Person("ben" , "tad" , 1);
console.log(a.getNomComplet("Mme "));
document.getElementById("essaie")!.innerHTML = a.getNomFormate();
//********************************************************************** */
let b = new DbManagerService();
let c = [];
for (let patient of b.patients){
  document.getElementById("essaie1")!.innerHTML = "bonjour mimi";
  console.log('Genre: '+ patient.genre);
 // patient.genre + " " + patient.nom + " " + patient.prenom + " " + patient.anneeNaissance;
  //document.getElementById("essaie1")!.innerHTML += b.getAllPatient();
  
}