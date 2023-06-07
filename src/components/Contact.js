import React from 'react'

const Contact = () => {
  return (
    <div>
      <form className='d-flex flex-column m-5 p-5'>
        <input className='m-2 border-2    p-1 rounded-3 pl-4'  type="text" placeholder='Enter the Name' />
        <input className='m-2 border-2     p-1 rounded-3' type="email" placeholder='Enter the Email' />
        <button className='m-2 border-2  p-1  bg-dark text-white rounded-3'>Submit</button>
      </form>
    </div>
  )
}

export default Contact
