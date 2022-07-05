import React from 'react'
import logo  from '../Assests/images/Vector.svg'

const Footer = () => {
  return (
    <div>
     <footer className="footer dark">
        <div className="container">
          <div className="row module-wrapper">
            <div className="col-md-4 col-sm-6">
              <div className="widget">
                <div className="text-center">
                  <a
                  className="navbar-brand"
                  href="index-2.html"
                  style={{display: "flex",flexDirection: "row"}}
                  >
                    <img
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
                  </span></a>
                  <p>
                    Lorem iam nonummy nibh euismod tincidunt ut laoreet dolore
                    Lorem ipsum dolor sit amet.
                  </p>

                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="widget">
                <div className="widget-title">
                  <h4>Contact Details</h4>
                </div>
                <ul>
                  <li><i className="fa fa-envelope"></i> info@yoursite.com</li>
                  <li><i className="fa fa-phone"></i>98765 43210</li>
                  <li><i className="fa fa-fax"></i>98765 43210</li>
                </ul>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="widget">
                <div className="widget-title" style={{marginBottom: "10px"}}>
                  <h4>Useful Links</h4>
                </div>
                <ul>
                  <li><a href="index-alt.html">Home </a></li>
                  <li><a href="vets.html">Doctors</a></li>
                  <li><a href="about.html">About Us</a></li>
                  <li><a href="services.html">Our Services</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <section className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-left">
              <p>© 2022 Vetsline  Ltd.  </p>
            </div>
            <div className="col-md-6 text-right">
              <ul className="list-inline">
                <li><a href="#">Terms & Condition</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>



  )
}

export default Footer