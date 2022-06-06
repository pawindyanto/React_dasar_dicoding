import React from "react";
import NotesList from "./NotesList";
import { getData } from "../utils/data";
import NotesInput from "./NotesInput";



class NotesApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        notes: getData(),
      }
    
      this.onDeleteHandler = this.onDeleteHandler.bind(this);
      this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
      
    }
    
    
    onDeleteHandler(id) {
      const notes = this.state.notes.filter(note => note.id !== id);
      this.setState({ notes });
    }
    
    onAddNotesHandler({ title, body }) {
        const d = new Date();
        let text = d.toISOString();
        this.setState((prevState) => {
          return {
            notes: [
              ...prevState.notes,
              {
                id: +new Date(),
                title,
                body,
                archived : false,
                createdAt:  text,
              }
            ]
          }
        });
      }

    render() {
      return (
        <div className="notes-app">
          <h1>Aplikasi Catatan</h1>
          <h3>Tambah Catatan</h3>
          <NotesInput addNotes={this.onAddNotesHandler}/>
          <h3>Daftar Catatan</h3>
          <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler} />
        </div>
      );
    }
   }
    
   export default NotesApp;