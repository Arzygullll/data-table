import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../helpers/const";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const fetchedData = await fetchData(32);
        setData(fetchedData);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const addRow = (newRow) => {
    setData((prevData) => [newRow, ...prevData]);
  };

  return (
    <DataContext.Provider value={{ data, loading, addRow }}>
      {children}
    </DataContext.Provider>
  );
};
