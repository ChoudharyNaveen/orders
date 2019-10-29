import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-app',
  templateUrl: './login-app.component.html',
  styleUrls: ['./login-app.component.css']
})
export class LoginAppComponent implements OnInit {
  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute) {}
  ngOnInit() {}
  onSubmit(f:NgForm)
  {
this.http.get(`http://localhost:8083/login-check?email=${f.form.value.email}&pswd=${f.form.value.pswd}`).subscribe((userId)=>
{
  console.log("After Insertion",userId)
  this.router.navigate(['./orders']);

},err => {
  console.log(err)
})
}
signUpUser(e)
{
  console.log("NAVIGATE");
  this.router.navigate(['./signup']);
}
}
