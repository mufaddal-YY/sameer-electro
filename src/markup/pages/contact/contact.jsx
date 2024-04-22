import React, { Component } from "react";
import { Link } from "react-router-dom";

// Layout
import Header from "../../layout/header/header3";
import Footer from "../../layout/footer/footer2";

import ScrollToTop from "../../elements/ScrollToTop";

class Contact1 extends Component {
  render() {
    return (
      <>
        <Header />
        <ScrollToTop />

        <div className="page-content bg-white">
          <div className="page-banner page-banner-sm bg-light bg-about">
            <div className="container">
              <div className="page-banner-entry text-center"></div>
            </div>
          </div>
          <div className="content-block" id="content-area">
            <div className="section-area section-sp1">
              <div className="container">
                <div className="text-center">
                  <div className="feature-bx2 m-t150">
                    <h3 style={{ color: "#171717" }}>Contact</h3>
                  </div>
                </div>
                <div className="heading-bx m-sm-t20 m-b30"></div>

                <div className="row">
                  <div
                    className="col-lg-4 col-md-4 col-sm-12 wow fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-box p-20 feature-container feature-bx4">
                      <h5 className="title">
                        <i className="ti-mobile"></i> Phone
                      </h5>
                      <Link
                        className="text-left"
                        onClick={() => window.open("tel://+91-9970006545")}
                      >
                        <p>+91 99700 06545</p>
                      </Link>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-4 col-sm-12 wow fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-box p-20 feature-container feature-bx4">
                      <h5 className="title">
                        <i className="ti-email"></i> Email
                      </h5>
                      <Link
                        className="text-left"
                        onClick={() =>
                          window.open("mailto: info@sameergroup.co.in")
                        }
                      >
                        <p>marketing@sameergroup.co.in</p>
                      </Link>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-4 col-sm-12 wow fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    <div className="icon-box p-20 feature-container feature-bx4">
                      <h5 className="title">
                        <i className="ti-location-pin"></i> Location
                      </h5>
                      <Link
                        className="text-left"
                        onClick={() =>
                          window.open("https://g.page/SAMEERGROUPINDIA?share")
                        }
                      >
                        <p>
                          302, Kalpavriksha, 100, Riverside D.P. Road, Karve
                          Nagar, Pune 411052. INDIA.
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="section-area "></div>

            <div className="section-area section-sp4">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.716056946426!2d73.82941685078231!3d18.49651647467444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bff19f60df0b%3A0x8175b32651c6845f!2sSAMEER%20GROUP!5e0!3m2!1sen!2sin!4v1665000759884!5m2!1sen!2sin" height="650" width="550" className="align-self-stretch" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    </div>
                  </div>
                  <div
                    className="col-lg-6 col-md-6 wow fadeIn"
                    data-wow-delay="0.4s"
                  >
                    <form
                      id="form"
                      action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSdOOxYXgVaowL2X2-Z8BWWnQ_nrDjHY_r2ndyJrEdWZ8QYPXg/formResponse"
                      method="post"
                      target="hidden_iframe"
                      className="contact-bx ajax-form"
                    >
                      <div className="ajax-message"></div>
                      <div className="heading-bx">
                        <h2 className="title-head m-b0">Enquiry</h2>
                      </div>
                      <div className="row placeani">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <div className="input-group">
                              <input
                                name="entry.165159204"
                                id="name"
                                data-name="Name"
                                type="text"
                                required
                                className="form-control valid-character"
                                placeholder="Your Name"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <div className="input-group">
                              <input
                                name="entry.33520713"
                                id="email"
                                data-name="Email"
                                type="email"
                                className="form-control"
                                required
                                placeholder="Your Email "
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <div className="input-group">
                              <input
                                name="entry.204406209"
                                id="phone"
                                data-name="Phone"
                                type="text"
                                required
                                className="form-control int-value"
                                placeholder="Your Phone"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <div className="input-group">
                              <textarea
                                name="entry.70413042"
                                id="message"
                                data-name="Message"
                                rows="4"
                                className="form-control"
                                placeholder="Type Message"
                                required
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <button
                            name="submit"
                            type="submit"
                            value="Submit"
                            className="btn-primary button-lg radius-md"
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default Contact1;
