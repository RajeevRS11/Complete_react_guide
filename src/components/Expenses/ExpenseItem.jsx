import React from 'react';
import './ExpenseItem.scss';
import ExpenseDate from './ExpenseDate.jsx';
import Card from '../UI/Card.jsx';

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      {/* <div>{props.date.toDateString()}</div> */}
      <ExpenseDate date={props.date} />
      <div className="expense-item_description">
        <h2>{props.title}</h2>
        <div className="expense-item_price">Rs{props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
