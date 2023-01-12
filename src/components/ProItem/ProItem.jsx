import React from "react";
import Item from "./Item";

function ProItem() {
  const infos = [
    {
      id: 1,
      title: "Gold & Black Pottery",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute.",
    },
    {
      id: 2,
      title: "Orange Ceramic",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute.",
    },
  ];
  return (
    <div className="proItemSection container">
      {infos.map((item) => (
        <Item title={item.title} text={item.text} key={item.id} itemId={item.id} />
      ))}
    </div>
  );
}

export default ProItem;
