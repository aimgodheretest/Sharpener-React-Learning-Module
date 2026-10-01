import ExpenseItems from "./components/ExpenseItems.jsx";

function App() {
  return (
    <>
      <ExpenseItems
        date={new Date(2026, 10, 1)}
        location={"Bangalore"}
        title={"Insurance"}
        price={20}
      />
      <ExpenseItems
        date={new Date(2026, 1, 11)}
        location={"Delhi"}
        title={"Book"}
        price={10}
      />
      <ExpenseItems
        date={new Date(2026, 2, 1)}
        location={"Hyderabad"}
        title={"Charger"}
        price={30}
      />
      <ExpenseItems
        date={new Date(2026, 10, 1)}
        location={"Mumbai"}
        title={"Laptop"}
        price={100}
      />
    </>
  );
}

export default App;
