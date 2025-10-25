import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Editar, { loader as noteLoader} from './components/Editar'
import {
  
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
    {
    path: "edit/:noteId",
    element: <Editar />,
    loader: noteLoader,
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />  
  </StrictMode>,
)
