import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ServicesCard() {
  return (
    <Card className='m-1 rounded-md '>
      <CardMedia
        sx={{ height: 200 }}
        image="https://s.yimg.com/ny/api/res/1.2/QCu0K16n68SLhdE9nbzzSg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en/hello_giggles_454/69e6db832843b1271dc849ee8e0034a3"
        title="Chinese Massage"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Chinese Massage
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small">Show</Button>
      </CardActions>
    </Card>
  );
}