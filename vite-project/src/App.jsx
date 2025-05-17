
import Homepage from './components/Homepage'
import Register from './components/Auth/Register'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignUpDes from './components/Auth/SignUpDes'
function App() {

const router = createBrowserRouter([

    {
      path: '/',
      element: <Homepage />
    },
    {
      path: '/homepage/register',
      element: <Register/>
    },
    {
      path: '/signUpdescription',
      element: <SignUpDes/>
    }
    

  ])
  return (
     <RouterProvider router={router} />
  )
}

export default App
