import { useState } from "react";
import { useData } from "../context/DataContextProvider";

const DataTable = () => {
  const { data, loading } = useData();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const filteredData = data.filter((row) =>
    Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />{" "}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.firstName}</td>
              <td>{row.lastName}</td>
              <td>{row.email}</td>
              <td>{row.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {Array.from(
          { length: Math.ceil(filteredData.length / itemsPerPage) },
          (_, index) => (
            <button key={index + 1} onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default DataTable;
