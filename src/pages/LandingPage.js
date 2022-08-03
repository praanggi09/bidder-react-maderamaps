import React, { Component } from "react";

import Hero from "../parts/Hero";
import LiveBid from "../parts/LiveBid";
import Categories from "../parts/Categories";
import Data from "../json/sample4.json";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        {/* <Header/> */}
        <Hero data={LandingPage.hero} />
        <div style={{marginTop:100}}></div>
        <LiveBid data={Data} />

        <hr style={{margin:"5% 9%"}}></hr>
        <Categories data={Data.categories} />

        {/* <Header location={this.props.location}></Header> */}
        {/* <h1>test</h1> */}
      </>
    );
  }
}
