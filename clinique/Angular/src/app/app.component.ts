import { Component , OnInit } from '@angular/core';
import { DbManagerService } from './service/dbManager/db-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  patients: {"nom":string , "prenom":string , "anneeNaissance" : number , "genre" : string}[] = [];
  constructor(private dbManger : DbManagerService){

  }
  ngOnInit(): void {
      this.dbManger.logIn().then(()=>{
        this.dbManger.getAllPatient().then(()=>{
          this.patients = this.dbManger.patients;});
        })   
  }
}

