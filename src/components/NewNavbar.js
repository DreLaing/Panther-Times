import React, { Component } from "react";
import { menuItems } from "./menuItems";
import "./navBar.css";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
    };
  }
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="navBarItems">
        <h1 className="navLogo"> Panther News</h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
          {/* to uses fas fa-times copy the cdn link from 
          awesome fonts.com. The statement above is saying if the close symbol will be produce else the hamburger menu */}
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {/*In the CSS in nav-menu will be set to display:none.
          This is done to stop the hamburger menu from showing in fullscreen.
          The code in the className allows the navbar to function when the screen is at a mobile display. 
          When the menu is clicked the nav-menu active will be shown and the option will be shown on the mobile display.
         .if not clicked the hamburger menu(nav-menu) will be shown on the the nav bar. */}

          {menuItems.map((item, index) => {
            /* the map function allows us to get the values from the menuItems array*/
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="search-box">
          <input className="search-text" type="text" placeholder="search" />
          <a className="search-btn" href="#">
            <i className="fas fa-search"></i>
          </a>
        </div>
      </nav>
    );
  }
}
export default NavBar;
