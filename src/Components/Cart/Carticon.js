import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../Redux/Cart/CartAction";
import { createStructuredSelector } from "reselect";

import { ReactComponent as ShoppingIcon } from "../../Assets/shopping-bag.svg";
import { selectCartItemsCount } from "../../Redux/Cart/Cartselectors";
import "./Carticon.scss";

const Carticon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(Carticon);
