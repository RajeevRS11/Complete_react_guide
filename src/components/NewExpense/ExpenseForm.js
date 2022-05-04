import React from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="new-expense_control">
          <label>Amount</label>
          <input type="number" min="0.0.1" step="0.01" />
        </div>
        <div className="new-expense_control">
          <label>Date</label>
          <input type="date" min="2021-01-01" max="2023-12-31" />
        </div>
        <div className="new-expense_action">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
