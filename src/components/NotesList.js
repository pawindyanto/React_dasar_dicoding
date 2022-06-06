import React from "react";
import NotesItem from "./NotesItem";

function NotesList({ notes, onDelete}){
    return(
        <div className="notes-list">
            {
                notes.map((notes) => (
                    <NotesItem key={notes.id} 
                    id={notes.id} 
                    onDelete={onDelete}
                    {...notes}/>
                ))
            }

        </div>
    );
}

export default NotesList;
