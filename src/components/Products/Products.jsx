import React from "react";
import ProductPhoto from "./ProductPhoto";
import SectionTitle from "../SectionTitle";
import ProductBody from "./ProductBody";

import "./Products.scss";

function Products() {
  const productBodyItem = [
    {
      id: 1,
      title: "Hand Grafted Pottery since 1990",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.",
    },
    {
      id: 2,
      title: "We Provide Premium Pottery Produts",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.",
    },
  ];
  return (
    <>
      <div className="productSection container">
        <SectionTitle text={"Product Categories"} titleClass={"productTitle"} />
        <div className="productHead">
          Porcelain <span className="specialEmblem">&</span> Pottery
        </div>
        <div className="productPhotos">
          <ProductPhoto productName={"vases"} />
          <ProductPhoto productName={"mugs"} />
          <ProductPhoto productName={"plates"} />
        </div>

        <div className="productBody">
          {productBodyItem.map((item) => {
            return (
              <ProductBody title={item.title} text={item.text} key={item.id} />
            );
          })}
        </div>
      </div>
      <div className="line"></div>
    </>
  );
}

export default Products;
