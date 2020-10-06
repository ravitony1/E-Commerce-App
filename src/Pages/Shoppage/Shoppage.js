import React, { Component } from "react";

import Shopdata from "./Shopdata";
import Collectionpreview from "../../Components/Collectionpreview/Collectionpreview";

class Shoppage extends Component {
  constructor() {
    super();

    this.state = {
      collections: Shopdata,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <Collectionpreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default Shoppage;
