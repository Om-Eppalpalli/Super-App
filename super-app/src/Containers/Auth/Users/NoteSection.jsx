import React, { useState, useEffect } from 'react';
import './NoteSection.css'

const NotesSection = () => {
  const [note, setNote] = useState('');

  useEffect(() => {
    const savedNote = localStorage.getItem('note');
    if (savedNote) {
      setNote(savedNote);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('note', note);
  }, [note]);

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  return (
    <div>
      <textarea
        value={note}
        onChange={handleNoteChange}
        placeholder="Type your note here..."
        className="note-textarea"
      />
    </div>
  );
};

export default NotesSection;