import { useState } from "react";
import ExpenseItems from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      date: new Date(2026, 10, 1),
      location: "Bangalore",
      title: "Insurance",
      price: 20,
    },
    {
      id: 2,
      date: new Date(2026, 1, 11),
      location: "Delhi",
      title: "Book",
      price: 10,
    },
    {
      id: 3,
      date: new Date(2026, 2, 1),
      location: "Hyderabad",
      title: "Charger",
      price: 30,
    },
    {
      id: 4,
      date: new Date(2026, 10, 1),
      location: "Mumbai",
      title: "Laptop",
      price: 100,
    },
  ]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />

      {expenses.map((expense) => (
        <ExpenseItems
          key={expense.id}
          date={expense.date}
          location={expense.location}
          title={expense.title}
          price={expense.price || expense.amount}
        />
      ))}
    </div>
  );
}

export default App;
