import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export default class UserService {
UsersURL:string='http://localhost:3000/users'
  constructor( private http:HttpClient) { }
  getAllUser(){
    return this.http.get<{users:any}>(this.UsersURL);
  }

  getUserByID(id:any){
    return this.http.get<{ user : any}>( `${this.UsersURL}/${id}`)
  }

  addUser(object:any){
    return this.http.post<{msg:string}>(this.UsersURL+'/signup' , object )
  }
  loginUser(object:any){
    return this.http.post<{msg:string}>(this.UsersURL+'/login' , object )
  }

  editUser(object:any){
    return this.http.put<{isModified:boolean}>(this.UsersURL , object)
  }

  deleteUser(id:any){
    return this.http.delete<{isDeleted:string}>(`${this.UsersURL}/${id}`)
  }

}
