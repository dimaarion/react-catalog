import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [product, setProduct] = useState([{}]);
  useEffect(() => {
    axios.get("/db/product.json").then((response) => setProduct(response));
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
