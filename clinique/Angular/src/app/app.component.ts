import { Component , OnInit } from '@angular/core';
import { DbManagerService } from './service/dbManager/db-manager.service';
import { Person , genre } from "./class/person/person";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 patients: {"nom":string , "prenom":string , "anneeNaissance" : number , "genre" : string}[] = [];
 parametres: {"logo":string , "nomEtablissement":string, "nomDirecteur":string, "TVA":string} [] = [] ;
 interventions: {"nomIntervention":string , "prix":number} [] = [];
 a = new Person("Ben" , "tad" , 1); 
 constructor(private dbManger : DbManagerService){

  }
  
  ngOnInit(): void {
      this.dbManger.logIn().then(()=>{
        this.dbManger.getAllPatient().then(()=>{
          this.patients = this.dbManger.patients;});
        this.dbManger.getAllParametre().then(()=>{
            this.parametres = this.dbManger.parametres;});  
        this.dbManger.getAllIntervention().then(()=>{
          this.interventions = this.dbManger.interventions;}); 
        
      })   
      
  }

}


