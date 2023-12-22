import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@mui/material';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend, DoughnutController } from 'chart.js';
import useTransactions from '../useTransactions';

function Details({ title }) {
  const styles = {
    income: {
      borderBottom: '10px solid rgba(0, 255, 0, 0.5)',
    },
    expense: {
      borderBottom: '10px solid rgba(255, 0, 0, 0.5)',
    }
  };

  const { total, chartData } = useTransactions(title);

  return (
      <Card style={ title === "Income" ? styles.income : styles.expense}> 
      <CardHeader title={ title } />
          <CardContent>
        <Typography variant='h5'>${ total }</Typography>
            <Doughnut data={chartData} />
          </CardContent>
    </Card>
  )
}

export default Details;