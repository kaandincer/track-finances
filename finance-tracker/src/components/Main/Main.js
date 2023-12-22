import React from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider, useTheme } from '@mui/material';
import Form from './Form';
import List from './List';

function Main() {
    const theme = useTheme()
    const styles = {
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        cartContent: {
            paddingTop: 0,
        },
        divider: {
            margin: '20px 0',
        },
    };
    return (
        <Card style={styles.root}>
            <CardHeader title="Expense Tracker" subheader="For better financial health of all." />
            <CardContent>
                <Typography align='center' variant='h5'>Total Balance $100</Typography>
                <Typography variant='subtitle1' style={{ lineHeight: '1.5 em', marginTop: '20px' }}>
                    {/* Info Card Component */}
                    Try saying: Add income for $100 in Catgory Salary for Monday
                </Typography>
                <Divider />
                <Form></Form>
            </CardContent>
            <CardContent style={styles.cartContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
  )
}

export default Main