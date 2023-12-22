import React, {useContext} from 'react'
import { List as MUIList, ListItem, ListItemAvatar, Avatar, ListItemSecondaryAction, IconButton, Slide, useTheme, ListItemText } from '@mui/material'
import { Delete, MoneyOff } from '@mui/icons-material';
import { expenseTrackerContext } from '../../context/context';

function List() {
    const theme = useTheme()
    const { deleteTransaction, transactions } = useContext(expenseTrackerContext)

    const styles = {
        avatarIncome: {
            color: '#fff',
            backgroundColor: 'rgba(0, 220, 0)',
        },
        avatarExpense: {
            color: theme.palette.getContrastText('rgba(220, 0, 0)'),
            backgroundColor: 'rgba(200, 0, 0.5)',
        },
        list: {
            maxHeight: '150px',
            overflow: 'auto',
        },
    };

    // const transactions = [
    //     { id: 1, type: "Income", category: "Salary", amount: 100, date: "Sat Dec 16" },
    //     {id:2, type: "Expense", category: "Rent", amount: 50, date: "Fri Dec 15"},
    //     {id:3, type: "Income", category: "Investments", amount: 150, date: "Sat Dec 16"}
    // ];

  return (
      <MUIList dense={false} style={styles.list}>
          {transactions.map((transaction) => (
              <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
                  <ListItem>
                      <ListItemAvatar>
                          <Avatar style={transaction.type === "Income" ? styles.avatarIncome : styles.avatarExpense}>
                              <MoneyOff/>
                          </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={transaction.category} secondary={`$ ${transaction.amount} - ${transaction.date}`} />
                      <ListItemSecondaryAction>
                          <IconButton edge="end" aria-label='delete' onClick={() => deleteTransaction(transaction.id)}>
                              <Delete/>
                          </IconButton>
                      </ListItemSecondaryAction>
                  </ListItem>
              </Slide>
          ))}
    </MUIList>
  )
}

export default List