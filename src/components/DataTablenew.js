import React from "react";
import { Table } from "react-bootstrap";

const DataTablenew = ({ title, data }) => {
  return (
    <div className="mb-4">
      <h4 className="text-center">{title}</h4>
      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>category</th>
            <th>Beneficiary</th>
            <th>Amount (SGD)</th>
            <th>Financial Year</th>
            <th>Funding Type</th>
            <th>Quarter</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.category}</td>
              <td>{item.beneficiary}</td>
              <td>{item.amount.toLocaleString()}</td>
              <td>{item.finYear}</td>
              <td>{item.fundingType}</td>
              <td>{item.quater}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DataTablenew;
