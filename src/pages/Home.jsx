import ImageGallery from "../Components/ImageGallery"
import Navbar from "../Components/Navbar"
import Uploadform from "../Components/Uploadform"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebase/config"

const Home = () => {

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          alert("welcome dear student")
        } else {
          console.log("user is logged out")
        }
      });
     
}, [])

  return <div className="bg-cover mx-3">
      <Navbar />
      <ImageGallery />

     

    </div>
  
}

export default Home
