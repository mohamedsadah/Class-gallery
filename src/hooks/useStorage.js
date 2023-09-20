import React, { useState } from 'react'
import { database, storage } from '../firebase/config';
import {v4 as uuidv4} from 'uuid'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { collection } from 'firebase/firestore';
import { addDoc } from 'firebase/firestore';

const useStorage = () => {

    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);


       
    const startUpload = (file = File) =>{
        if (!file){
            return;
        }

        const fileId = uuidv4();

        const fileFormat = file.type.split('/')[1]
        console.log(fileFormat);

        
        const storageRef = ref(storage, `images/${fileId}.${fileFormat}`);

        const uploadTask = uploadBytesResumable(storageRef, file);


    uploadTask.on('state_changed', (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    if(progress==0){
    alert("file is Uploading. you will get an alert once it is completed")
    
    }
    else if(progress==100){
    alert("File Uploaded");
    //window.location.replace('/Inpage');
    
 
    
   }
  }, 
  (error) => {

    setError(error);
   
  }, async () => { 
    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

    setUrl(downloadURL);
    console.log('File available at', downloadURL);

  

    const level = Math.round(Math.random() * 4);
   


     //store data
     await addDoc(collection(database, "images"), {
      first: downloadURL,
      CreatedAt: new Date(),
      Cyear: level
    });
  }
);


        
    }
   
return {
    progress, error, startUpload
}


  
}

export default useStorage
