/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuToggle] = useState(false);

  const toggleMenu = () => setMenuToggle(!menuOpen);

  const stylesOpen = {
    transform: 'translateX(0px)'
  };
  return (
    <div className="navbar-fixed">
      <nav className="red">
        <div className="container">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
              SSR News
            </a>
            <a onClick={toggleMenu} className="sidenav-trigger waves-effect right">
              <i className="material-icons">menu</i>
            </a>
            <div
              className="sidenav-overlay"
              style={menuOpen ? { display: 'block', opacity: 1 } : null}
              onClick={toggleMenu}
            />
            <ul id="slide-out" className="sidenav" style={menuOpen ? stylesOpen : null}>
              <li>
                <a className="subheader">Menu</a>
              </li>
              <li>
                <div className="divider" />
              </li>
              <li>
                <Link to="/" className="item" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/articles/techradar" className="item" onClick={toggleMenu}>
                  Tech Radar
                </Link>
              </li>
              <li>
                <Link to="/articles/mashable" className="item" onClick={toggleMenu}>
                  Mashable
                </Link>
              </li>
              <li>
                <Link to="/articles/the-verge" className="item" onClick={toggleMenu}>
                  The Verge
                </Link>
              </li>
              <li>
                <Link to="/articles/the-next-web" className="item" onClick={toggleMenu}>
                  TNW
                </Link>
              </li>
              <li>
                <Link to="/articles/wired" className="item" onClick={toggleMenu}>
                  Wired
                </Link>
              </li>
              <li>
                <Link to="/articles/recode" className="item" onClick={toggleMenu}>
                  Recode
                </Link>
              </li>
            </ul>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/articles/techradar" className="item">
                  Tech Radar
                </Link>
              </li>
              <li>
                <Link to="/articles/mashable" className="item">
                  Mashable
                </Link>
              </li>
              <li>
                <Link to="/articles/the-verge" className="item">
                  The Verge
                </Link>
              </li>
              <li>
                <Link to="/articles/the-next-web" className="item">
                  TNW
                </Link>
              </li>
              <li>
                <Link to="/articles/wired" className="item">
                  Wired
                </Link>
              </li>
              <li>
                <Link to="/articles/recode" className="item">
                  Recode
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
