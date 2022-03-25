import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  template: `
  <section class="hero is-small is-primary is bold">
  <div class="hero-body" >
 <div class="container">
  <h2 class="title">LOGIN PAGE</h2>
   </div>
  </div>
  </section>
  <section class="section" style="display:flex">
  <div class="container" style="max-width:50vw;padding:2vh 5vw">
      <form (ngSubmit)="submitForm()">
          <div class="field">
             <label>Username</label>
           <input type="text" name="Username" class="input" [(ngModel)]="Username">
          </div>

          <div class="field">
            <label>Password</label>
            <input type="password" name="password" class="input" [(ngModel)]="Password">
           </div>
          <div class="field">
             <label>Phone Number</label>
             <input type="number" name="Phoneno" class="input" [(ngModel)]="Phoneno">
          </div>
      <button type="SUBMIT" class="button is-large is-danger" (click)="submitForm()" value="Submit">SUBMIT</button>
     </form>
</div>
<div style="width:50vw;padding:2vh 5vw">
<form (ngSubmit)="submitForm()">
          <div class="field">
             <label>Username</label>
           <input type="text" name="Username" class="input" [(ngModel)]="RESULT_USERNAME">
          </div>

          <div class="field">
            <label>Password</label>
            <input type="password" name="password" class="input" [(ngModel)]="RESULT_PASSWORD">
           </div>
          <div class="field">
             <label>Phone Number</label>
             <input type="number" name="Phoneno" class="input" [(ngModel)]="RESULT_PHONENO">
          </div>
     </form>
</div>
</section>
  `,
  styles: [
  ]
})
export class LoginPageComponent implements OnInit {
  Username='';
  Password='';
  Phoneno='';
  Flag=false;
  RESULT_USERNAME='';
  RESULT_PASSWORD='';
  RESULT_PHONENO='';


  constructor() { }
  ngOnInit(): void {
  }
  submitForm()
  {
  this.RESULT_USERNAME=this.Username;
  this.RESULT_PASSWORD=this.Password;
  this.RESULT_PHONENO=this.Phoneno;
  
   console.log("Success");
   this.Flag=true;
  }

}





// <h4 style="font-size:2.2vh;font-weight:bold;">USERNAME:</h4><p>{{RESULT_USERNAME}}</p>
// <h4>PASSWORD:</h4><p>{{RESULT_PASSWORD}}</p>
// <h4>PHONENUMBER:</h4><p>{{RESULT_PHONENO}}</p>