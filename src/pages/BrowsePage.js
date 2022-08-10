import React, { Component } from "react";

import Filter from "../parts/Filter";
import Categories from "../parts/Categories";
import Item from "../parts/Item";
import LiveBid from "../parts/LiveBid";
import Data from "../json/all-item.json";

export default class BrowsePage extends Component {
  render() {
    return (
      <>
        <div className="container" style={{paddingTop:"20px"}}>
            <div className="row">
                <div className="col-lg-3">
                    <Filter data={BrowsePage.filter} />
                </div>
                <div className="col-lg-9">
                    <Item data={Data.item} />
                </div>
            </div>
           
     
        </div>
      </>
    );
  }
}
