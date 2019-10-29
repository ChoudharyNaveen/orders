import { Component, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(private http:HttpClient) {}
  onSubmit(f:NgForm)
  {
    const user={
      'lname':f.form.value.lname,
      'fname':f.form.value.fname,
      'email':f.form.value.email,
      'pswd':f.form.value.pswd
    }
console.log(user);
this.http.post('http://localhost:8083/registrer',user).subscribe((userId)=>
{
  console.log("After Insertion",userId)
})
  }

}
