import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  url="/api/"

  constructor(private http:HttpClient) { }

  getlogin(email: any)
  {
    return this.http.get(this.url+"/users/login/"+email);

  }
  logout() {
    // Send a request to the server to invalidate the session
    return this.http.get('/api/users/logout');
  }

  postregister(data: any)
  {
    return this.http.post(this.url+"users",data);

  }

  getNotes()
  {
    return this.http.get(this.url+"notes");

  }

  getNote(note: any)
  {
    return this.http.get(this.url+"notes/"+note);
  }

  
}




