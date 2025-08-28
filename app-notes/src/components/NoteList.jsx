import React from "react";
import Note from "./inputs/Note";

const NoteList = ({ notes, deleteNote }) => {
  if (notes.length === 0) {
    return <p className="text-gray-500 text-center ">No Notes Yet</p>;
  }

  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <Note key={note.id} note={note} deleteNote={deleteNote} />
      ))}
    </div>
  );
};

export default NoteList;
