import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import {Link as ScrollTo} from 'react-scroll';

// Layout
import Header from '../../layout/header/header3';
import Footer from '../../layout/footer/footer2';

// Elements

import ScrollToTop from "../../elements/ScrollToTop";
import ISO from "../../../images/iso_certificate.jpeg";

// Images

import pattern1 from '../../../images/pattern/pt1.png';


class BlogDetailsSidebar extends Component {
	
	render(){
		return (
			<>
				<Header />
				<ScrollToTop/>
				
				<div className="page-content bg-white">
				    
					
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp2 bg-gray" style={{backgroundImage: "url("+pattern1+")"}}>
							<div className="container">
								<div className="row">
									<div className="col-md-12 col-lg-12 col-xl-12 m-md-b50">
										<div className="blog-lg blog-single">
											
											<div className="info-bx">
												<div className="media-box">
													
												</div>
												<div className="ttr-post-title">
													<h2 className="post-title">Safety Policy</h2> <hr />
												</div>
												<div className="ttr-post-text">
<p>The Sameer Group of Companies is committed to work towards continued Safety of Employees and Customers alike. This is aimed to be achieved through continued & proper education on Safety Systems and training on Safety Procedures to employees. Customer Safety is aimed to be achieved through this education & training of employees. Sameer Group aims to maintain and repeat its track record of 365 accident-free days, year on year!</p>													
													

                                                 

												  
												</div>

												
											</div>
										</div>
										
										
										
										
										
									</div>


                                    <div className="col-md-12 col-lg-12 col-xl-12 m-md-b50">
										<div className="blog-lg blog-single">
											
											<div className="info-bx">
												<div className="media-box">
													
												</div>
												<div className="ttr-post-title">
													<h2 className="post-title">Quality Policy</h2> <hr />
												</div>
												<div className="ttr-post-text">
                                                    <p>"At Sameer Group the work philosophy is that "Success is nothing special, but satisfaction in doing a quality job that achieves complete customer satisfaction". Sameer Group is committed to provide best quality & safe electrical solutions in strict time frame to achieve utmost customer satisfaction. To achieve this, the Group will abide by the Quality Management Systems through continual improvement programmes and proper training to staff."</p>

                                                    <p> <strong>– Sameer Deodhar (Managing Director)</strong> </p>
													

                                                 

												  
												</div>

												
											</div>
										</div>
										
										
										
										
										
									</div>

                                    {/* <div className="col-md-12 col-lg-12 col-xl-12 m-md-b50">
										<div className="blog-lg blog-single">
											
											<div className="info-bx">
												<div className="media-box">
													
												</div>
												<div className="ttr-post-title">
													<h2 className="post-title">ISO Certification</h2> <hr />
												</div>
                                                <div className="row">
                                                    <div className="col-md-3">
                                                    <img width={"100%"} src={ISO} alt="" />
                                                    </div>

                                                    <div className="col-md-9">
                                                        <p>Sameer Group companies are ISO Certified for their quality management systems. The Group has recently applied for upgradation of this certification and the resultant certificate is due very soon. The Certification ensures that the Group companies are following world class quality management systems and are therefore no less than any other in the field. This would also mean gearing up to meet global challenges and the Group certainly is looking forward to do so.</p>

                                                    </div>
                                                </div>
												<div className="ttr-post-text">

                                                   
                                                   
													

                                                 

												  
												</div>

												
											</div>
										</div>
										
										
										
										
										
									</div> */}
													
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