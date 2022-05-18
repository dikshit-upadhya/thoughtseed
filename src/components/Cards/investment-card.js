import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button1 from '../Button/button1'
import investmentCardLogo from '../../assets/invesmentCardLogo.png'
import Icon from '@mui/material/Icon'

export default function InvestmentCard() {
  return (
    <Card sx={{ minWidth: 250, borderRadius: '20px' }}>
      <CardContent>
        <Typography sx={{ fontSize: '10px', fontFamily: 'Inter', fontWeight: 'lighter', color: '#4E2E84', display: 'flex', alignItems: 'center' }} >
          <Icon sx={{height: '30px', width: '30px'}}><img style={{height: '25px', width: '25px'}} src={investmentCardLogo} alt="someIcon" /></Icon><span style={{opacity: '0.7'}}> Investment</span>
        </Typography>
        <Typography sx={{fontSize: '10px', fontFamily: 'Inter', display: 'flex', justifyContent: 'center'}} >
            You have invested in
        </Typography>
        <Typography sx={{ fontFamily: 'Inter', fontSize: '40px', fontWeight: 700, display: 'flex', justifyContent: 'center'}}>
          1 of 3
        </Typography>
        <Typography sx={{fontFamily: 'Inter', fontSize: '10px', display: 'flex', justifyContent: 'center', marginBottom: '16px'}}>
          available portfolio
        </Typography>
        <Button1 fullWidth >Suggest New Portfolio</Button1>
      </CardContent>
    </Card>
  );
}
