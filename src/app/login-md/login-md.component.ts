import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-md',
  templateUrl: './login-md.component.html',
  styleUrls: ['./login-md.component.scss']
})
export class LoginMdComponent {
  childMessage: any;
  form= false;
  allwChild=true
  message($event: any){
    
    this.childMessage=$event
    console.log(this.childMessage)
  }

  collegeName = new FormControl('');
  
  course = new FormGroup({
    courseName: new FormControl(''),
    registerNo: new FormControl(''),
  });
  onSubmit(){
    console.log(this.course)
    this.form=true
  }
  allowChild(){
    this.allwChild=false
  }
}
