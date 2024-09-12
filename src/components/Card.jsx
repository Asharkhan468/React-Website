import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

export default function MultiActionAreaCard({name , email , fatherName , img}) {
  return (
    <Card className='mt-4' sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary' , fontSize:'18px' }}>
          {fatherName}
          </Typography>
           <Typography variant="h6" sx={{ color: 'text.secondary' , fontSize:'18px' }}>
            {email}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          SHOW MORE
        </Button>
      </CardActions>
    </Card>
  );
}
