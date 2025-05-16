
import Homepage from './components/Homepage'
import Register from './components/Auth/Register'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
function App() {

const router = createBrowserRouter([

    {
      path: '/',
      element: <Homepage />
    },
    {
      path: '/homepage/register',
      element: <Register/>
    }


  ])
  return (
     <RouterProvider router={router} />
  )
}

export default App
