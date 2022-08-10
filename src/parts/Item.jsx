import React from "react";
import Button from "../elements/Button";
import { numberWithCommas } from "../utils";

export default function Item({ data }) {
  return (
    <section className="container" id="showMostPicked" style={{ padding: '0', marginBottom: '20px' }}>
      <div
        className="row align-items-center card-list"
        style={{ position: "relative" }}
      >
        <h1>Live Bid</h1>

        <div
          className="cardlist"
          style={{  position: "relative" }}
        >
          <div className="row gap-3">
            {data.map((bid, index) => {
              return <div
                className="cardlive col-md-3" key={index}
                style={{ height: 250, background: "#EEE" }}
              >
                <div style={{ padding: 10 }}>
                  <img
                    srcSet={bid.imgUrl}
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="cardfooter">
                  <div className="card-animated-title">
                    <div className="card-title">
                      <h5 className="card-title">
                        {bid.title}
                      </h5>
                    </div>
                    <div className="card-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        style={{ width: 20 }}
                      >
                        <path d="M.0003 64C.0003 46.33 14.33 32 32 32H112C191.5 32 256 96.47 256 176C256 234.8 220.8 285.3 170.3 307.7L221.7 436.1C228.3 452.5 220.3 471.1 203.9 477.7C187.5 484.3 168.9 476.3 162.3 459.9L106.3 320H64V448C64 465.7 49.67 480 32 480C14.33 480 0 465.7 0 448L.0003 64zM64 256H112C156.2 256 192 220.2 192 176C192 131.8 156.2 96 112 96H64V256zM400 160C461.9 160 512 210.1 512 272C512 333.9 461.9 384 400 384H352V480C352 497.7 337.7 512 320 512C302.3 512 288 497.7 288 480V192C288 174.3 302.3 160 320 160H400zM448 272C448 245.5 426.5 224 400 224H352V320H400C426.5 320 448 298.5 448 272z" />
                      </svg>
                      <span>. {numberWithCommas(bid.price)}</span>
                    </div>
                  </div>
                  {/* <a href="#" className="btn btn-primary">
                        Go somewhere
                    </a> */}
                </div>
              </div>
            })

            }
           



          </div>
        </div>



      </div>
    </section>
  );
}
