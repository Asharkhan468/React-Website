import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ImgMediaCard from '../../components/ViewMoreCard';
import { Box, Typography } from '@mui/material';



function SingleProduct() {
    const [data , setData] = useState([]);
    const {id} = useParams()

    useEffect(() => {
        axios(`https://fakestoreapi.com/products/${id}`)
        .then((res) => {
          let products = res.data;
          setData(products)           
          
        } )
        .catch(err => console.log(err.message)
        )

    } , [])
    console.log(data);
    
  return (
    <>
    <Typography variant='h5' className='text-center mt-3 fw-bold'>

      Product Description
      
    </Typography>

     

   {<Box className='d-flex justify-content-center mt-5'>
      <ImgMediaCard img={data.image} title={data.title} price={data.price} description={data.description}/>
    </Box>}

    </>
  )
}

export default SingleProduct