import "./ExpenseItems.css";
function ExpenseItem(props) {
  const expenseDate = props.date.toISOString();
  const expenseLocation = props.location;
  const expenseTitle = props.title;
  const expensePrice = props.price;
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
