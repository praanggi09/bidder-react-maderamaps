import React, { Component } from "react";

import Filter from "../parts/Filter";
import LiveBid from "../parts/LiveBid";
import Data from "../json/sample4.json";

export default class BrowserPage extends Component {
  render() {
    return (
      <>
        <div className="container" style={{paddingTop:"20px"}}>
            <div className="col-lg-2">
                <Filter data={BrowserPage.filter} />
            </div>
        </div>
      </>
    );
  }
}
