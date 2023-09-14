import ImageGallery from "../Components/ImageGallery"
import Navbar from "../Components/Navbar"
import Uploadform from "../Components/Uploadform"

const Home = () => {

  return <div className="max-w-4xl mx-auto">
      <Navbar />
      <Uploadform />
      <ImageGallery />

    </div>
  
}

export default Home
