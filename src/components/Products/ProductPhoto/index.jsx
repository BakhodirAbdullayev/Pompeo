import React from "react";
import productPhoto from "../../../img/product.png";

import "./ProductPhoto.scss";

function ProductPhoto({ productName }) {
  return (
    <div className="productPhoto">
      <img src={productPhoto} alt="product photo" />
      <span>{productName}</span>
    </div>
  );
}

export default ProductPhoto;
