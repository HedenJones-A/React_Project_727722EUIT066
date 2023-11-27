import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './card.css';
export default function MediaCard() {
  return (
    <div>
        <div className='cardcontain'>
        <Card sx={{ maxWidth: 345}}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://plus.unsplash.com/premium_photo-1682799116921-de130f76c1d0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZG9uJTIwYnJpZGdlfGVufDB8fDB8fHww"
            title="green iguana"
          />
          <CardContent sx={{backgroundColor:'black'}}>
            <Typography gutterBottom variant="h5" component="div">
              <span>London Bridge</span>
            </Typography>
            <Typography variant="body2" color="white" backgroundColor='black'>
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions sx={{background:'skyblue'}}>
          <Button size="small"><h4><span>Share</span></h4></Button>
            <Button size="small"><h4><span>Learn More</span></h4></Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8&w=1000&q=80"
            title="green iguana"
          />
          <CardContent sx={{backgroundColor:'black'}}>
            <Typography gutterBottom variant="h5" component="div" >
              <span>Taj Mahal</span>
            </Typography>
            <Typography variant="body2" color="white">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions sx={{background:'skyblue'}}>
          <Button size="small"><h4><span>Share</span></h4></Button>
            <Button size="small"><h4><span>Learn More</span></h4></Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://i.ytimg.com/vi/jGFZfqTymEg/maxresdefault.jpg"
            title="green iguana"
          />
          <CardContent sx={{backgroundColor:'black'}}>
            <Typography gutterBottom variant="h5" component="div">
              <span>Rio de Janeiro</span>
            </Typography>
            <Typography variant="body2" color="white">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions sx={{background:'skyblue'}}>
          <Button size="small"><h4><span>Share</span></h4></Button>
            <Button size="small"><h4><span>Learn More</span></h4></Button>
          </CardActions>
        </Card>
    
        </div>
        <div className='cardcontain'>
        <Card sx={{ maxWidth: 345}}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQnQTBfeJIPFz8wfz0pwyc9GRXrWXSJQWCQszz1CK19TGCwvXb5TjzndHASxpE8TQXF"
            title="green iguana"
          />
          <CardContent sx={{backgroundColor:'black'}}>
            <Typography gutterBottom variant="h5" component="div">
              <span>Colossuam</span>
            </Typography>
            <Typography variant="body2" color="white">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions sx={{background:'skyblue'}}>
            <Button size="small"><h4><span>Share</span></h4></Button>
            <Button size="small"><h4><span>Learn More</span></h4></Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/at%2Fnews-culture%2F2022-11%2Fshutterstock_2088675358"
            title="green iguana"
          />
          <CardContent sx={{backgroundColor:'black'}}>
            <Typography gutterBottom variant="h5" component="div">
            <span>Egypt's Great Pyramid</span>
            </Typography>
            <Typography variant="body2" color="white">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions sx={{background:'skyblue'}}>
            <Button size="small"><h4><span>Share</span></h4></Button>
            <Button size="small"><h4><span>Learn More</span></h4></Button>
            
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://www.practically.com/web/assets/blog/107/banner.jpg"
            title="green iguana"
          />
          <CardContent sx={{backgroundColor:'black'}}>
            <Typography gutterBottom variant="h5" component="div">
              <span>The Great Wall of China</span>
            </Typography>
            <Typography variant="body2" color='white'>
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions sx={{background:'skyblue'}}>
          <Button size="small"><h4><span>Share</span></h4></Button>
            <Button size="small"><h4><span>Learn More</span></h4></Button>
          </CardActions>
        </Card>

        </div>
    </div>
  );
}