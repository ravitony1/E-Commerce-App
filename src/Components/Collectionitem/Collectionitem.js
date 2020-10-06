import React from "react";
import "./Collectionitem.scss";
import Custombutton from "../Custombutton/Custombutton";
import { connect } from "react-redux";
import { addItem } from "../../Redux/Cart/CartAction";

const Collectionitem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />

      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Custombutton onClick={() => addItem(item)} inverted>
        ADD
      </Custombutton>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(Collectionitem);
