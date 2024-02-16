import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='flex items-center  flex-col gap-4 m-auto justify-center h-[100vh]'>
      
      <h1 className=' text-4xl font-bold'>Oops, Page not Found</h1>
      <p className="text-xl font-['Poppins']">The Link you followed is broken, or the page may have been removed. Go to</p>
      
        <Link to={'/'}> <button className='rounded px-5 py-1 bg-green-700 text-white'>Home</button></Link>
    </div>
  )
}

export default ErrorPage