import React from "react";
import Collectionitem from "../Collectionitem/Collectionitem";
import "./Collectionpreview.scss";

const Collectionpreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <Collectionitem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default Collectionpreview;
