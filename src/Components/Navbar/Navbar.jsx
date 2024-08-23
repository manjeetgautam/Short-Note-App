import React from 'react'
import "./Navbar.css"
import userImage from "../../assets/user.svg"
import Button from '../Button/Button'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase";
const Navbar = () => {

  const [user] = useAuthState(auth);
  return (
    
    <nav className='w-full h-14 bg-zinc-900/75 text-white flex justify-between items-center sticky top-0 z-50'>
        <h4 className='text-[2rem] font-semibold p-5'>ShortNotes</h4>
        {user ===true&& <div className='flex items-center justify-center gap-3 p-5'>
          <img src={userImage} alt="user" />
          <Button text="Logout">Logout</Button>
        </div>}
        
    </nav>
  )
}

export default Navbar