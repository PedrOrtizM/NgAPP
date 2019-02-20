import { Component } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms'
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  forma:FormGroup;
  constructor(private loginService: LoginService,private router: Router) {

    this.forma = new FormGroup({

      'email':   new FormControl('',[]),

      'password': new FormControl('',[])
})
    
  
console.log(this.forma);
   }


  login(){
   let aux:boolean;
    
    this.loginService.login().subscribe((users:any[])=>{
      
      for (let i = 0; i < users.length; i++) {

        if(users[i].email === this.forma.value.email && users[i].password === this.forma.value.password){
          
          this.router.navigate(['/home']);
          aux=true;
          break;
        }
        
      }

      if(!aux){
        alert("Email / Password inválido");
      }
     
      console.log(this.forma.value.email,this.forma.value.password);
      
    })
     
  }

}
