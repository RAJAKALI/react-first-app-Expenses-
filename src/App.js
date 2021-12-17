import React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
 const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'bike',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'new tv',
      amount: 294.67,
      date: new Date(2020, 2, 28),
    },
    {
      id: 'e3',
      title: 'car insurance',
      amount: 394.67,
      date: new Date(2021, 5, 12),
    },
    {
      id: 'e4',
      title: 'New Desk',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  // return React.createElement('div',{},
  // React.createElement('h2',{},"Let's get started"),
  // React.createElement(Expenses,{items: expenses})
  // );
 return (
   <div>
     <NewExpense/>
      <Expenses items={expenses}/>
    </div>
  );
}
export default App;
