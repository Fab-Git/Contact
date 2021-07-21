import React from "react";
import Product from "./Product";
import { productData } from "./ProductData";
import CheckState from "./CheckState";

// function handleClick() {
//   console.log("Button Clicked");
//   alert("Button Clicked");
// }
function App() {
  const prdComp = productData.map(function (item) {
    // return <Product key={prd.id} name={prd.name} price={prd.price} />;
    return <Product key={item.id} product={item} />;
  });
  return (
    <div>
      <p style={{ color: "red", fontSize: "300", fontWeight: "bold" }}>
        Our Products:
      </p>
      {prdComp}
      {/* <button onClick={handleClick}>Continue</button> */}
      <CheckState />
    </div>
  );
}

export default App;
