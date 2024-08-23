import './App.css'
import Navbar from "./Components/Navbar/Navbar"
import SignupSignin from './Components/SignupSignin/SignupSignin'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./Components/Dashboard/Dashboard"
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Background from './Components/Background/Background';
import Forground from "./Components/Foreground/Foreground"



function App() {

  
const router = createBrowserRouter([
  {
    path: "/",
    element: <SignupSignin/>
  },
  {
    path: "/dashboard",
    element: <Dashboard/>
  }
])

  return (
    <>

    <div className='w-full h-screen bg-zinc-700'>
      <Navbar/>
      <RouterProvider router={router} />
    </div>


     {/* <div className='relative w-full h-screen bg-zinc-800'>
      <Background/>
     </div>
       */}

    {/* <div className='relative w-full h-screen bg-zinc-800'>
        <ToastContainer/>
      <Navbar/>
      <div className='w-full flex items-center justify-center'>
      <RouterProvider router={router} />
      </div>
       </div> */}
    </>
  )
}

export default App
