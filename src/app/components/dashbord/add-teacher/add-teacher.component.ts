import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import UserService from 'services/user.service';

import { teacherTab } from 'src/app/data';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {
binding:string="Add Teacher"
teacherTab:any= teacherTab
teacherForm !: FormGroup

validate(){
  let id=this.activatedRoute.snapshot.params['id'];
  if (id) {
    this.teacherForm.value['id'] = id
    console.log( this.teacherForm)
    this.service.editUser(this.teacherForm.value).subscribe((data)=>{
      alert(data.isModified)
      console.log(this.teacherForm.value)
      this.router.navigate([`admin`])
    })
  }else{
    this.service.addUser(this.teacherForm.value).subscribe((data)=>{
      alert(data.msg)
    })
  }
  // this.router.navigate([`admin`])
}
  constructor( 
    private activatedRoute: ActivatedRoute ,
     private router:Router ,
     private inputBuilder:FormBuilder,
     private service :UserService  )  { }

  ngOnInit(): void {
    let id=this.activatedRoute.snapshot.params['id'];
    if (id) {

      this.service.getUserByID(id).subscribe((response) =>{
        this.teacherForm=this.inputBuilder.group({
          name:[response.user.name],
          experience:[response.user.experience],
          course:[response.user.course]

        })
        this.binding='Edit Teacher'
      })
    
    }else{
      this.teacherForm=this.inputBuilder.group({
        name:[''],
        experience:[''],
        role:['']
      })

    }
         
        
   
   
   
   

  }

}
