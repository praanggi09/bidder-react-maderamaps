import React, { useState, useEffect } from "react";

import Button from "../elements/Button";
import BrandIcon from "./IconText";

export default function Header(props) {
  const [address, setAddress] = useState(0);

  useEffect(() => {
   getNavLinkClass(window.location.pathname);
  }, []);

  const getNavLinkClass = (path) => {
    setAddress(path)

    return window.location.pathname === path ? "active" : "";
  };

  return (
    <header className="spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <BrandIcon />
          <div className="collapse navbar-collapse">
            <div className="col col-lg-5 col-md-5 col-sm-0">

            </div>
            <div className="col col-lg-7 col-md-7 col-sm-12">
              <ul className="navbar-nav ml-auto">
                <li className={`nav-item ${ (address==="/") ? 'active' : null }`} onClick={() => getNavLinkClass("/")}>
                  <Button className="nav-link" type="link" href="/">
                    Home
                  </Button>
                </li>
                <li className={`nav-item ${ (address==="/browse-by") ? 'active' : null }`} onClick={() => getNavLinkClass("/browse-by")}>
                  <Button className="nav-link" type="link" href="browse-by">
                    Browse By
                  </Button>
                </li>
                <li className={`nav-item ${ (address==="/stories") ? 'active' : null }`} onClick={() => getNavLinkClass("/stories")}>
                  <Button className="nav-link" type="link" href="stories">
                    Stories
                  </Button>
                </li>
                <li className={`nav-item ${ (address==="/agents") ? 'active' : null }`} onClick={() => getNavLinkClass("/agents")}>
                  <Button className="nav-link" type="link" href="agents">
                    Agents
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
