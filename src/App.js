import "./App.css";
import { useCallback, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Places from "./components/Places";
import Types from "./components/Types";
import Header from "./components/Header";

function App() {
  const [data, setData] = useState([]);
  const [types, setTypes] = useState([]);

  const fetchData = useCallback(async () => {
    const response = await fetch(
      `https://api.artic.edu/api/v1/artworks?limit=100`
    );
    const list = await response.json();
    setData(list.data);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/places" element={<Places />} />
        <Route
          path="types"
          element={<Types types={types} setTypes={setTypes} />}
        />
      </Routes>
    </main>
  );
}

export default App;
