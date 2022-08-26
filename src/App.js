import React from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

// Tarea sección 4:

// Add Filter component which allows us to use a dropdown and set a filter
// Listen to changes on the dropdown
// Whenever the user does select a new state (a new year) you should listen to that event and then make sure that the picked year (value) is forwarded to the Expenses component
// Add the ExpenseFilter component to Expenses.js (wrap Card with a div and include ExpenseFilter at the beggining)
// Forward the picked year from ExpenseFilter to the Expenses component and then in the Expenses component store it in a state.
// No need to filter the expenses yet, just listen the change event and forward the data.
