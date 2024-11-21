import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";

const Product = () => {
  const { data: products } = useSelector((state) => state.products); // Access products state
  const dispatch = useDispatch(); // Initialize dispatch

  useEffect(() => {
    dispatch(getProducts()); // Fetch products on component mount
  }, [dispatch]);

  const addToCart = (product) => {
    dispatch(add(product)); // Dispatch action to add product to cart
  };

  if (!Array.isArray(products) || products.length === 0) {
    return <div>Loading...</div>; // Display a loading state if products are empty
  }

  const cards = products.map((product) => (
    <div className="col-md-3" style={{ marginBottom: "10px" }} key={product.id}>
      <Card style={{ width: "18rem", height: "h-100" }}>
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: "white" }}>
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add to cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1>Products Dashboard</h1>
      <div className="row">{cards}</div>
    </>
  );
};

export default Product;
