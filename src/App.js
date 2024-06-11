import React from "react";
import AddRowForm from "./components/AddRowForm";
import DataTable from "./components/DataTable";

const App = () => {
  return (
    <div className="container">
      <h1>Data Table</h1>
      <AddRowForm />
      <DataTable />
    </div>
  );
};

export default App;
