import React from "react";
import SectionTitle from "../SectionTitle";
import Button from "../Button";
import CollectionCard from "./CollectionCard";
import "./Collection.scss";

function Collection() {
  const products = [
    {
      id: 1,
      name: "Decor Plate",
      imgLink: "https://picsum.photos/400/500",
      price: "$ 85.00 usd",
    },
    {
      id: 2,
      name: "Mint Pottery",
      imgLink: "https://picsum.photos/400/501",
      price: "$ 75.00 usd",
    },
    {
      id: 3,
      name: "Set Of Potterys",
      imgLink: "https://picsum.photos/401/500",
      price: "$ 125.00 usd",
    },
    {
      id: 4,
      name: "Orange Ceramic",
      imgLink: "https://picsum.photos/401/501",
      price: "$ 55.00 usd",
    },
    {
      id: 5,
      name: "Dark Bowl",
      imgLink: "https://picsum.photos/402/500",
      price: "$ 115.00 usd",
    },
    {
      id: 6,
      name: "Square Pottery",
      imgLink: "https://picsum.photos/400/502",
      price: "$ 75.00 usd",
    },
  ];
  return (
    <div className="collectionSection container">
      <SectionTitle text={"OUR ONLINE STORE"} titleClass={"collectionTittle"} />
      <div className="collectionHead">Pottery Collection</div>
      <div className="collectionCards">
        {products.map((prod) => (
          <CollectionCard
            imgLink={prod.imgLink}
            price={prod.price}
            productName={prod.name}
            key={prod.id}
          />
        ))} 
      </div>
      <Button text={'View All Products'} btnClassName={'collectionLink'} />
    </div>
  );
}

export default Collection;
