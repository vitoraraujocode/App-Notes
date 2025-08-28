import React from "react";

const Note = ({ note, deleteNote }) => {
  return (
    <div
      className="p-4 bg-white rounded-lg shadow-md border-l-4"
      style={{
        borderLeftColor:
          note.priority === "High"
            ? "red"
            : note.priority === "Medium"
            ? "orange"
            : "green",
      }}
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
      <button
        onClick={() => deleteNote(note.id)}
        className="mt-3  text-red-500 rounded-lg cursor-pointer transition hover: text-red-700"
      >
        🗑️ Delete
      </button>
    </div>
  );
};

export default Note;
