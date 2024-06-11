import { useState } from "react";
import { useData } from "../context/DataContextProvider";

const AddRowForm = () => {
  const { addRow } = useData();
  const [newRow, setNewRow] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRow((prevRow) => ({ ...prevRow, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRow(newRow);
    setNewRow({
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="id"
        value={newRow.id}
        onChange={handleChange}
        placeholder="ID"
        required
      />
      <input
        type="text"
        name="firstName"
        value={newRow.firstName}
        onChange={handleChange}
        placeholder="First Name"
        required
      />
      <input
        type="text"
        name="lastName"
        value={newRow.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        required
      />
      <input
        type="email"
        name="email"
        value={newRow.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="tel"
        name="phone"
        value={newRow.phone}
        onChange={handleChange}
        placeholder="Phone"
        required
      />
      <button type="submit">Add Row</button>
    </form>
  );
};

export default AddRowForm;
