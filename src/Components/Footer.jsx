import React from 'react'

export default function Footer() {
  return (
    <>
    
    <div className="container-fluid min-vh-5 d-flex flex-column">
    <div className="flex-grow-1">
      <h4 className='bg-ligh text-center'>E-Commere @01/01/2025</h4>
      <footer className='text-center mt-3'>
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </footer>
    </div>
    </div>
    </>
  )
}
