import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    // Add expense to App
    props.onAddExpense(expenseData);

    // Hide form after adding expense
    setShowForm(false);
  };

  const startAddingExpenseHandler = () => {
    setShowForm(true);
  };

  const stopAddingExpenseHandler = () => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {!showForm && (
        <button onClick={startAddingExpenseHandler}>Add Expense</button>
      )}

      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopAddingExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
