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
													<h2 className="post-title">Privacy Policy</h2>
												</div>
												<div className="ttr-post-text">
													<p>Sameer Electro Systems respects your privacy. This Privacy Policy provides succinctly the manner your data is collected. You are advised to please read the Privacy Policy carefully. By accessing the services provided by Sameer Electro Systems you agree to the collection and use of your data by Sameer Electro Systems in the manner provided in this Privacy Policy.</p>
													<p>If you have questions or concerns regarding this statement, you should contact Sameer Electro Systems Customer Support Desk at info@sameergroup.co.in or call on +91 99700 06545.</p>
													<p>The Policy does not apply to the procedures and practices followed by entities that are not managed, owned or controlled by Sameer Electro Systems or to the people that are not engaged, employed or managed by Sameer Group  Media.</p>
													<h5>WHAT INFORMATION IS, OR MAY BE, COLLECTED FROM YOU?</h5>
													<p>We will automatically receive and collect certain anonymous information in standard usage logs through our Web server, including computer-identification information obtained from "cookies," sent to your browser from:</p>


													<ul>
														<li>Web server cookie stored on your hard drive. </li>
														<li>An IP address, assigned to the computer which you use. </li>
														<li>The domain server through which you access our service.</li>
														<li>The type of computer you're using.</li>
														<li>The type of web browser you're using</li>
													</ul>

													<h5>Cookies</h5>

													<p>A cookie is a small text file that is stored on a user's computer for record-keeping purposes. We use cookies on this site. We do link the information we store in cookies to any personally identifiable information you submit while on our site.

We use both session ID cookies and persistent cookies. We use session cookies to make it easier and secured for you to navigate our site. A session ID cookie expires when you close you browser. A persistent cookie remains on your hard drive for an extended period of time. You can remove persistent cookies by following directions provided in your Internet browser's "help" file. Reference for cookies can be found at http://www.cookiecentral.com/.

We use session cookies to store the secure session and browsing preferences of the user. We set a persistent cookie to store your username and interests so you don't have to enter it more than once. Persistent cookies also enable us to track and target the interests of our users to enhance the experience on our site.

If you reject cookies, you may still use our site, but your ability to use some areas of our site, such as contests or surveys, will be limited. Cookies are used in shopping cart to enable enhanced security and ensuring there is no URL based spamming.

Some of our business partners (e.g., advertisers) set cookies while delivering banners on our site. We have no access to or control over these cookies.

This privacy statement covers the use of cookies by Sameer Group.com only and does not cover the use of cookies by any advertisers.

We do use cookies on point of collection pages of email address but we do not use them in emails.</p>

                                                 <h5>WHAT SECURITY PROCEDURES ARE IN PLACE TO PROTECT INFORMATION FROM LOSS, MISUSE OR ALTERATION?</h5>

												 <p>To protect against the loss, misuse and alteration of the information under our control, we have in place appropriate physical, electronic and managerial procedures. For example, our servers are accessible only to authorized personnel and that your information is shared with respective personnel on need to know basis to complete the transaction and to provide the services requested by you.

Although we will endeavor to safeguard the confidentiality of your personally identifiable information, transmissions made by means of the Internet cannot be made absolutely secure. By using this site, you agree that we will have no liability for disclosure of your information due to errors in transmission or unauthorized acts of third parties.

We follow generally accepted industry standards to protect the personal information and email addresses submitted to us, both during transmission and once we receive it. No method of transmission over the Internet, or method of electronic storage, is 100% secure, however. Therefore, while we strive to use commercially acceptable means to protect your personal information and email address, we cannot guarantee its absolute security.

If you have any questions about security on our Web site, you can send email us at info@sameergroup.co.in</p>


                                                  <h5>POLICY UPDATES</h5>

												  <p>We reserve the right to change or update this policy at any time by placing a prominent notice on our site. Such changes shall be effective immediately upon posting to this site.</p>

												  <p>If we decide to change our privacy policy, we will post those changes to this privacy statement, the homepage, and other places we deem appropriate so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we disclose it. We reserve the right to modify this privacy statement at any time, so please review it frequently. If we make material changes to this policy, we will notify you here, or by means of a notice on our homepage.</p>

                                                  <p>If we decide to make changes in our email practices, we will post those changes to this privacy policy, the homepage, and other places we deem appropriate so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we disclose it. If we decide to change our email practices, we will post those changes to this privacy statement, the homepage, and other places we deem appropriate so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we disclose it.</p>
												
													<p>You are can offer your views, suggestions, if any, by submitting the filled in feedback form online.</p>
													

			

													

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