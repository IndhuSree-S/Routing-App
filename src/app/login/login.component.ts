import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private router: Router
  ){  }
  childMessage: any;
  form:any;
  childform:any;
  employee={ username: '', emailid: '', mobilenumber: '',form: false};
  mobNumberPattern = '^((\\+91-?)|0)?[6-9]{1}[0-9]{9}$';
  mailPattern = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
  register(submitform: NgForm){
    console.log(this.employee)
  }
  Onclick(x:any){
    console.log(x.emailid);
    console.log(x.passwd);
  }
  setTrue(){
    this.employee.form=true
    //this.router.navigate(['login/login-details'])
  }
  childMess(){
    this.childform=true
  }

  

}
