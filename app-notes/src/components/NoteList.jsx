import React from "react";

const NoteList = ({ notes }) => {
  if (notes.length === 0) {
    return <p className="text-gray-500 text-center ">No Notes Yet</p>;
  }

  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <div
          key={note.id}
          className="p-4 bg-white rounded-lg shadow-md border-l-4"
        >
          <h3 className="text-lg font-bold">{note.title}</h3>
          <p className="text-gray-600 text-sm">
            {note.content}
            <strong>Category</strong> {note.category}
          </p>
          <p className="text-gray-600 text-sm">
            {note.content}
            <strong>Priority</strong> {note.priority}
          </p>
          <p className="mt-2">{note.description}</p>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
