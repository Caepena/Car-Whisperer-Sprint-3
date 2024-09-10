import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Home from './routes/PaginaInicial/index.tsx'
import Help from './routes/Ajuda/index.tsx'
import ChatOnline from './routes/ChatOnline/index.tsx'
import Login from './routes/Login/index.tsx'
import PaginaIntegrantes from './routes/PaginaIntegrantes/index.tsx'
import SignIn from './routes/SignIn/index.tsx'
import Sobre from './routes/SobreNos/index.tsx'
import Error from './routes/Error/index.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/ajuda",
        element: <Help/>
      },
      {
        path: "/chat-online",
        element: <ChatOnline/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/pagina-integrantes",
        element: <PaginaIntegrantes/>
      },
      {
        path: "/sign-in",
        element: <SignIn/>
      },
      {
        path: "/sobre",
        element: <Sobre/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
