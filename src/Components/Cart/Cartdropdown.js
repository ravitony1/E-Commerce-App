import React from "react";
import { connect } from "react-redux";

import Custombutton from "../Custombutton/Custombutton";
import { createStructuredSelector } from "reselect";

import "./Cartdropdown.scss";
import Cartitem from "./Cartitem";
import { selectCartItems } from "../../Redux/Cart/Cartselectors";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../Redux/Cart/CartAction";

const Cartdropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartitem) => (
          <Cartitem key={cartitem.id} item={cartitem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <Custombutton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      CHECKOUT
    </Custombutton>
  </div>
);

const mapSateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapSateToProps)(Cartdropdown));
