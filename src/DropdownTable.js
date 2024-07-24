// src/DropdownTable.js
import React, { useState } from 'react';
import './Table.css'

const DropdownTable = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h1>Dropdown to Table</h1>
      <select onChange={handleChange}>
        <option value="">Select an option</option>
        <option value="status">Status</option>
        <option value="priority">Priority</option>
        <option value="employee">Employee</option>
      </select>

      <Table selectedOption={selectedOption} />
    </div>
  );
};

const Table = ({ selectedOption }) => {
    const data = {
      status: [
        { id: 1, value: 'Not Started' },
        { id: 2, value: 'Pending' },
        { id: 3, value: 'Completed' },
        { id: 4, value: 'Closed' },
      ],
      priority: [
        { id: 1, value: 'High' },
        { id: 2, value: 'Medium' },
        { id: 3, value: 'Low' },
      ],
      employee: [
        { id: 1, value: 'James' },
        { id: 2, value: 'Smith' },
        { id: 3, value: 'Linda' },
      ],
    };
  
    return (
        <div className="table-container">
        <h2>Selected: {selectedOption}</h2>
        {selectedOption && (
          <table className="styled-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>{selectedOption.charAt(0).toUpperCase() + selectedOption.slice(1)}</th>
              </tr>
            </thead>
            <tbody>
              {data[selectedOption]?.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  };

export default DropdownTable;
