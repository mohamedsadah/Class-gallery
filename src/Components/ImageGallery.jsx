import React from 'react'
import { Link } from 'react-router-dom'

const ImageGallery = () => {
  return (
    <div>
      <div>
      <div className="hero  text-center">

  <div className=" w-full bg-cover
     bg-[url('/images/616949393cf90643c1403605_6423.png')] h-fit py-3 ">


<div className="navbar h-14 justify-between">
  <a className=" font-extrabold text-white normal-case text-3xl ml-32 mr-96 ">CHRISTEX UNIVERSITY GALLERY</a>
  <button className="btn btn-secondary font-bold "><a href="/Uploadform">Upload</a></button>
  <button className="btn btn-secondary font-bold  ">Logout</button>
</div>




    <div className=" p-10">
      <h1 className="text-5xl font-bold p-6 text-white">WELCOME DEAR STUDENT</h1>
      <h2 className=" text-white shadow-lg">Enjoy exploring fun moments from students across the University</h2>
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
