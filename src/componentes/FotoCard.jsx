import React from 'react';
import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from '@mui/material';

export const FotoCard = () => {
    return (
    <Box width='300px' > 
    <Card>
        <CardMedia
        component='img'
        height='140'
        image='http://source.unsplash.com/random'
        alt='unsplash image'
        />
        <CardContent>
            <Typography gutterBottom variant='h5' component='div'>Foto</Typography>
            <Typography  variant='body2' ccolor='text.secondary'>Descripción de la foto</Typography>
        </CardContent>
        <CardActions>
            <Button size='small' ccolor='text.secondary' >Saber más</Button>
        </CardActions>
    </Card>
    </Box>
    )
} 
