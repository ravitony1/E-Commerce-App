import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../Assets/crown.svg";
import { auth } from "../../firebase/firebase";
import { createStructuredSelector } from "reselect";
import Carticon from "../Cart/Carticon";
import { selectCurrentUser } from "../../Redux/User/Userselector";
import { selectCartHidden } from "../../Redux/Cart/Cartselectors";

import "./Header.scss";
import Cartdropdown from "../Cart/Cartdropdown";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <Carticon />
    </div>
    {hidden ? null : <Cartdropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
