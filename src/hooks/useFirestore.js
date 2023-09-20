import React, { useEffect, useState } from 'react'
import { collection, query, where, onSnapshot, collectionName } from "firebase/firestore";


let Image = {
  createdAt: Date,
  imageUrl: String,
  Cyear: Boolean
}

const useFirestore = (collectionName) => {
  const [docs, setDocs]= useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect (() =>{



  }, [collectionName])

  return {
    docs, isLoading
  }
}

export default useFirestore
