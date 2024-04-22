import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import {Link as ScrollTo} from 'react-scroll';

// Layout
import Header from '../../layout/header/header3';
import Footer from '../../layout/footer/footer2';

// Elements

import ScrollToTop from "../../elements/ScrollToTop";

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
													<h4 className="post-title">Terms & Conditions.</h4>
												</div>
												<div className="ttr-post-text">
													<p>1. By virtue of signature, the Customer hereby irrevocably authorizes Sameer Group (“the Company”) and the Company hereby undertakes to create, design and host website (“the Service”) for and on behalf of the Customer in accordance with the instructions and order placed by the Customer.</p>
													
													<p>2. The Company will provide the Service based on the information and instructions provided by the Customer.</p>
													
													<p>3. Sameer Group shall commence its performance of this Contract only after realization of the cheque / Demand Draft provided towards the consideration. In the event of dishonor of cheque / Demand Draft, Sameer Group reserves the right to charge the Customer towards bank charges and administrative charges.</p>
													<p>4. The Customer authorizes the Company to contact it, from time to time, by telephone or otherwise so as to verify its information in Company’s database and also for obtaining additional information relating to its products / services etc.</p>
													<p>5. The Customer also authorizes the Company to keep it informed periodically about its business including new / existing products through telephone, email, SMS etc.</p>
													<p>6. Sameer Group shall not be liable to the Customer save as expressly provided for in these terms and conditions and shall have no other obligations, duties or liabilities whatsoever in contract, tort or otherwise. To the maximum extent permitted by law, Sameer Group hereby disclaims all warranties, terms and conditions with regard to the information, products and services including all implied warranties, terms and conditions by statute, collaterally or otherwise of satisfactory quality, fitness for a particular purpose and title. Sameer Group shall in no event, be liable for any loss of profit, loss of opportunities, loss of business, loss of revenue, indirect, incidental, special or consequential loss arising out of, or in any way connected with the use of the website or with the delay or inability to provide the contracted service. In no event will Sameer Group liability in connection with the services, any software, application, utility Etc… provided hereunder, or this agreement, whether caused by failure to deliver, non-performance, defects, breach of warranty or otherwise, exceed the aggregate amount paid by the Customer as consideration for this contract.</p>
                                                     <p>7. Disclaimer

														 <ul>
															 <li> Sameer Group shall not be responsible for any errors in design due to incorrect details furnished by the Customer.</li>
															 <li>The sales / authorized representative does not have the authority either by words, written or oral or by conduct to do any of the following acts and such acts if done shall not bind Sameer Group in the execution of the contract. The Customer shall in this regard solicit the advice in writing of the Sameer Group personnel not below the rank of a branch.</li>
														 </ul>
													 </p>
													 <p>8. Sameer Group reserves the right to terminate the Contract at its option.</p>
													 <p>9. The Customer shall indemnify and keep Sameer Group and its Owners and officers indemnified in respect of all expenses, loss or damages (pecuniary or otherwise) which may be suffered by it / them against any claims made by third party arising out of providing the service for any reason including infringement of any Intellectual Property Rights.</p>
													 <p>10. Sameer Group decision on the scope of the contract and interpretation thereof shall be final and binding on the Customer.</p>
                                                     <p>11. Any dispute arising out of this Contract between the Company and the Customers, Vendors, Suppliers, Service Providers or Freelancers shall be subject to exclusive jurisdiction of Courts at Pune only.</p>
													 <p>12. Force majeure – Sameer Group shall not be liable to Customers, Vendors, Suppliers, Service Providers or Freelancers in respect of any delay in performance of this Contract or breach of terms and conditions due to any event or circumstances beyond Sameer Group reasonable control.</p>


													
													

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