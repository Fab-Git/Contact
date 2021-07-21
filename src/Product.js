import React from "react";

function Product(props) {
  return (
    <div>
      <h4 style={{ color: "blueviolet" }}>
        Product Name: {props.product.name}
      </h4>
      <p style={{ color: "green" }}>Price: {props.product.price}</p>
    </div>
  );
}
export default Product;
