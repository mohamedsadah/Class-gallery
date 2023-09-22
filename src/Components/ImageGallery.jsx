import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import useFirestore from '../hooks/useFirestore'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/config'

const ImageGallery = () => {

  const {  docs:  images, isLoading } = useFirestore('images');

  const handleLogout = () => { 
    signOut(auth).then(() => {
    // Sign-out successful.
        Navigate("/Login");
        console.log("Signed out successfully")
    }).catch((error) => {
    // An error happened.
    })};
 

  return (
    <div className='w-full'>
      <div>
      <div className="hero  text-center">

  <div className=" w-full bg-cover
     bg-[url('/images/616949393cf90643c1403605_6423.png')] h-fit">


<div className="navbar  text-sm justify-end">
  <a href='/UploadForm'><button className="btn btn-secondary font-bold ">Upload</button></a>
 <a href='/Login'> <button className="btn btn-secondary font-bold ml-3 " onClick={handleLogout}>Logout</button></a>
</div>




    <div className="">
      <h1 className="text-5xl font-bold  text-white mb-3">CHRISTEX UNIVERSITY GALLERY</h1>
      <h2 className="  shadow-lg mb-30 bg-white text-black">Enjoy exploring fun moments from students across the University</h2>
    
    </div>
    
  </div>
</div>
      </div>

      <div className="grid md:grid-cols-5 w-full h-full justify-center gap-5 mt-4"> 
      {images.map((image, index) => (
        
        <div key= {image.imageUrl} className="card w-full h-99 shadow-xl rounded-3xl">
          <figure className=' '><img src={image.imageUrl} alt="" /></figure>
              <h1 className=' text-center font-bold text-
              xl bg-white text-sky-600
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
