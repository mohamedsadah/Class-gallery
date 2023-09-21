import React, { useEffect, useState } from 'react'
import { collection,  query, onSnapshot, orderBy } from "firebase/firestore";
import { database } from '../firebase/config';



type Image = {
  CreatedAt: Date,
  imageUrl: String,
  Cyear: Boolean
};


const useFirestore = (collectionName: string) => {
  const [docs, setDocs]= useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  let unsubscribe: () => void

  useEffect (() =>{


    const getData = async () => {

      try{
        const q = query(collection(database, collectionName));
        unsubscribe = onSnapshot(q, (querySnapshot) => {
          const images: Image [] = [];
          querySnapshot.forEach((doc) => {
            const imageUrl = doc.data().imageUrl;
            const CreatedAt = doc.data().CreatedAt.toDate();
            const Cyear = doc.data().Cyear;
            images.push({imageUrl, CreatedAt, Cyear});
          });

          setDocs(images); 
        });

      } catch(error){
      }
    }


    getData();
    return () => unsubscribe && unsubscribe();
  }, [collectionName])

  return {
    docs, isLoading
  }
}

export default useFirestore
