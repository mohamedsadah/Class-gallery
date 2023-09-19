import { useState } from "react"
import useStorage from "../hooks/useStorage";

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
    <div className="text-center mt-15">
      <form onSubmit={handleSubmit}
      className="flex items-center flex-col gap-8">
        <input type="file" 
        onChange={handleFileChange}
        className="file-input file-input-bordered w-full max-w-xs" />
        <button type="submit" 
        
        className={`btn btn-secondary gap-5 ${Boolean(progress) && 'loading'}`} >Upload</button>
      </form>
    </div>
  )
}

export default Uploadform
