import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Accordion, Card } from "react-bootstrap";

// Layout
import Header1 from "../../layout/header/header3";
import Footer from "../../layout/footer/footer2";

// Elements
import ScrollToTop from "../../elements/ScrollToTop";


class Faq extends Component {
  render() {
    return (
      <>
        <Header1 />
        <ScrollToTop />

        <div className="page-content bg-white">
          <div className="page-banner page-banner-sm bg-light bg-about">
            <div className="container">
              <div className="page-banner-entry text-center"></div>
            </div>
          </div>
          <div className="content-block" id="content-area">
            <div className="section-area section-sp4 team-page bg-gray">
              <div className="container">
                <div className="text-center">
                  <div className="feature-bx2 m-t150">
                    <h3 style={{ color: "#171717" }}>Careers</h3>
                  </div>
                </div>
                <div className="heading-bx text-center">
                  <p className="m-b0 text-left">
                    "Coming Together is the beginning , Keeping Together is
                    progress, Working Together is Success.!!!! " – Henry Ford. <br />
                    At Sameer Group, the belief is that the success of employees
                    is the success of the organization. Each employee at Sameer
                    Group gets an opportunity for growth through sufficient
                    exposure to various projects, systems and technologies.
                    There are enough success stories of Team Sameer, where the
                    team has delivered to the utmost satisfaction of the
                    customers. For the expansions planned at the Group,
                    experienced, enthusiastic and self-motivated professionals
                    are sought for the following posts:
                  </p>
                </div>
                <div className="row text-center">
                  <div className="col-lg col-md col-sm-12">
                    <Accordion
                      className="ttr-accordion faq-bx"
                      defaultActiveKey="0"
                    >
                      <Card>
                        <Accordion.Header as={Card.Header} eventKey="0">
                          <Link to="#">
                            <strong>ELECTRICAL PROJECTS:</strong>
                          </Link>
                        </Accordion.Header>
                        <Accordion.Body eventKey="0">
                          <Card.Body className="text-left">
                            1] <strong>Senior Engineer [M]:</strong> Diploma /
                            Degree in Electrical Engineering, with minimum 7
                            years' experience in execution of large scale
                            electrical projects.
                            <br />
                            <strong>2] Junior Engineer (Projects) [M] :</strong>
                            Diploma / Degree in Electrical Engineering, with
                            minimum 3 years' experience in execution of large
                            scale electrical projects.
                            <br />
                            <strong>
                              3] Design & Estimation Engineer [M/F] :
                            </strong>
                            Diploma / Degree in Electrical Engineering, with
                            minimum 4 years' experience in design, tendering and
                            estimation of electrical projects.
                            <br />
                            <strong>4] Marketing Executives [M/F]:</strong>
                            Diploma / Degree in Electrical / Any Other field
                            with minimum 3 years' experience in solution
                            marketing in the electrical industry. The candidate
                            must have a good, pleasing personality with
                            excellent command over Marathi, Hindi and English.
                          </Card.Body>
                        </Accordion.Body>
                      </Card>
                    </Accordion>
                  </div>
                </div>
                <div className="col-md-12 text-center">
                  <Link
                    className="btn-primary  white outline button-xl "
                    to={"/contact"}
                  >
                    Apply Now <i className="ti-arrow-right"></i>
                  </Link>
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

export default Faq;
