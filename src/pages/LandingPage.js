import React, { Component } from "react";

import Hero from "../parts/Hero";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        {/* <Header/> */}
        <Hero data={LandingPage.hero} />
        {/* <Header location={this.props.location}></Header> */}
        {/* <h1>test</h1> */}
      </>
    );
  }
}
