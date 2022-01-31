import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Person , genre } from "./app/class/person/person";

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


