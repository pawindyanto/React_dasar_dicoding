import React from "react";

function NotesItemBody ({title, createdAt, body}){
    return(
        <div className="notes-item__body">
            <h4 className="notes-item__title"> {title}</h4>
            <p className="notes-item__date">Dibuat : {createdAt}</p>
            <p className="notes-item__body"> {body}</p>
        </div>
    );
}

export default NotesItemBody;