import React from 'react'

function Modal({onClose}) {
  return (
    <>
    <div className='backdrop' onClick={onClose}>
        <dialog className='modal' open>
            
        </dialog>
    </div>
    </>
  )
}

export default Modal