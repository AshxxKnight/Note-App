import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from '../note.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  
  notes = [{title:'',content:'',id:''}]

  
ngOnInit(): void {

  this.noteService.getNotes().subscribe((notes:any) => {
      // Assign the retrieved notes to a property in your component.
      this.notes = notes;
      console.log(this.notes)
    },
    (error) => {
      console.error('Error fetching notes:', error);
      // Handle the error, e.g., display an error message.
    }
  );
}

  constructor( private noteService: NoteService, private userService: UserService, private router: Router, private http: HttpClient) {
   
   }

  deleteNote(id:any) {
    
    this.noteService.deleteNote(id).subscribe((data)=>{
      console.log(data);
    });
  }

   logout() {
    this.userService.logout().subscribe();
    // Redirect to the login page or any other page after logout
    this.router.navigate(['']);
  }
}
