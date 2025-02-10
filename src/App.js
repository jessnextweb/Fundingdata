import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TableComponent from "./components/TableComponent";

function App() {
  return (
    <div className="App">
      <h2 className="text-center mt-4">Funding Data</h2>
      <TableComponent />
    </div>
  );
}

export default App;
