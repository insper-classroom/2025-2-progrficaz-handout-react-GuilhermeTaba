import Note from './components/Note';
import './App.css';
import axios from "axios";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]); // Remova o array de notes que existia na versão anterior
  axios.get("http://localhost:8000/api/notes/").then((res) => {console.log(res.data);setNotes(res.data)});

  console.log(notes)
  return (
    <>
      {notes.map((note) => (
        <Note key={`note__${note.id}`} title={note.title}>{note.content}</Note>
      ))}
    </>
  );
}


export default App
