const express = require('express');
// Using Node.js `require()`
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User=require('./modules/user');
const jwt = require('jsonwebtoken'); 
const session = require('express-session');
const bcrypt = require('bcrypt');



const app=express()
module.exports=app
app.use(bodyParser.urlencoded({extended:true}) )// is an NPM package that parses incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(bodyParser.json())
const secretKey = 'mySecretKey';
 app.use(session({ secret: secretKey }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});

mongoose.connect('mongodb://127.0.0.1:27017/teacherDB').then(() => console.log('Connected!'));






let studentsTab=[
    {id:1,name:"Ala Dridi",class:"software training",img:"assets/images/latest_1.jpg"},
    {id:2,name:"Oussema Saidani",class:"Painting",img:"assets/images/latest_2.jpg"},
    {id:3,name:"Syoufa Jbeli",class:"Starting a Startup",img:"assets/images/gallery_3.jpg"},
    {id:4,name:"Omar ben yahaya",class:"React Js + Spring boot",img:"assets/images/gallery_1.jpg"},
    {id:5,name:"Bornia Abidi",class:"English Language",img:"assets/images/gallery_4.jpg"},
    {id:6,name:"Rihem ABidi",class:"Child Culture",img:"assets/images/course_image.jpg"},
    
]
let teachersTab=[
    {id:1,experience:5,name:"Mr.john Taylor",role:"software training",img:"assets/images/team_3.jpg"},
    {id:2,experience:9,name:"Ms.lucius",role:"Painting",img:"assets/images/team_1.jpg"},
    {id:3,experience:3,name:"Mr Charles",role:"Starting a Startup",img:"assets/images/team_2.jpg"},
    {id:4,experience:15,name:"Mr Abidi",role:"React Js + Spring boot",img:"assets/images/team_3.jpg"},
    {id:5,experience:5,name:"Mr Sofia",role:"English Language",img:"assets/images/team_4.jpg"},
    {id:6,experience:4,name:"Mr Kamel",role:"Child Culture",img:"assets/images/team_2.jpg"},
    {id:7,experience:20,name:"Ms.lucius",role:"Painting",img:"assets/images/team_1.jpg"},
    {id:8,experience:3,name:"Mr Charles",role:"Starting a Startup",img:"assets/images/team_2.jpg"},
    {id:9,experience:18,name:"Mr Abidi",role:"React Js + Spring boot",img:"assets/images/team_3.jpg"},
    {id:10,experience:2,name:"Mr Sofia",role:"English Language",img:"assets/images/team_4.jpg"},
    
]

let coursesTab=[
    {id:1,nameCourse:"Software Training",teacherCourse:"Mr.john Taylor",priceCourse:1500,img:"assets/images/course_1.jpg"},
    {id:2,nameCourse:"Painting",teacherCourse:"Ms.lucius",priceCourse:2300,img:"assets/images/course_2.jpg"},
    {id:3,nameCourse:"Starting a Startup",teacherCourse:"Mr Charles",priceCourse:600,img:"assets/images/course_3.jpg"},
    {id:4,nameCourse:"React JS + Spring boot",teacherCourse:"Mr Abidi",priceCourse:1900,img:"assets/images/course_4.jpg"},
    {id:5,nameCourse:"English Language",teacherCourse:"Mr Meher",priceCourse:450,img:"assets/images/course_5.jpg"},
    {id:6,nameCourse:"Child Culture",teacherCourse:"Mr Kamel",priceCourse:3000,img:"assets/images/course_6.jpg"},{},{}
]
function generateID(T) {
    let max;
    if (T.length == 0) {
        max = 0
    } else {
       for (let i = 0; i < T.length; i++) {
            max = T[0].id
            if (max < T[i].id) {
                max = T[i].id;
            }
        }
    }
    return max ;
}
    



// app.get('/students' , (request , response) =>{
//     console.log ('get all function is running' )
//     student.find().then((docs)=>{
//      response.json({studentsTab:docs})

//     })
// } )                         

// app.get('/students/:id' , (request,response) => {
//     console.log ('get student by ID function is running' , request.body)
//     let id = request.params.id
//     student.findById(id).then((doc)=>{
//         response.json({ student : doc})
//     })
//     // student = studentsTab.find((object) => id == object.id)
    
// })

// app.post('/students' ,(request , response) => {
//     console.log('add student function is running' )
//     let newStudent=new student(request.body)
//     newStudent.save().then((data)=>{
//         if(data._id){
//             response.json({isAdded:true})
//         }else{response.json({isAdded:false})}
//         console.log(data)
//     })
//     // newStudent.id=generateID(studentsTab)+1
//     // studentsTab.push(newStudent)
    
        
    
    
// })

// app.put('/students' , (request , response) => {
//     console.log ('Edit student function is running ')
//     let editStudent =request.body
    
//     student.updateOne({_id:editStudent.id},editStudent ).then((data)=>{
//        if(modifiedCount==1){
//         response.json({isModified:true})
//        }else{response.json({isModified:false})}
//     })
//     // for (let i = 0; i <studentsTab.length; i++) {
//     //     if (editStudent.id == teacherTab[i].id) {
//     //         studentsTab[i]=editStudent
//     //     }
        
//     // }
//     // let index =teacherTab.findIndex((object) => id == object.id)
//     // teacherTab[index]=newTeacher
//     // 
// })
// app.delete('/students/:id' , (request , response) =>{
//     console.log(' BL :delete Students is running')
//     id=request.params.id
//     student.deleteOne({_id:id}).then((data)=>{
//         if (deletedCount==1) {
//             response.json({isDeleted:true})
//         }else{response.json({isDeleted:false})}
//     })
//     // for (let i = 0; i < studentsTab.length; i++) {
//     //    if (id==studentsTab[i].id) {
//     //     studentsTab.splice(i,1)
//     //    }
        
//     // }
    
// })


/**********************Bisuness Logic Teacher */

app.get('/users' , (request , response) =>{
    console.log ('get all function is running' )
    User.find().then((docs)=>{
        response.json({users:docs})
    })
    
} )                         

app.get('/users/:id' , (request,response) => {
    console.log ('get teacher by ID function is running')
    let id = request.params.id
    User.findById(id).then((doc)=>{
        console.log(doc)
         response.json({user : doc})
    })
    // teacher = usersTab.find((object) => id == object.id)
   
})

app.post('/users/signup' ,(req , res) => {
    console.log('add teacher function is running' )
    User.findOne({email : req.body.email}).then((data)=>{
        if (data) {
            res.json({msg:'Try with another email'})
        }else{
            bcrypt.hash(req.body.password , 10).then((crypted)=>{
                req.body.password=crypted
                let newUser=new User(req.body)
                newUser.save()
                res.json({ msg: 'Your signup complete with success' })
            })
            
        }
    })
   
   
   
})

app.put('/users' , (request , response) => {
    console.log ('Edit teacher function is running ')
    let editUser =request.body
    
    User.updateOne({_id:editUser.id},editUser).then((data)=>{
        if(data.modifiedCount==1){
            response.json({isModified:true})
           }else{response.json({isModified:false})}
    })
    // for (let i = 0; i <usersTab.length; i++) {
    //     if (editTeacher.id == usersTab[i].id) {
    //         usersTab[i]=editTeacher
    //     }
        
    // }
    // let index =teacherTab.findIndex((object) => id == object.id)
    // teacherTab[index]=newTeacher
    
})
app.delete('/users/:id' , (request , response) =>{
    console.log(' BL :delete users is running')
    id=request.params.id
    User.deleteOne({_id:id}).then((data)=>{
        if (deletedCount==1) {
            response.json({isDeleted:true})
        }else{response.json({isDeleted:false})}
    })
   


    // let isDeleted=false;
    // let position;
    // for (let i = 0; i < usersTab.length; i++) {
    //    if (id==usersTab[i].id) {
    //     position=i
    //     isDeleted=true
    //    }
        
    // }
    // if (isDeleted) {
    //     usersTab.splice(position,1)
    //     response.json({isDeleted:'user is deleted'})
    // }else{
    //     response.json({isDeleted:'user not found'})
    // }
    
})





/**********************Bisuness Logic Courses */

app.get('/courses' , (request , response) =>{
    console.log ('get all function is running' )
    
    response.json({coursesTab:coursesTab})
} )                         

app.get('/courses/:id' , (request,response) => {
    console.log ('get course by ID function is running' , request.body)
    let id = request.params.id
    course = coursesTab.find((object) => id == object.id)
    teacher=teachersTab.find((objet)=> course.teacherCourse==objet.name)
    response.json({ course : course , teacher:teacher})
})

app.post('/courses' ,(request , response) => {
    console.log('add course function is running' )
    let newCourse=request.body
    newCourse.id=generateID(coursesTab)+1
    coursesTab.push(newCourse)
    response.json({course:course, coursesTab:coursesTab})
})

app.put('/courses' , (request , response) => {
    console.log ('Edit course function is running ')
    let editCourse =request.body
    
    
    for (let i = 0; i <coursesTab.length; i++) {
        if (editCourse.id == teachersTab[i].id) {
            coursesTab[i]=editCourse
        }
        
    }
    // let index =teacherTab.findIndex((object) => id == object.id)
    // teacherTab[index]=newTeacher
    response.json({newTab:coursesTab , editedCourse:editCourse})
})
app.delete('/courses/:id' , (request , response) =>{
    console.log(' BL :delete course is running')
    id=request.params.id
    let isDeleted=false;
    let position;
    for (let i = 0; i < coursesTab.length; i++) {
       if (id==coursesTab[i].id) {
        position=i
        isDeleted=true
       }
        
    }
    if (isDeleted) {
        coursesTab.splice(position,1)
        response.json({isDeleted:'Course is deleted'})
    }else{
        response.json({isDeleted:'Course not found'})
    }
    
})


