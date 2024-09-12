import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import axios from 'axios';
import { useState , useEffect } from 'react';
import { Box } from '@mui/material';
import {CircularProgress} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function MultiActionAreaCard() {

   let [user , setUser] = useState(null);

  useEffect(() => {
    axios('https://fakestoreapi.com/products')
    .then((res) => {
      console.log(res.data);
      let response = res.data
      setUser(response)
      
      
    })
    .catch((err) => {
     console.log( 'Error ==>', err.message , 'Please Check your Internet Connection');
     
    }
  )
} , [])

const navigate = useNavigate()

const singleProduct = (item) => {

  navigate(`SingleProduct/${item.id}`)



}





  return (

    <>
    {user ? user.map((item) => {

      return(
         <Card key={item.id} sx={{ maxWidth: 340 }}>
      <CardActionArea>
        <CardMedia
        // className='w-80 h-80'
          component="img"
          height="300"
          width='300'
          image={item.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.category}
          </Typography>
           <Typography gutterBottom variant="h5" component="div">
            {item.price} RS
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {item.description} 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => singleProduct (item)}>
          View More
        </Button>
        <Button variant="contained">Add to Cart</Button>

      </CardActions>
    </Card>
      )

    }): <Box sx={{textAlign:'center'}} margin={10}>
      <CircularProgress />
      </Box>}
    
    </>
    
   
  );
}
