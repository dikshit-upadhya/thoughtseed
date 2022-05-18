import * as React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button1 from '../Button/button1'
import basketLogo from '../../assets/basketCardLogo.png'
import Icon from '@mui/material/Icon'

const BasketInnerCard = () => (
    <Box sx={{backgroundColor: '#C9BFF3', borderRadius: '10px', padding: "5px 11px", marginTop: '10px'}}>
            <Grid container>
                <Grid item xs={2} >
                    <Typography sx={{fontSize: '20px', fontFamily: 'Inter', color: '#4E2E84'}} gutterBottom>
                        NFT 
                    </Typography>
                    <Typography sx={{fontSize: '10px', fontFamily: 'Inter', color: '#4E2E84', fontWeight: 'lighter'}}>
                        Lorem ipsum dolor ist amet, conssecteur adipiscing elit.
                    </Typography>
                </Grid>
                <Grid item container xs={4} alignItems="center" sx={{position: 'relative', padding: '0 10px'}}>
                <Box sx={{height: '80%', position: 'absolute', top: '50%', transform: 'translateY(-50%)', width: '3px', backgroundColor: 'white', left: 0, borderRadius: '8px'}}></Box>
                    <Grid item xs={4}>
                        <Typography sx={{fontSize: '10px', fontFamily: 'Inter', color: '#4E2E84'}} gutterBottom>
                            7 Day
                        </Typography>
                        <Typography sx={{fontSize: '10px', fontFamily: 'Inter', color: 'red'}}>
                            -0.5%
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={{fontSize: '10px', fontFamily: 'Inter', color: '#4E2E84'}} gutterBottom>
                            30 Day
                        </Typography>
                        <Typography sx={{fontSize: '10px', fontFamily: 'Inter', color: 'green'}}>
                            +12.5%
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={{fontSize: '10px', fontFamily: 'Inter', color: '#4E2E84'}} gutterBottom>
                            30 Day
                        </Typography>
                        <Typography sx={{fontSize: '10px', fontFamily: 'Inter', color: 'green'}}>
                            +12.5%
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container xs={6} alignItems="center" sx={{position: 'relative', padding: '0 15px'}} >
                <Box sx={{height: '80%', position: 'absolute', top: '50%', transform: 'translateY(-50%)', width: '3px', backgroundColor: 'white', left: 0, borderRadius: '8px'}}></Box>
                    <Stack direction="row" spacing={1}>
                        <Box sx={{borderRadius: '50%', height: '35px', width: '35px', backgroundColor: '#4E2E84'}}></Box>
                        <Box sx={{borderRadius: '50%', height: '35px', width: '35px', backgroundColor: '#4E2E84'}}></Box>
                        <Box sx={{borderRadius: '50%', height: '35px', width: '35px', backgroundColor: '#4E2E84'}}></Box>
                        <Box sx={{borderRadius: '50%', height: '35px', width: '35px', backgroundColor: '#4E2E84'}}></Box>
                        <Box sx={{borderRadius: '50%', height: '35px', width: '35px', backgroundColor: '#4E2E84'}}></Box>
                        <Box sx={{borderRadius: '50%', height: '35px', width: '35px', backgroundColor: '#4E2E84'}}></Box>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
)

export default function BasketCard() {
  return (
    <Card sx={{ minWidth: 250, borderRadius: '20px' }}>
      <CardContent>
        <Typography sx={{ fontSize: '10px', fontFamily: 'Inter', fontWeight: 'lighter', color: '#4E2E84', display: 'flex', alignItems: 'center', marginBottom: '10px' }} >
          <Icon sx={{height: '30px', width: '30px'}}><img style={{height: '25px', width: '25px'}} src={basketLogo} alt="someIcon" /></Icon><span style={{opacity: '0.7'}}> My Baskets</span>
        </Typography>
        <BasketInnerCard />
        <BasketInnerCard />
        <BasketInnerCard />
        <Box sx={{display: 'flex', justifyContent: 'flex-end', marginTop: '20px'}}><Button1>See More</Button1></Box>
        
      </CardContent>
    </Card>
  );
}
