import React from "react";

import "./ProductBody.scss";

function ProductBody({ title, text }) {
  return (
    <div className="productText">
      <div className="productTextHead">{title}</div>
      <div className="productTextBody">{text}</div>
    </div>
  );
}

export default ProductBody;
