import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import { RiMenuLine, RiCloseLine } from "@remixicon/react"

const Navigation = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return ( <>
    <header className="navigation">
      <a href='/' className="logo-link">
        <img src={Logo} alt="Company's logo" />
        <p>Abstractly</p>
      </a>
      <div className={`navigation__items`}>        
        <ul className="navigation__items__list">
          <li><a href="/">Home</a></li>
          <li><a href="/">Features</a></li>
          <li><a href="/">Pricing</a></li>
          <li><a href="/">About us</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
        <div className="navigation__items__actions">
          <a href="/" className="learn-more">Learn more</a>
          <a href="/" className="see-pricing">See pricing</a>
        </div>
      </div>
      <div className="navigation__menu-btn">          
        <button
          aria-label="Open mobile menu"
          className="navigation-toggler btn"
          onClick={() => {
            setIsCollapsed(!isCollapsed);
          }}
        >
          <RiMenuLine
            aria-hidden={true}
          />
        </button>    
      </div>
    </header>
    <nav className={`navigation-mobile ${isCollapsed ? '': 'open'}`}>
      <div className="navigation-mobile__header">
        <a href='/' className="logo-link">
          <img src={Logo} alt="Company's logo" />
          <p>Abstractly</p>
        </a>
        <div className="navigation-mobile__menu-btn">          
          <button
            aria-label="Open mobile menu"
            className="navigation-toggler btn"
            onClick={() => {
              setIsCollapsed(!isCollapsed);
            }}
          >
            <RiCloseLine
              aria-hidden={true}
            />
          </button>    
        </div>
      </div>
      <div className={`navigation__items`}>        
        <ul className="navigation-mobile__items__list">
          <li><a href="/">Home</a></li>
          <li><a href="/">Features</a></li>
          <li><a href="/">Pricing</a></li>
          <li><a href="/">About us</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
        <div className="navigation__items__actions">
          <a href="/" className="learn-more">Learn more</a>
          <a href="/" className="see-pricing">See pricing</a>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navigation;
