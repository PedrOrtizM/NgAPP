
import { observable, computed, action, autorun, toJS } from 'mobx';
import { Injectable } from '@angular/core';
import { Pearsons } from '../models/Pearson.model';

@Injectable()
export class Pearson {
    
    @observable pearsons: Pearsons[] = [];
    @observable value: '';

    @action 
    setPearsonData(data: Pearsons){
        this.pearsons.push(data);
    }

    @action
    resetPearsons(){
        if(toJS(this.pearsons).length > 0) {
            this.pearsons = [];
        }
    }

    @action
    updatePearsons(data: Pearsons,newData:Pearsons){

        console.log(data.name);
        
        const result = toJS(this.pearsons).findIndex( (pearson) => pearson.name === data.name );
        if(result>=0){
            this.pearsons[result] = newData;
        }else{
            console.log("Usuario NO encontrado");
            
        }

    }

    @computed
    get getPersons(){
        return toJS(this.pearsons);
    }



    constructor(){

    }
}