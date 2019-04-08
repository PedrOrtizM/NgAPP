import { Component, OnInit } from '@angular/core';
import { Pearson } from '../../stores/pearson.store';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public name: string;
  public last: string;
  public controlUpdate: boolean;
  public dataOld:any;

  constructor(protected _person: Pearson) { }

  ngOnInit() {
  }

  add(){
   
   const data = {name: this.name, last: this.last};
    this._person.setPearsonData(data);
    console.log(this._person.getPersons);
    this.name = "";
    this.last = "";    
    this.controlUpdate = false;
  }
  uploadContent(data:any){
      this.dataOld = data;
      this.name = data.name;
      this.last = data.last;
      this.controlUpdate = true;
  }

  update(){
    const data = {name: this.name, last: this.last};
    this._person.updatePearsons(this.dataOld,data); 
    this.controlUpdate = false;
    this.name = "";
    this.last = "";

  }


  reset(){
    this._person.resetPearsons();
  }

  
}
