import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import investmentCardLogo from '../../assets/invesmentCardLogo.png'
import Icon from '@mui/material/Icon'
import { RadialBarChart, RadialBar,LineChart, Line, ResponsiveContainer } from 'recharts';

export default function InvestmentCard() {
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 2400,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 1000,
          pv: 2400,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 2400,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 2400,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 2400,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 2400,
          amt: 2100,
        },
      ];

      const data2 = [
        {
          name: '18-24',
          uv: 35,
          pv: 2400,
          fill: '#fff',
        },
        {
          name: '18-24',
          uv: 30,
          pv: 2400,
          fill: '#4E2E84',
        },
        {
          name: '25-29',
          uv: 26.69,
          pv: 4567,
          fill: '#4E2E84',
        },
        {
          name: '30-34',
          uv: 15.69,
          pv: 1398,
          fill: '#4E2E84',
        },
        {
          name: '35-39',
          uv: 8.22,
          pv: 9800,
          fill: '#4E2E84',
        },
        {
          name: '40-49',
          uv: 8.63,
          pv: 3908,
          fill: '#4E2E84',
        },
      ];


  return (
    <Card sx={{ minWidth: 250, borderRadius: '20px' }}>
      <CardContent>
        <Typography sx={{ fontSize: '10px', fontFamily: 'Inter', fontWeight: 100, color: '#4E2E84', display: 'flex', alignItems: 'center' }} >
          <Icon sx={{height: '30px', width: '30px'}}><img style={{height: '25px', width: '25px'}} src={investmentCardLogo} alt="someIcon" /></Icon> <span style={{opacity: '0.7'}}> Portfolio Value</span>
        </Typography>
        <Typography sx={{fontSize: '32px', fontFamily: 'Inter', fontWeight: 'bold', color: '#8054D4', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
            $5500<span style={{fontSize: '20px', color: '#AD9BEA', fontWeight: 'lighter', fontFamily: 'Inter'}} >{"(+ $60)"}</span>
        </Typography>
        <Box sx={{border: 'solid 2px rgba(0,0,0,0.2)', borderRadius: '20px', margin: '25px 0'}}>
        <ResponsiveContainer   width="99%" height={100}>
        <LineChart
          width={500}
          height={300}
          data={data}
        >
          <Line type="monotone" dataKey="pv" stroke="black" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="red" />
        </LineChart>
      </ResponsiveContainer>
      </Box>
        <Typography sx={{fontSize: '12px', fontFamily: 'Inter', display: 'flex', justifyContent: 'space-between' }}>
            <span style={{color: 'red'}} >-0.5%</span>
            <span style={{color: 'green'}}>+12.5%</span>
            <span style={{color: 'green'}}>+25%</span>
        </Typography>
        <Box sx={{height: '200px', position: 'relative' }}>
            <Box sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Typography sx={{fontSize: '32px', fontFamily: 'Inter', fontWeight: 'bold'}}>
                    5
                </Typography>
                <Typography sx={{fontSize: '10px', fontFamily: 'Inter', fontWeight: 'lighter'}}>
                    Constituents
                </Typography>
            </Box>
        <ResponsiveContainer width="99%" height={200}>
        <RadialBarChart cx="50%" cy="50%" innerRadius="50%" outerRadius="100%" barSize={6} data={data2} startAngle={180} endAngle={180+360}>
          <RadialBar
            minAngle={15}
            // label={{ position: 'insideStart', fill: '#fff' }}
            background
            clockWise
            dataKey="uv"
          />
        </RadialBarChart>
      </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
}
