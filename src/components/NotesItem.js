import React from "react";
import NotesItemBody from "./NotesItemBody";
import DeleteButton from "./DeleteButton";



function NotesItem({title, createdAt, body,id, onDelete}){
    return(
        <div className="notes-item">
            <NotesItemBody title={title} createdAt={createdAt} body={body} />
            <DeleteButton id={id} onDelete={onDelete}/>
            
        </div>
    );
}

export default NotesItem;