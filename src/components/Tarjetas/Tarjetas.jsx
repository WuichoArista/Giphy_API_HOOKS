import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Tarjetas = ( {data} ) => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}} >
         <Card sx={{ maxWidth: 345 , width: 345,  margin: '15px' , backgroundColor: 'black' , color: 'white' }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="300"
                image={data.url}
                alt="img"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {data.title}
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
  )
}

export default Tarjetas