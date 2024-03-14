import React from "react";

function Note() {

    return (
//add lassName="note" to div to use css style in jsx file
        <div className="note">
            <h1>This is the note title</h1>
            <p>This is the note content</p>
        </div>
    );
}

export default Note;