import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import MultiActionAreaCard from '../../components/Card';
import { CircularProgress } from '@mui/material';




function Home() {

  let [user , setUser] = useState(null);

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      // console.log(res.data);
      let response = res.data
      setUser(response)
      
      
    })
    .catch((err) => console.log(err)
  )
} , [])


  return (
  <>

  {
   user ? user.map((item) => {
    return <MultiActionAreaCard key={item.id} img={'https://images.unsplash.com/photo-1725876744114-3c95aef51abf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D'} name={item.name} fatherName={item.username} email={item.email}/> 
   }): <CircularProgress />
  }

  




  </>
  )
}

export default Home