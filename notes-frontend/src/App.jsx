import Note from './components/Note';
import './App.css';
import axios from "axios";
import { useState, useEffect } from "react";
import AppBar from "./components/AppBar";
import Formulario from "./components/Formulario";

function App() {
  const [notes, setNotes] = useState([]); // Remova o array de notes que existia na versão anterior
  const carregaNotas = () => {
    axios
      .get("http://localhost:8000/api/notes/")
      .then((res) => setNotes(res.data));
  }
  
  useEffect(() => {
 carregaNotas();
  }, []);

  console.log(notes)
  return (
    <>
      <AppBar />
          
      <main className="container">
      <Formulario loadNotes={carregaNotas}/>
      <div className="card-container">
      {notes.map((note) => (
            <Note key={`note__${note.id}`} id={note.id} title={note.title}>
              {note.content}
            </Note>
      ))}
      
      </div>
      </main>
    </>
  );
}


export default App
