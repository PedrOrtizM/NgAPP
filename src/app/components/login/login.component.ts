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
  errorLogin:boolean;

  constructor(private loginService: LoginService,private router: Router) {

    console.log("constructor");
    
    this.forma = new FormGroup({

      'email':   new FormControl('',[]),

      'password': new FormControl('',[])
})
    
   }


  login(){
    this.errorLogin = false;
    
    this.loginService.login().subscribe((users:any[])=>{
      
      users = users.filter( users => users.email === this.forma.value.email &&
                             users.password === this.forma.value.password)

      if(users.length===1){
        this.router.navigate(['/home']);
      }else{
       this.errorLogin = true;
      }                             
      
    })
     
    let funcion = () =>{

    }
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
}

}
