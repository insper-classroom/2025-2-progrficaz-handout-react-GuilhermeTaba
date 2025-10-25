
import { Link } from "react-router-dom";
import "./index.css"
export default function Note(props) {
  return(
    <div className ="card">
      <h3 className="card-title">{props.title}</h3>
                  <Link to={`edit/${props.id}`}>✏️</Link>

      <div className="card-content">{props.children}</div>
    </div>
  )
}
