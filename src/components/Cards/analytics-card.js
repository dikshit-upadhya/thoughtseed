import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import analyticsLogo from "../../assets/analyticsCardLogo.png";
import Icon from "@mui/material/Icon";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Grid from "@mui/material/Grid";

export default function AnalyticsCard() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <Card sx={{ minWidth: "250px", borderRadius: "20px", minHeight: "350px" }}>
      <CardContent>
        <Grid container sx={{ marginBottom: "30px" }}>
          <Grid item xs={7}>
            <Typography
              sx={{
                fontSize: "10px",
                fontFamily: "Inter",
                fontWeight: 100,
                color: "#4E2E84",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Icon sx={{ height: "30px", width: "30px" }}>
                <img
                  style={{ height: "25px", width: "25px" }}
                  src={analyticsLogo}
                  alt="someIcon"
                />
              </Icon>{" "}
              <span style={{ opacity: "0.7" }}> Analytics</span>
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Stack spacing={2} direction="row">
              <Chip label="1w" variant="outlined" />
              <Chip label="1M" color="primary" />
              <Chip label="6M" variant="outlined" />
              <Chip label="1y" variant="outlined" />
              <Chip label="All Time" variant="outlined" />
            </Stack>
          </Grid>
        </Grid>
        <ResponsiveContainer width="99%" height={250}>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
