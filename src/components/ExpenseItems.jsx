import "./ExpenseItems.css";
function ExpenseItem() {
  const expenseDate = new Date(2026, 10, 1).toISOString();
  const expenseLocation = "Bangalore";
  const expenseTitle = "Book";
  const expensePrice = 10;
  return (
    <div className="expense-item">
      <div>{expenseDate}</div>
      <div className="expense-item__location">{expenseLocation}</div>
      <div>
        <h2 className="expense-item__description">{expenseTitle}</h2>
        <div className="expense-item__price">${expensePrice}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
