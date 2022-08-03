import React, { Component } from "react";

import Hero from "../parts/Hero";
import Categories from "../parts/Categories";
import FilterList from "../parts/FilterList";
import Data from "../json/sample4.json";
// import BrowseBy from "../parts/BrowseBy";


export default class LandingPage extends Component {
  render() {
    return (
      <>
        {/* <Header/> */}
        <div className="col col-md-12 row">
            <div className="col col-md-2" style={{padding:'40px 0px 0px 20px'}}>
                <FilterList data={Data.categories} />
            </div>
            <div className="col col-md-10">
                <Categories data={Data.categories} />
            </div>
        </div>
        {/* <BrowseBy data={Data.categories} /> */}
        {/* <Header location={this.props.location}></Header> */}
        {/* <h1>test</h1> */}
      </>
    );
  }
}