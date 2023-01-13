import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-login-md-details',
  templateUrl: './login-md-details.component.html',
  styleUrls: ['./login-md-details.component.scss']
})
export class LoginMdDetailsComponent {
  @Output() sendMessage = new EventEmitter<string>();
  childMessage: any;
  form= true

  send(){
    //console.log(this.childMessage)
    this.sendMessage.emit(this.childMessage)
  }

  message(event : any){
    var message = event.target.value
    this.form = false
    this.childMessage= {"message": message, "form": this.form}
  }
}
