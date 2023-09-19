import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
   <div className="navbar h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-br-sm 
    mt-5 shadow-xl shadow-slate-950 justify-between" 
   >
  <a className=" font-extrabold text-white normal-case text-2xl ml-32 mr-96 ">CHRISTEX UNIVERSITY GALLERY</a>
  <button className="btn btn-ghost ml-96 text-white "><a href="/Uploadform">Upload</a></button>
  <button className="btn btn-ghost ml-5 text-white ">Logout</button>
</div>
  )
}

export default Navbar
