// note.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private baseUrl = '/api/';

  constructor(private http: HttpClient) { }

  addNote(noteData: any) {
    return this.http.post(this.baseUrl + 'notes', noteData);
  }
  
  getNotes() {
    return this.http.get(this.baseUrl + 'notes');
}

  
  editNote(noteId: number, updatedNoteData: any) {
    return this.http.put(this.baseUrl + 'notes/' + noteId, updatedNoteData);
  }
  
  deleteNote(noteId: number) {
    return this.http.get(this.baseUrl + 'notes/delete/' + noteId);
  }

}

