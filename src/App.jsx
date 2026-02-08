import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './layouts/RootLayout.jsx'
import Dashboard from './components/MainPage/Dashboard'
import Azolar from './components/Azolar/Azolar.jsx'
import Loyhalar from './components/Loyhalar/Loyhalar.jsx'
import Kurslar from './components/Kurslar/Kurslar.jsx'
import Haqida from './components/Haqida/Haqida.jsx'
import Texnalogiyalar from './components/Texnalogiyalar/Texnalogiyalar.jsx'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />
        },
        {
          path: '/azolar',
          element: <Azolar />
        },
        {
          path: '/loyhalar',
          element: <Loyhalar />
        }
        ,
        {
          path: '/haqida',
          element: <Haqida />
        }
        ,
        {
          path: '/texnalogiyalar',
          element: <Texnalogiyalar />
        }
        ,
        {
          path: '/kurslar',
          element: <Kurslar />
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App