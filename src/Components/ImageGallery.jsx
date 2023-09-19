import React from 'react'
import { Link } from 'react-router-dom'

const ImageGallery = () => {
  return (
    <div>
      <div>
      <div className="hero  text-center">

  <div className=" w-full bg-cover 
     bg-[url('/images/IMG-20230916-WA0045.jpg')] mt-5  mx-3.5 p-0 rounded-3xl shadow-md">
    <div className=" p-10">
      <h1 className="text-5xl font-bold p-6">WELCOME DEAR STUDENT</h1>
      <p className="">Enjoy exploring fun moments from students across the University</p>
    </div>
    
  </div>
</div>
      </div>


      <div className="card w-96 m-7 h-99 shadow-xl rounded-3xl">
  <figure><img src="/images/IMG-20230919-WA0008.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <p>Uploaded by:{}</p>
    <p>Date:<span></span></p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>

      
  </div>

  )
}

export default ImageGallery
