import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Nav, List } from "bootstrap-4-react";
import "./styles.css";
import Product from "./Product";

export default function App() {
  const [product, setProduct] = useState([{}]);
  useEffect(() => {
    axios.get("/db/product.json").then((response) => setProduct(response.data));
  }, []);
  return (
    <Container className="App text-left">
      <h1>Каталог товаров</h1>
      <Nav flex="column">
        {product.map((x) => (
          <List.Item key={x.id + 10}>
            <Product />
          </List.Item>
        ))}
      </Nav>
    </Container>
  );
}
