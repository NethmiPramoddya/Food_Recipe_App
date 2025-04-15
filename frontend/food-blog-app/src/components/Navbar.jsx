import React, { useState } from 'react'
import Modal from './Modal'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const checkLoging = () =>{
    setIsOpen(true)
  }
  return (
    <>
    <header>
        <h2>Food Blog</h2>
        <ul>
            <li>Home</li>
            <li>Recipe</li>
            <li>Favourits</li>
            <li onClick={checkLoging}>Login</li>
        </ul>
    </header>
    {(isOpen) && <Modal onClose ={() => setIsOpen(false)}/>}
    </>
  )
}

export default Navbar