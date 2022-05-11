import React, { useState } from 'react';

import Button from "../elements/Button";

export default function LiveBid(props) {

    function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
      }

    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(false);
    return (
        <section className="container pt-4" id='showMostPicked'>
            <div className="row align-items-center card-list" style={{position: 'relative'}}>
                <h1>Live Bid</h1>

                <div className='d-flex' style={{padding:'10px 50px'}}>
                    <div className="card " style={{width: '18rem', margin:'auto', display: count <= 0? 'block' : 'none'}}>
                        <img srcSet="https://newsfeed.org/wp-content/uploads/Facebook-enhanced-bidding.jpg" className="card-img-top" alt="..." style={{width: '100%'}} />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                    <div className="card" style={{width: '18rem', margin:'auto', display: count <= 1? 'block' : 'none'}}>
                        <img srcSet="https://newsfeed.org/wp-content/uploads/Facebook-enhanced-bidding.jpg" className="card-img-top" alt="..." style={{width: '100%'}} />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                    <div className="card" style={{width: '18rem', margin:'auto', display: count <= 2? 'block' : 'none'}}>
                        <img srcSet="https://newsfeed.org/wp-content/uploads/Facebook-enhanced-bidding.jpg" className="card-img-top" alt="..." style={{width: '100%'}} />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                    <div className="card" style={{width: '18rem', margin:'auto', display: count <= 3? 'block' : 'none'}}>
                        <img srcSet="https://newsfeed.org/wp-content/uploads/Facebook-enhanced-bidding.jpg" className="card-img-top" alt="..." style={{width: '100%'}} />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>      

                    <div className="card" style={{width: '18rem', margin:'auto', display: count >= 1 && count <= 4? 'block' : 'none'}}>
                        <img srcSet="https://newsfeed.org/wp-content/uploads/Facebook-enhanced-bidding.jpg" className="card-img-top" alt="..." style={{width: '100%'}} />
                        <div className="card-body">
                            <h5 className="card-title">Card tsitle</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>               
                </div>
                <div>
                    <Button onClick={() => setCount(count + 1)} className='rounded-circle btn-next' style={{width:40}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/></svg></Button>
                    <Button onClick={() => setCount(count - 1)} className='rounded-circle btn-previous' style={{width:40}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"/></svg></Button>
                </div>

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