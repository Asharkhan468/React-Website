import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard({img , price , description , title }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        width="300"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {title} 
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
     {price} Rs
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant='contained'>Add to Cart</Button>
      </CardActions>
    </Card>
  );
}
