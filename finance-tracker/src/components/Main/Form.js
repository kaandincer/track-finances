import React, { useState, useContext } from 'react'
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem, useTheme } from '@mui/material';
import { expenseTrackerContext } from '../../context/context';
import { create } from '@mui/material/styles/createTransitions';
import { v4 as uuidv4 } from 'uuid';
import { incomeCategories, expenseCategories } from '../../constants/categories';
import formatDate from '../../utils/formatDate';

const initialState = {
    amount: '',
    category: '',
    type: 'Income',
    date: formatDate(new Date()),
}

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

    const [formData, setFormData] = useState(initialState);
    const { addTransaction } = useContext(expenseTrackerContext);

    const createTransaction = () => {
        const transaction = { ...formData, amount: Number(formData.amount), id: uuidv4() };
        addTransaction(transaction);
        setFormData(initialState);
    }

    const selectedCategories = formData.type === "Income" ? incomeCategories : expenseCategories;

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
                  <Select value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value })}>
                      <MenuItem value="Income"> Income </MenuItem>
                      <MenuItem value="Expense"> Expense </MenuItem>
                  </Select>
              </FormControl>
          </Grid>
          <Grid item xs={6}>
              <FormControl fullWidth>
                  <InputLabel> Category </InputLabel>
                  <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}> 
                      {selectedCategories.map((cat) => <MenuItem key={cat.type} value={cat.type}>{ cat.type }</MenuItem>)}
                      {/* <MenuItem value="Business"> Business </MenuItem>
                      <MenuItem value="Salary"> Salary </MenuItem>
                      <MenuItem value="Rent"> Rent </MenuItem> */}
                  </Select>
              </FormControl>
          </Grid>
          <Grid item xs={6}>
              <TextField type='number' label="Amount " fullWidth value={formData.amount} onChange={ (e) => setFormData({...formData, amount: e.target.value})}/>
          </Grid>
          <Grid item xs={6}>
              <TextField type='date' label="Date " fullWidth value={formData.date} onChange={ (e) => setFormData({...formData, date: formatDate(e.target.value)})}/>
          </Grid>
          <Button style={styles.button} variant='outlined' color='primary' fullWidth onClick={createTransaction} > Create </Button>
    </Grid>
  )
}

export default Form