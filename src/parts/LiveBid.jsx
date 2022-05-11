import React, { useState } from "react";

import Button from "../elements/Button";
import ItemsCarousel from "react-items-carousel";
import range from "lodash/range";

export default function LiveBid(props) {
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

  return (
    <section className="container pt-4" id="showMostPicked">
      <div
        className="row align-items-center card-list"
        style={{ position: "relative" }}
      >
        <h1>Live Bid</h1>

        <div
          className="cardlist"
          style={{ padding: `0 ${chevronWidth}px`, position: "relative" }}
        >
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={4}
            gutter={20}
            leftChevron={
              <button
                className="btn-previous"
                style={{ borderRadius: "100%", width: 40, height: 40 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  style={{ width: 12 }}
                >
                  <path d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z" />
                </svg>
              </button>
            }
            rightChevron={
              <button
                className="btn-next"
                style={{ borderRadius: "100%", width: 40, height: 40 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  style={{ width: 12 }}
                >
                  <path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z" />
                </svg>
              </button>
            }
            outsideChevron={false}
            chevronWidth={chevronWidth}
          >
            <div
              className="cardlive"
              style={{ height: 250, background: "#EEE" }}
            >
              <div style={{ padding: 10 }}>
                <img
                  srcSet="https://newsfeed.org/wp-content/uploads/Facebook-enhanced-bidding.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="cardfooter">
                <div className="card-animated-title">
                  <div className="card-title">
                    <h5 className="card-title">Card title Card title Card title Card title</h5>
                  </div>
                  <div className="card-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      style={{ width: 20 }}
                    >
                      <path d="M.0003 64C.0003 46.33 14.33 32 32 32H112C191.5 32 256 96.47 256 176C256 234.8 220.8 285.3 170.3 307.7L221.7 436.1C228.3 452.5 220.3 471.1 203.9 477.7C187.5 484.3 168.9 476.3 162.3 459.9L106.3 320H64V448C64 465.7 49.67 480 32 480C14.33 480 0 465.7 0 448L.0003 64zM64 256H112C156.2 256 192 220.2 192 176C192 131.8 156.2 96 112 96H64V256zM400 160C461.9 160 512 210.1 512 272C512 333.9 461.9 384 400 384H352V480C352 497.7 337.7 512 320 512C302.3 512 288 497.7 288 480V192C288 174.3 302.3 160 320 160H400zM448 272C448 245.5 426.5 224 400 224H352V320H400C426.5 320 448 298.5 448 272z" />
                    </svg>
                    <span>. 992.000.000</span>
                  </div>
                  <div className="card-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      style={{ width: 20 }}
                    >
                      <path d="M.0003 64C.0003 46.33 14.33 32 32 32H112C191.5 32 256 96.47 256 176C256 234.8 220.8 285.3 170.3 307.7L221.7 436.1C228.3 452.5 220.3 471.1 203.9 477.7C187.5 484.3 168.9 476.3 162.3 459.9L106.3 320H64V448C64 465.7 49.67 480 32 480C14.33 480 0 465.7 0 448L.0003 64zM64 256H112C156.2 256 192 220.2 192 176C192 131.8 156.2 96 112 96H64V256zM400 160C461.9 160 512 210.1 512 272C512 333.9 461.9 384 400 384H352V480C352 497.7 337.7 512 320 512C302.3 512 288 497.7 288 480V192C288 174.3 302.3 160 320 160H400zM448 272C448 245.5 426.5 224 400 224H352V320H400C426.5 320 448 298.5 448 272z" />
                    </svg>
                    <span>. 992.000.000</span>
                  </div>
                </div>
                {/* <a href="#" className="btn btn-primary">
                    Go somewhere
                </a> */}
              </div>
            </div>
            <div
              className="cardlive"
              style={{ height: 250, background: "#EEE" }}
            >
              <div style={{ padding: 10 }}>
                <img
                  srcSet="https://newsfeed.org/wp-content/uploads/Facebook-enhanced-bidding.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="cardfooter">
                <div className="card-animated-title">
                  <div className="card-title">
                    <h5 className="card-title">Card title </h5>
                  </div>
                  <div className="card-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      style={{ width: 20 }}
                    >
                      <path d="M.0003 64C.0003 46.33 14.33 32 32 32H112C191.5 32 256 96.47 256 176C256 234.8 220.8 285.3 170.3 307.7L221.7 436.1C228.3 452.5 220.3 471.1 203.9 477.7C187.5 484.3 168.9 476.3 162.3 459.9L106.3 320H64V448C64 465.7 49.67 480 32 480C14.33 480 0 465.7 0 448L.0003 64zM64 256H112C156.2 256 192 220.2 192 176C192 131.8 156.2 96 112 96H64V256zM400 160C461.9 160 512 210.1 512 272C512 333.9 461.9 384 400 384H352V480C352 497.7 337.7 512 320 512C302.3 512 288 497.7 288 480V192C288 174.3 302.3 160 320 160H400zM448 272C448 245.5 426.5 224 400 224H352V320H400C426.5 320 448 298.5 448 272z" />
                    </svg>
                    <span>. 992.000.000</span>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ height: 250, background: "#EEE" }}>Third card</div>
            <div style={{ height: 250, background: "#EEE" }}>Fourth card</div>
            <div style={{ height: 250, background: "#EEE" }}>Fourth card</div>
            <div style={{ height: 250, background: "#EEE" }}>Fourth card</div>
          </ItemsCarousel>
        </div>

        <div
          className="card"
          style={{
            width: "18rem",
            margin: "auto",
            display: count <= 1 ? "block" : "none",
          }}
        >
          <img
            srcSet="https://newsfeed.org/wp-content/uploads/Facebook-enhanced-bidding.jpg"
            className="card-img-top"
            alt="..."
            style={{ width: "100%" }}
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>

        {/* <Button onClick={() => setCount(count - 1)} className='rounded-circle btn-previous' style={{width:40}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"/></svg></Button> */}

        <p>You clicked {count} times</p>
        <Welcome name="Sara" />

        <div>
          <button onClick={() => setVisible(true)}>Show</button>
          <button onClick={() => setVisible(false)}>Hide</button>
          {visible && <div>My element</div>}
        </div>
      </div>
    </section>
  );
}
