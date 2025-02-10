import React, { useState } from "react";
import { Table, Form } from "react-bootstrap";

const jsonData = {
  WH: [
    {
      beneficiary: "Angsana",
      amount: 1159585.6,
      finYear: 2024,
      fundingType: "Quarterly 90% Disbursements",
      quater: "Q2",
    },
    {
      beneficiary: "Banyan",
      amount: 955625.0,
      finYear: 2024,
      fundingType: "Quarterly 90% Disbursements",
      quater: "Q2",
    },
  ],
  CH: [
    {
      beneficiary: "Boys Town",
      amount: 4170.69,
      finYear: 2023,
      fundingType: "Quarterly 97% Disbursements",
      quater: "Tier 1 - Statutory Rate (Court Order + MSF-Referred)",
    },
    {
      beneficiary: "Chen Su Lan Methodist Children",
      amount: 4170.69,
      finYear: 2023,
      fundingType: "Quarterly 97% Disbursements",
      quater: "Tier 1 - Statutory Rate (Court Order + MSF-Referred)",
    },
  ],
};

const mergedData = [
  ...jsonData.WH.map((item) => ({ ...item, category: "WH" })),
  ...jsonData.CH.map((item) => ({ ...item, category: "CH" })),
];
console.log("Merged Data:", mergedData);

const TableComponent = () => {
  const [filteredData, setFilteredData] = useState(mergedData);
  const [selectedBeneficiary, setSelectedBeneficiary] = useState("");
  const [selectedFinYear, setSelectedFinYear] = useState("");

  console.log("Filtered Data:", filteredData);
  console.log("Selected Beneficiary:", selectedBeneficiary);
  console.log("Selected Financial Year:", selectedFinYear);

  const uniqueBeneficiaries = [
    ...new Set(mergedData.map((item) => item.beneficiary)),
  ];

  console.log("Unique Beneficiaries:", uniqueBeneficiaries);

  const uniqueFinYears = [...new Set(mergedData.map((item) => item.finYear))];

  console.log("Unique finyears:", uniqueFinYears);

  const handleFilterChange = (e) => {
    const selected = e.target.value;
    setSelectedBeneficiary(selected);
    applyFilters(selected, selectedFinYear);
  };

  const handleFinYearChange = (e) => {
    const selectedYear = e.target.value;
    setSelectedFinYear(selectedYear);
    applyFilters(selectedBeneficiary, selectedYear);
  };

  const applyFilters = (beneficiary, finYear) => {
    let filtered = mergedData;

    if (beneficiary) {
      filtered = filtered.filter((item) => item.beneficiary === beneficiary);
    }

    if (finYear) {
      filtered = filtered.filter((item) => item.finYear.toString() === finYear);
    }

    setFilteredData(filtered);
  };

  return (
    <div className="container mt-4">
      <Form.Group className="mb-3">
        <Form.Label>Filter by Beneficiary:</Form.Label>
        <Form.Select onChange={handleFilterChange} value={selectedBeneficiary}>
          <option value="">All</option>
          {uniqueBeneficiaries.map((name, index) => (
            <option key={index} value={name}>
              {name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Filter by Financial Year:</Form.Label>
        <Form.Select onChange={handleFinYearChange} value={selectedFinYear}>
          <option value="">All</option>
          {uniqueFinYears.map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Beneficiary</th>
            <th>Amount</th>
            <th>Financial Year</th>
            <th>Funding Type</th>
            <th>Quarter</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.beneficiary}</td>
                <td>{item.amount.toLocaleString()}</td>
                <td>{item.finYear}</td>
                <td>{item.fundingType}</td>
                <td>{item.quater}</td>
                <td>{item.category}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default TableComponent;
