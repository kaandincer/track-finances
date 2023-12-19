import React from 'react'
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem, useTheme } from '@mui/material';

function Form() {
    const styles = {
        radioGroup: {
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '-10px',
        },
        button: {
            marginTop: '20px',
            marginLeft: '15px',
            // marginRight: '15px',
            // backgroundColor: 'rgba(0, 0, 122, 0.75)',
            // color: 'rgba(255, 255, 255)',
        },
    };

  return (
      <Grid container spacing={2}>
          <Grid item xs={12}>
              <Typography align='center' variant='subtitle2' gutterBottom>
                  ...
              </Typography>
          </Grid>
          <Grid item xs={6}>
              <FormControl fullWidth>
                  <InputLabel> Type </InputLabel>
                  <Select>
                      <MenuItem value="Income"> Income </MenuItem>
                      <MenuItem value="Expense"> Expense </MenuItem>
                  </Select>
              </FormControl>
          </Grid>
          <Grid item xs={6}>
              <FormControl fullWidth>
                  <InputLabel> Category </InputLabel>
                  <Select> 
                      <MenuItem value="Business"> Business </MenuItem>
                      <MenuItem value="Salary"> Salary </MenuItem>
                      <MenuItem value="Rent"> Rent </MenuItem>
                  </Select>
              </FormControl>
          </Grid>
          <Grid item xs={6}>
              <TextField type='number' label="Amount " fullWidth/>
          </Grid>
          <Grid item xs={6}>
              <TextField type='date' label="Date " fullWidth/>
          </Grid>
          <Button style={styles.button} variant='outlined' color='primary' fullWidth> Create </Button>
    </Grid>
  )
}

export default Form