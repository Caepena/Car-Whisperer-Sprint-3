import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Help from './routes/Ajuda/index.tsx'
import ChatOnline from './routes/ChatOnline/index.tsx'
import PaginaIntegrantes from './routes/PaginaIntegrantes/index.tsx'
import Sobre from './routes/SobreNos/index.tsx'
import Error from './routes/Error/index.tsx'
import AuthPage from './routes/AuthPage/index.tsx'
import PaginaInicial from './routes/PaginaInicial/index.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <PaginaInicial/>
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
        path: "/login-signin",
        element: <AuthPage/>
      },
      {
        path: "/pagina-integrantes",
        element: <PaginaIntegrantes/>
      },
      {
        path: "/sobre",
        element: <Sobre/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
