import axios from "axios";  
import AppBar from "../AppBar";
import { useLoaderData, useNavigate } from "react-router-dom";

import { useState } from "react";
export async function loader({ params }) {
    const note = await axios
                        .get(`http://localhost:8000/api/notes/${params.noteId}/`)
                        .then((response) => response.data)
    return { note };
}

export default function Editar() {

    const navigate = useNavigate();
    const { note } = useLoaderData();
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);
    const salvarNotas = (event) =>{
    event.preventDefault()
   
axios.put(`http://localhost:8000/api/notes/${note.id}/`, { title, content })
  .then(() => console.log("Notas salvas"))
  .catch(err => console.error(err));
  navigate("/")
    }


    return (
        <div className="App">
            <main className="container">
                <form className="form-card" onSubmit={salvarNotas}>
                    <input
                        className="form-card-title"
                        type="text"
                        name="titulo"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                    <textarea
                        className="autoresize"
                        name="detalhes"
                        value={content}
                        onChange={(event) => setContent(event.target.value)}
                    ></textarea>
                    <button className="btn" type="submit">Criar</button>
                </form>
            </main >
        </div>
    );
}
