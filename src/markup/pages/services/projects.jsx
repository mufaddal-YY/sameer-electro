import React, { Component } from "react";

import Testimonial from "../../elements/testimonial/testimonial1";
// Layout
import Header from "../../layout/header/header3";
import Footer from "../../layout/footer/footer2";

// Elements
import ScrollToTop from "../../elements/ScrollToTop";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

// Images

// Delfingen
import P1 from "./../../../images/projects/delfingen/p1.jpg"
import P2 from "./../../../images/projects/delfingen/p2.jpg"
import P3 from "./../../../images/projects/delfingen/p3.jpg"
import P4 from "./../../../images/projects/delfingen/p4.jpg"

// Fibro
import P5 from "./../../../images/projects/fibro/p5.jpg"
import P6 from "./../../../images/projects/fibro/p6.jpg"
import P7 from "./../../../images/projects/fibro/p7.jpg"
import P8 from "./../../../images/projects/fibro/p8.jpg"

// SKS Fasteners
import P9 from  "./../../../images/projects/sks/p9.jpg"
import P10 from "./../../../images/projects/sks/p10.jpg"
import P11 from "./../../../images/projects/sks/p11.jpg"

// Forbes
import P12 from  "./../../../images/projects/forbes/p12.jpg"
import P13 from "./../../../images/projects/forbes/p13.jpg"
import P14 from "./../../../images/projects/forbes/p14.jpg"
import P15 from "./../../../images/projects/forbes/p15.jpg"

// Skoda
import P16 from "./../../../images/projects/skoda/p16.jpg"
import P17 from "./../../../images/projects/skoda/p17.jpg"
import P18 from "./../../../images/projects/skoda/p18.jpg"
import P19 from "./../../../images/projects/skoda/p19.jpg"

// Varian
import P20 from "./../../../images/projects/varian/p20.jpg"
import P21 from "./../../../images/projects/varian/p21.jpg"
import P22 from "./../../../images/projects/varian/p22.jpg"

// Rolls Royce
import P23 from "./../../../images/projects/rollsroyce/p23.jpg"

// Autodesk
import P24 from "./../../../images/projects/autodesk/p24.jpg"
import P25 from "./../../../images/projects/autodesk/p25.jpg"
import P26 from "./../../../images/projects/autodesk/p26.jpg"
import P27 from "./../../../images/projects/autodesk/p27.jpg"

// Hilti
import P28 from "./../../../images/projects/hilti/p28.jpg"
import P29 from "./../../../images/projects/hilti/p29.jpg"
import P30 from "./../../../images/projects/hilti/p30.jpg"
import P31 from "./../../../images/projects/hilti/p31.jpg"

// Fortaleza
import P32 from "./../../../images/projects/fortaleza/p32.jpg"
import P33 from "./../../../images/projects/fortaleza/p33.jpg"
import P34 from "./../../../images/projects/fortaleza/p34.jpg"

// Abhiruchi
import P35 from "./../../../images/projects/abhiruchi/p35.jpg"
import P36 from "./../../../images/projects/abhiruchi/p36.jpg"
import P37 from "./../../../images/projects/abhiruchi/p37.jpg"
import P38 from "./../../../images/projects/abhiruchi/p38.jpg"

// Leisure
import P39 from "./../../../images/projects/leisure/p39.jpg"
import P40 from "./../../../images/projects/leisure/p40.jpg"

// Prestige
import P41 from "./../../../images/projects/prestige/p41.jpg"
import P42 from "./../../../images/projects/prestige/p42.jpg"

// Bajaj
import P43 from "./../../../images/projects/bajaj/p43.jpg"
import P44 from "./../../../images/projects/bajaj/p44.jpg"
import P45 from "./../../../images/projects/bajaj/p45.jpg"
import P46 from "./../../../images/projects/bajaj/p46.jpg"

// Janseva
import P47 from "./../../../images/projects/janseva/p47.jpg"
import P48 from "./../../../images/projects/janseva/p48.jpg"
import P49 from "./../../../images/projects/janseva/p49.jpg"
import P50 from "./../../../images/projects/janseva/p50.jpg"

const content = [
  {
    title: "INDUSTRIAL",
    sector: [
      {
        title: "Delfingen India Pvt. Ltd Pune.",
        thumb: [P1, P2, P3, P4],
      },
      {
        title: "Fibro India",
        thumb: [P5, P6, P7, P8],
      },
      {
        title:
          "SKS Fasteners ltd-chakan-750KVA Transformer Sub-Station and HT-Line work.",
        thumb: [P9, P10, P11],
      },
      {
        title: "Forbes Marshall",
        thumb: [P12, P13, P14, P15],
      },
    ],
  },

  {
    title: "COMMERCIAL",
    sector: [
      {
        title: "Skoda Auto Volkswagen India Pvt.Ltd. Chakan Pune.",
        thumb: [P16, P17, P18, P19],
      },
      {
        title: "Varian Medical Systems Pvt. Ltd. Hadapsar, Pune.",
        thumb: [P20, P21, P22],
      },
      {
        title: "Rolls Royce",
        thumb: [P23],
      },
      {
        title: "Autodesk",
        thumb: [P24, P25, P26, P27],
      },
      {
        title: "Hilti",
        thumb: [P31, P29, P30, P28],
      },
    ],
  },

  {
    title: "INFRA DEVELOPMENT",
    sector: [
      {

        title: "Fortaleza 10 MVA sub station at Kalyani Nagar, Pune",
        thumb: [P32, P33, P34],

      },
      {
        
        title: "Abhiruchi Mall",
        thumb: [P35, P36, P37, P38],

      },
      {
        title: "Leisure Town - Pune",
        thumb: [P39, P40],
      },
      {
        title: "Prestige Avenue, Pashan-Baner Link Road, Pune",
        thumb: [P41, P42],
      },
    ],
  },
  {
    title: "Banking",
    sector: [
      {
        title:
          "Technology Innovation Center for Bajaj Finserv at Viman Nagar Pune",
        thumb: [P43, P44, P45, P46],
      },
      {
        title: "Janaseva Bank, Hadapsar Pune",
        thumb: [P47, P48, P49, P50],
      },
      
    ],
  },
];

class About2 extends Component {
  render() {
    return (
      <>
        <Header />
        <ScrollToTop />

        <div className="page-content bg-white ">
          <div className="page-banner page-banner-sm bg-light bg-about">
            <div className="container">
              <div className="page-banner-entry text-center"></div>
            </div>
          </div>

          <div className="content-block" id="content-area">
            <div className="section-area section-sp4 bg-white">
              <div className="container">
                <div className="text-center">
                  <div className="feature-bx2 m-t150">
                    <h3 style={{ color: "#171717" }}>Project Gallery</h3>
                  </div>
                </div>

                {content.map((item, index) => (
                  <div className="section-area section-sp4 bg-fix">
                    <div className="container" key={index}>
                      <h3 className="title-head text-center m-b50">
                        <strong>{item.title}</strong>
                      </h3>

                      {item.sector.map((subitem, subindex) => (
                        <div className="feature-bx2" key={subindex}>
                          <h5 className="title-head text-left">
                            {subitem.title}
                          </h5>
                          <hr />
                          <div className="row m-b30 " >
                            {subitem.thumb.map((thumb, thumbindex) => (
                              <div
                                className="col-lg-3 wow fadeInUp"
                                data-wow-delay="0.2s"
                                key={thumbindex}
                              >
                                <SimpleReactLightbox>
                                  <SRLWrapper>
                                    <div className="magnific-image row">
                                      <img width={"100%"} height={"80px"} src={thumb} alt="" />
                                    </div>
                                  </SRLWrapper>
                                </SimpleReactLightbox>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="section-sp4 section-area bg-white">
              <div className="container">
                <h2 className="title-head text-left">
                  <strong>Ongoing Projects</strong>
                </h2>
                <hr />
                <div className="row">
                  <div className="col-md">
                    <div className="">
                      <ul>
                        <li>Industrial Projects: 03 Nos</li>
                        <li>IT & ITES: 01 Nos</li>
                        <li>Commercial Infrastructure: 02 Nos</li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md">
                    <div className="">
                      <ul>
                        <li>Township Infra: 02 Nos</li>
                        <li>Institutional Projects: 01 Nos</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-area section-sp4 ovpr-dark bg-white">
              <div className="container">
                <Testimonial />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default About2;
