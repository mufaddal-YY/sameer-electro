import React, { Component } from "react";
import { Link } from "react-router-dom";

// Images
import logo from "../../../images/logo.svg";


class Footer2 extends Component {
  render() {
    return (
      <>
        <footer className="footer-white bg-white ">
          <div className="footer-top  footer-style2  bt0">
            <div className="container bg-foot">
              <div className="row">
                <div className="col-12 col-lg-3 col-md-3 col-sm-6">
                  <div className="widget widget_info">
                    <Link to={"/"}>
                      <img loading="lazy" src={logo} width="200px" alt="" />
                    </Link>
                    <hr />
                  </div>

                  <div className="widget">
                    <ul className="list-inline ft-social-bx">
                      <li>
                        <Link
                          onClick={() => window.open("https://www.facebook.com/SAMEERGROUPINDIA", "_blank")}
                          className="btn outline button-md"
                        >
                          <i className="fa fa-facebook"></i>
                        </Link>
                      </li>
                      
                      <li>
                        <Link
                          onClick={() => window.open("https://www.linkedin.com/company/sameer-electro-systems-pvt-ltd-/", "_blank")}
                          className="btn outline button-md"
                        >
                          <i className="fa fa-linkedin"></i>
                        </Link>
                      </li>
                     
                    </ul>
                  </div>
                </div>
                <div className="col-6 col-lg-3 col-md-3 col-sm-6">
                  <div className="widget footer_widget">
                    <h6 className="footer-title">Services</h6> <hr />
                    <ul>
                      <li>
                        <Link to={"/services"}>HV/ LV Lines</Link>
                      </li>
                      <li>
                        <Link to={"/services"}>Transformer Sub Stations</Link>
                      </li>
                      <li>
                        <Link to={"/services"}>LV Distribution panels</Link>
                      </li>
                      <li>
                        <Link to={"/services"}>Lighting</Link>
                      </li>
                      <li>
                        <Link to={"/services"}>
                          Liason with State Electricity Board
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-6 col-lg-3 col-md-2 col-sm-6">
                  <div className="widget footer_widget">
                    <h6 className="footer-title">Quick Links</h6> <hr />
                    <ul>
                      <li>
                        <Link to={"/privacy"}>Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to={"/quality-safety"}>
                          Quality & Safety Policy
                        </Link>
                      </li>

                      <li>
                        <Link to={"/terms-and-conditions"}>
                          Terms & Condition
                        </Link>
                      </li>
                      <li>
                        <Link to={"/csr"}>CSR</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-6 col-lg-3 col-md-2 col-sm-6">
                  <div className="widget footer_widget">
                    <h6 className="footer-title">Contact</h6> <hr />
                    <ul>
                      <li>
                        <Link
                          onClick={() =>
                            window.open(
                              "https://g.page/SAMEERGROUPINDIA?share",
                              "_blank"
                            )
                          }
                        >
                          
                          302, Kalpavriksha, 100 feet, Riverside D.P. Road, Near
                          Gharkul Lawns, Off. Mhatre Bridge, Patwardhan Baug,
                          Karve Nagar, Pune 411052. INDIA.
                        </Link>
                      </li>
                      <hr />
                      <li>
                        <Link
                          onClick={() =>
                            window.open("tel://+91-9970006545", "_blank")
                          }
                        >
                          Tel: +91 99700 06545
                        </Link>
                      </li>
                      <hr />
                      <li>
                        <Link
                          onClick={() =>
                            window.open(
                              "mailto: info@sameergroup.co.in",
                              "_blank"
                            )
                          }
                        >
                          
                          E-Mail: info@sameergroup.co.in
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                  
                  © 2022
                  <span className="text-primary">
                    Sameer Electro Systems Pvt. Ltd.
                  </span>
                  All Rights Reserved.
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer2;
