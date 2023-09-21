import { useState } from "react"
import useStorage from "../hooks/useStorage";
import useFirestore from '../hooks/useFirestore'
import { Link } from "react-router-dom";

const Uploadform = () => {

  const [selectedFile , setSelectedFile] = useState(null);

  const {startUpload, progress} = useStorage();

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]){
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(selectedFile){
      startUpload(selectedFile);
      console.log(selectedFile);
      

    }
    setSelectedFile("");



  }

  return (
    <div className="text-center bg-cover bg-zinc-950 mt-96">
      <form onSubmit={handleSubmit}
      className="flex items-center flex-col gap-8 w-full">
        <input type="file" 
        multiple="multiple"
        onChange={handleFileChange} 
        className="file-input file-input-bordered w-full max-w-xs" />
        <button type="submit" 
        
        className={`btn btn-secondary btn-wide gap-5 ${Boolean(progress) && 'loading'}`} >Upload</button>

        <Link to = "/InPage"><button type="submit" className="btn btn-primary"  >Main Page</button></Link>

      </form>

    
    </div>
  )

}

export default Uploadform
