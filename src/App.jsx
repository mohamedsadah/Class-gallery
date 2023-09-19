import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Inpage from "./pages/Inpage";
import { Navbar } from "flowbite-react";
import ImageGallery from "./Components/ImageGallery";
import Uploadform from "./Components/UploadForm";


function App() {


  return (
   <Routes>
    
      <Route path="/Login" element={<Login/> } />
      <Route path="/" element={<Home />} />
      <Route path="/Inpage" element={<Inpage />}/>
      <Route path="/Navbar" element={<Navbar />} />
      <Route path="/ImageGallery" element={<ImageGallery />} />
      <Route path="/UploadForm" element={<Uploadform />} />

   </Routes>
  );
}

export default App
