import React, { useState } from 'react';
import './ExpenseItem.scss';
import ExpenseDate from './ExpenseDate.jsx';
import Card from '../UI/Card.jsx';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle('Updated');
    console.log(title);
  };
  return (
    <Card className="expense-item">
      {/* <div>{props.date.toDateString()}</div> */}
      <ExpenseDate date={props.date} />
      <div className="expense-item_description">
        <h2>{title}</h2>
        <div className="expense-item_price">Rs{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
