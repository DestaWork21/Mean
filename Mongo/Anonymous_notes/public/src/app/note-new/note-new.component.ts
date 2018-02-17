import { Component, OnInit } from '@angular/core';
import {Note} from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-new',
  templateUrl: './note-new.component.html',
  styleUrls: ['./note-new.component.css']
})
export class NoteNewComponent implements OnInit {

  errors: any[];
  newNote: Note = new Note();

  constructor(private _noteService: NoteService) {}
   

  ngOnInit() {
  }

  createNote(){
    this.errors = [];    
    this._noteService.create(
      this.newNote,
      note => {
        console.log(note);
        if(note.erros){
          for(const key of Object.keys(note.errors)){
            const error = note.errors[key];
            this.errors.push(error.message);
          }
        } else{
          this.newNote = new Note();
        }
      }
    );
  }

}
