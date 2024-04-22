import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sticky from "react-stickynode";

// Images
import logo from "../../../images/logo.svg";

class Header extends Component {
  componentDidMount() {
    // Mobile Menu sidebar function
    var btn = document.querySelector(".menuicon");
    var nav = document.querySelector(".menu-links");

    function toggleFunc() {
      btn.classList.toggle("open");
      nav.classList.toggle("show");
    }

    btn.addEventListener("click", toggleFunc);

    // Mobile Submenu open close function
    var navMenu = [].slice.call(
      document.querySelectorAll(".menu-links > ul > li")
    );
    for (var y = 0; y < navMenu.length; y++) {
      navMenu[y].addEventListener("click", function () {
        menuClick(this);
      });
    }

    function menuClick(current) {
      const active = current.classList.contains("open");
      navMenu.forEach((el) => el.classList.remove("open"));

      if (active) {
        current.classList.remove("open");
        console.log("active");
      } else {
        current.classList.add("open");
        console.log("close");
      }
    }
  }

  render() {
    return (
      <>
        {/* <!-- Header Top ==== --> */}
        <header className="header rs-nav ">
          <Sticky enabled={true} className="sticky-header navbar-expand-lg">
            <div className="menu-bar clearfix">
              <div className="container clearfix">
                {/* <!-- Header Logo ==== --> */}
                <div className="menu-logo m-t30">
                  <Link to={"/"}>
                    <img src={logo} width="150px" alt="" />
                  </Link>
                </div>
                {/* <!-- Mobile Nav Button ==== --> */}
                <button
                  className="navbar-toggler collapsed menuicon justify-content-end"
                  type="button"
                  data-toggle="collapse"
                  data-target="#menuDropdown"
                  aria-controls="menuDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
                {/* <!-- Author Nav ==== --> */}
                <div className="secondary-menu">
                  <div className="secondary-inner"></div>
                </div>
                <div className="secondary-menu">
                  <div className="header-contact">
                    <Link
                      to={"/contact"}
                      className="btn-primary button-md text-white button-phone"
                    >
                      Enquire
                    </Link>
                  </div>
                </div>

                {/* <!-- Navigation Menu ==== --> */}
                <div
                  className="menu-links navbar-collapse collapse justify-content-center"
                  id="menuDropdown"
                >
                  <div className="menu-logo">
                    <Link to={"/"}>
                      <img src={logo} alt="" />
                    </Link>
                  </div>
                  <ul className="nav navbar-nav">
                  <li>
                      <Link to={"/"}>Home</Link>
                    </li>

                    <li >
                      <Link to={"/the-group"}>
                        The Group
                      </Link>
                      
                    </li>

                    <li>
                      <Link to={"/services"}>
                        <span>Services</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/projects"}>
                        <span>Projects</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/careers"}>
                        <span>Careers</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/contact"}>
                        <span>Contact</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* <!-- Navigation Menu END ==== --> */}
              </div>
            </div>
          </Sticky>
          {/* <!-- Search Box ==== --> */}
        </header>
        {/* <!-- Header Top END ==== --> */}
      </>
    );
  }
}

export default Header;
