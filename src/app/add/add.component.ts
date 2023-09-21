import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NoteService } from '../note.service';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  Addition = new FormGroup({
    title: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required, Validators.pattern(/^[@;*&+\-A-Za-z0-9\s]*$/),Validators.maxLength(500)])
  });
  error = false;

  get title() { return this.Addition.get('title'); }
  get content() { return this.Addition.get('content'); }

  constructor(private noteService: NoteService, private router: Router) { }

  ngOnInit(): void {}

  addNote() {
    console.log("fired");
    if (this.Addition.valid) {
      const noteData = this.Addition.value;
      
      this.noteService.addNote(noteData).subscribe(
        (result) => {
          console.log('Note added successfully:', result);
          this.router.navigate(['/view']);
          // You can perform additional actions here, such as displaying a success message or clearing the form.
        },
        (error) => {
          console.error('Error adding note:', error);
          // Handle the error, such as displaying an error message to the user.
        }
      );
    }
  }
}
