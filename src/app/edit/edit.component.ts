import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  Edition = new FormGroup({
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required)
  })
  error = false

  get title() { return this.Edition.get('title') }
  get content() { return this.Edition.get('content') }


  id:any=''

  constructor(private noteService: NoteService, private router: Router,private route: ActivatedRoute) { 

    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
  }
  r: any
  result:any

  editNotes() {
    console.log("edit fired");
    this.noteService.editNote(this.id, this.Edition.value).subscribe(
      (result) => {
        console.log('Note updated successfully:', result);
        // Handle success, e.g., update the UI or show a success message.
      },
      (error) => {
        console.error('Error updating note:', error);
        // Handle the error, e.g., display an error message to the user.
      }
    );
  }
  
}
