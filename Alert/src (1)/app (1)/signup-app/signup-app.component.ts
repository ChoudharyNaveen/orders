import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; 
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup-app',
  templateUrl: './signup-app.component.html',
  styleUrls: ['./signup-app.component.css']
})
export class SignupAppComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute) {}

  ngOnInit() {
  }
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
  console.log("After Insertion",userId);
  this.router.navigate(['./login'])
})
}
}
