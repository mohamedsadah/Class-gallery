import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";


function App() {


  return (
   <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Login" element={<Login/> } />

   </Routes>
  );
}

export default App
