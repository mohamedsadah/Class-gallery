import React from 'react'
import { Link } from 'react-router-dom'
import useFirestore from '../hooks/useFirestore'

const ImageGallery = () => {

  const {  docs:  images, isLoading } = useFirestore('images');
 

  return (
    <div>
      <div>
      <div className="hero  text-center">

  <div className=" w-full bg-cover
     bg-[url('/images/616949393cf90643c1403605_6423.png')] h-fit py-3 ">


<div className="navbar h-14  justify-evenly">
  <a className=" font-extrabold text-white normal-case text-3xl ml-15 mr-96 ">CHRISTEX UNIVERSITY GALLERY</a>
  <a href='/UploadForm'><button className="btn btn-secondary font-bold ">Upload</button></a>
  <button className="btn btn-secondary font-bold  ">Logout</button>
</div>




    <div className=" p-10">
      <h1 className="text-5xl font-bold p-6 text-white">WELCOME DEAR STUDENT</h1>
      <h2 className=" text-white shadow-lg">Enjoy exploring fun moments from students across the University</h2>
    </div>
    
  </div>
</div>
      </div>

      <div className="grid md:grid-cols-7 justify-flex gap-5 mt-8"> 
      {images.map((image, index) => (
        
        <div key= {image.imageUrl} className="card w-full m-7 h-99 shadow-xl rounded-3xl">
          <figure className=''><img src={image.imageUrl} alt="" /></figure>
              <h1 className=' text-center font-bold text-2xl bg-white text-black
                rounded-b-2xl' >Year: {image.Cyear}</h1>
            <div className="card-actions justify-end">
        </div>
      </div>
 ) )}
    </div>

      
  </div>

  )
}

export default ImageGallery
