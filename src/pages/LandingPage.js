import React, { Component } from "react";

import Hero from "../parts/Hero";
import LiveBid from "../parts/LiveBid";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        {/* <Header/> */}
        <Hero data={LandingPage.hero} />
        <div style={{marginTop:100}}></div>
        <LiveBid data={LandingPage.LiveBid} />
        {/* <Header location={this.props.location}></Header> */}
        {/* <h1>test</h1> */}
      </>
    );
  }
}
