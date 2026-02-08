import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './layouts/RootLayout.jsx'
import BoshSahifa from './components/MainPage/BoshSahifa'
import Azolar from './components/Azolar/Azolar.jsx'
import Loyhalar from './components/Loyhalar/Loyhalar.jsx'
import Kurslar from './components/Kurslar/Kurslar.jsx'
import Haqida from './components/Haqida/Haqida.jsx'
import Texnalogiyalar from './components/Texnalogiyalar/Texnalogiyalar.jsx'
import UserDetails from './components/DetailsPage/DetailsPage.jsx'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <BoshSahifa />
        },
        {
          path: '/azolar',
          element: <Azolar />,
          children: [
            {
              path: './UserDetails',
              element: <UserDetails />
            }
          ]
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