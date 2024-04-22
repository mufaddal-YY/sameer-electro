import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollTo } from "react-scroll";

// Layout
import Header from "../../layout/header/header3";
import Footer from "../../layout/footer/footer2";

// Elements

import ScrollToTop from "../../elements/ScrollToTop";
import ISO from "../../../images/iso_certificate.jpeg";

// Images

import pattern1 from "../../../images/pattern/pt1.png";

class BlogDetailsSidebar extends Component {
  render() {
    return (
      <>
        <Header />
        <ScrollToTop />

        <div className="page-content bg-white">
          <div className="content-block" id="content-area">
            <div
              className="section-area section-sp2 bg-gray"
              style={{ backgroundImage: "url(" + pattern1 + ")" }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-12 col-lg-12 col-xl-12 m-md-b50">
                    <div className="blog-lg blog-single">
                      <div className="info-bx">
                        <div className="media-box"></div>
                        <div className="ttr-post-title">
                          <h3 className="post-title">
                            EdgeuHope- open up to Life!!
                          </h3>
                          <hr />
                        </div>
                        <div className="ttr-post-text">
                          <p>
                          EDGEUHOPE IS A NOT FOR PROFIT COMPANY- A CSR INITIATIVE BY SAMEER
GROUP to impart understanding of emotional maturity among young generation and to help them
lead a confident, happy and successful life inspite of any odds one may face.
                          </p>

                          <h5>OUR JOURNEY</h5>

                          <p>With the aim to help students live a stress free and fulfilled life, EdgeuHope, the brain child of
Sameer Deodhar took shape. He strived to understand why students forgot to live and enjoy their
childhood. This concept came about as a system of giving children an opportunity to live a
BALANCED and FULFILLED life. Mrs. Vrunda Deodhar and Mr. Vaibhav Deo joined hands
with Sameer In this imitative to make this world a better place.</p>

<p>Stress in an inevitable and unavoidable part of life, but how we deal with it is purely in our control.
Unfortunately children do not understand this, and are sometimes ill equipped to handle challenges
of life. This may lead to choosing choices which may have irreversible consequences.</p>

<p>A child needs to grow in different areas of his/her life which play a vital role in his/her overall
development.
<ul>
    <li>Personality</li>
    <li>Emotions</li>
    <li>Academics</li>
    <li>Social</li>
    <li>Physical</li>
    </ul>  </p>

    <p>Each of these is equally essential and has equal weight age in the child’s life. It would be unfair to
focus only on one without giving importance to the other. Apart from overall development we
want children to achieve:
<ul>
    <li>Fulfilled and happy lives</li>
    <li>More fulfilled relationships</li>
    <li>Positive Outlook towards life</li>
    <li>Healthy Emotional Expression</li>
    <li>Academic excellence- Attention, concentration</li>
    <li>Better Stress Management</li>
    <li>JUST BE HAPPY</li>
    </ul></p>

    <h6>WHY EdgeuHope:</h6>
    <p>EdgeuHope is a platform for:
        <ul>
            <li>Free emotional expression</li>
            <li>Stress release</li>
            <li>A space of NON JUDGEMENT</li>
            <li>A SAFE SPACE for children and parents</li>
            <li>MINDFULNESS zone</li>
            <li>To feel happy and positive</li>
        </ul>
    </p>

    <h6>TYPE OF ISSUES HANDLED</h6>
    <p>
        <ul>
            <li>Depression </li>
            <li>Anxiety</li>
            <li>Academic pressures</li>
            <li>Behavioural Issues</li>
            <li>Self Esteem</li>
            <li>Confidence</li>
            <li>Parent- Child Relationships</li>
            <li>Substance Abuse</li>
        </ul>
    </p>

    <h6>OUR ACTIVITIES: </h6>
<p> Drum Circle- Simply put, a ‘Drum Circle’ is a group of people playing hand drums or percussion
in a circle. It is considered as a therapeutic channel , helping people release stress. It is also used
with children to build creativity, expression, and communication skills just to name a few.
Yoga and Meditation- one of the most ancient practices in India to build a healthy internal and
external personality of a person, Yoga and Meditation works wonders.</p>

<p>Group and Individual Counseling – Apart from these, we provide customized groups for specific
need, which works as a support system for children and parents. We also provide individual
sessions if the need arises for further customization.</p>

<h6>DONATE TO US </h6>
<p>It feels wonderful to be a part of a cause which could bring a positive transformation in an
individual’s life. A cause that would build positive family relations, successful adults and happy
families all around.
If our though resonates with you, feel free to donate.</p>
                        </div>
                      </div>
                    </div>
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

export default BlogDetailsSidebar;
