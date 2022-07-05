import React from 'react'
import logo  from '../Assests/images/Vector.svg'

const Header = () => {
  return (
    <div>
      
      <header className="header">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12">
              <nav className="navbar navbar-default">
                <div className="container-fluid">
                  <div className="navbar-table">
                    <div className="navbar-cell tight">
                      <div className="navbar-header">
                        <a
                          className="navbar-brand"
                          href="index-2.html"
                          style={{display: "flex", flexDirection: "row"}}
                          ><img
                            src={logo}
                            alt="Ova"
                            style={{width: "50px"}}
                          />
                          <span
                            style={{
                              display: "flex",
                              marginLeft: "20px",
                              alignItems: "center",
                              fontSize: "30px",
                              fontWeight: "bold"
                            }}
                          >
                            Vetsline
                          </span></a
                        >
                        <div>
                          <button
                            type="button"
                            className="navbar-toggle collapsed"
                            data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-2"
                          >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="fa fa-bars"></span>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="navbar-cell stretch">
                      <div
                        className="collapse navbar-collapse"
                        id="bs-example-navbar-collapse-2"
                      >
                        <div className="navbar-cell">
                          <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown has-submenu">
                              <a
                                href="#"
                                className="dropdown-toggle active"
                                data-toggle="dropdown"
                                role="button"
                                aria-expanded="false"
                                >Home
                              </a>
                            </li>
                            {/* <!-- <li><a href="vets.html">Doctors</a></li> --> */}
                            <li className="dropdown has-submenu">
                              <a
                                href="#"
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                role="button"
                                aria-expanded="false"
                                >Resources <span className="fa fa-angle-down"></span
                              ></a>
                              <ul classNameName="dropdown-menu start-left" role="menu">
                                <li>
                                  <a href="vets.html">Veterinary Doctors</a>
                                </li>
                                <li>
                                  <a href="pricing.html">Pet Clinic</a>
                                </li>
                                <li>
                                  <a href="testimonials.html">Labs</a>
                                </li>
                                <li>
                                  <a href="shortcodes.html">Feed Shops </a>
                                </li>
                                <li>
                                  <a href="typography.html">Farm Equipments</a>
                                </li>
                                <li>
                                  <a href="typography.html"
                                    >Live Stocks / Poultry Equipments</a
                                  >
                                </li>
                              </ul>
                            </li>
                            <li className="dropdown has-submenu">
                              <a
                                href="#"
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                role="button"
                                aria-expanded="false"
                                >Animals <span className="fa fa-angle-down"></span
                              ></a>
                              <ul className="dropdown-menu start-left" role="menu">
                                <li>
                                  <a href="matchfind.html">Match Find</a>
                                </li>

                                <li>
                                  <a href="adoption.html">Adoption</a>
                                </li>
                                <li>
                                  <a href="shop.html">Buy & Sell</a>
                                </li>
                              </ul>
                            </li>
                            {/* <!-- <li><a href="gallery-1.html">Gallery</a></li> --> */}
                            {/* <!-- <li><a href="shop.html">Shop</a></li> --> */}
                            <li><a href="news.html">News</a></li>

                            <li><a href="contact.html">Contact</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

    </div>
  )
}

export default Header