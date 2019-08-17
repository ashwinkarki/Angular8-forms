import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form1';

  topics=['Angular','React','Vue'];

  topicHasError=true;

  submitted=false;

  errorMsg='';

  userModel=new User('ashwin','ashwin42@gmail.com',325235235,'default','morning',true);

   constructor(private _enrollmentService:EnrollmentService){

   }


  validateTopic(value){
    if(value === 'default'){
      this.topicHasError=true;
    }
    else{
      this.topicHasError=false;
    }
  }

  onSubmit(){
    this.submitted=true;
    console.log(this.userModel);
    this._enrollmentService.enroll(this.userModel)
    .subscribe(
      data => console.log('Success!',data),
      error => this.errorMsg=error.statusText
    )
  }

}
