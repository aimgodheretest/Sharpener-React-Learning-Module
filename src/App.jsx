import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      date: new Date(2023, 10, 1),
      location: "Bangalore",
      title: "Insurance",
      price: 20,
    },
    {
      id: 2,
      date: new Date(2025, 1, 11),
      location: "Delhi",
      title: "Book",
      price: 10,
    },
    {
      id: 3,
      date: new Date(2024, 2, 1),
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
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
