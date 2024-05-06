import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import UserService from 'services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signupForm !: FormGroup
path:any=this.router.url
PatternCode = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";
//unamePattern = "^[a-z0-9_-]{8,15}$";
  pwdPattern = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,12}$";
  mobnumPattern = "^((\\+216-?)|0)?[0-9]{8}$"; 
//   emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
addUser(){
  console.log("this is user object" , this.signupForm.value)
  if (this.path=='/signup-teacher') {
    this.signupForm.value.role='teacher'
  }else if (this.path=='/signup-admin') {
    this.signupForm.value.role='admin'
  }else{
    this.signupForm.value.role='student'
  }
  this.service.addUser(this.signupForm.value).subscribe((res)=>{
    alert (res.msg)
  })
}
  constructor(
    private formBuilder: FormBuilder ,
    private router:Router,
    private service : UserService) { }

  ngOnInit(): void {
   this.signupForm=this.formBuilder.group({
    firstName:['',[Validators.required,Validators.minLength(4)]],
    lastName:['',[Validators.required,Validators.minLength(4)]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern(this.pwdPattern)]],
    confirmPassword:[''],
    phone:['',[Validators.required,Validators.pattern(this.mobnumPattern)]]

   })
  }

}
