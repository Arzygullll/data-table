const BASE_URL = "http://www.filltext.com/";

export async function fetchData(rows) {
  try {
    const response = await fetch(
      `${BASE_URL}?rows=${rows}&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data");
  }
}
