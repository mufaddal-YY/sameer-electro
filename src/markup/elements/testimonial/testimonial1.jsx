import React, { Component } from 'react';
import Slider from "react-slick"; 

const content = [

	{

		name: "Mr. Sanjay Tale",
		post: "Plant Head (SOGEFI MN FILTRATION INDIA PVT LTD.)",
		review: "It was a pleasure to work with you and your team on this project and we would look forward to continue this association further.",
	},
	{

		name: "Mark Associates",
		post: "",
		review: "Your team has successfully completed the Factory Electrification work alongwith street lighting, panel installation, shop floor lighting etc. for our client M/s. Omkar Engineering Works Pvt. Ltd. It was a pleasure to work with you and your team on this project and we would look forward to continue this association further. We would recommend you and your crew to anyone who is looking for a industrial electrical contractor.",
	},
	{

		name: "Mr. Vinesh punjabi",
		post: "General Manager (DELFII{GEN INDIA PVT. LTD.)",
		review: "We are happy to inform you that you and your team have completed our factory electrical wiring/panel installation and shop floor lighting job very well in time and to our satisfaction. The total contract was value of 7 million INR plus. We would definitely continue to work together in future also",
	},
	{

		name: "D.S.KULKARNI DEVELOPERS LTD.",
		post: "",
		review: "M/S. Sameer Engineers Have Successfully Completed The 22 Kv Bay And Gantry Work Alongwith 22 Kv Double Ciruit Overhead And Underground Ht Line From 22 Kv Kirkitwadi Sub Station With 6 Nos. Of 22 Kv X 630 Kva And 4 Nos. Of 22 Kvx500 Kva Transformer Substations For Our Project Dsk Vishwa At Dhayari Pun Under 15% Supervision Scheme As Per Msedcl. The System Is Commissioned And Running Properly Till Date.",

	},
	{
		
		name: "Ajay Borawake",
		post: "(Operations - Head) Gearspect (I) Pvt. Ltd., Pune",
		review: "Your team has successfully completed the CCTV, Biometric System and Access Control work to our satisfaction. We look forward to continue this association further.",
        
	},
	{
		name: "Arun Kudale",
		post: "(MD) Kudale Instruments Pvt. Ltd., Pune.",
		review: "Sameer Group has a quick response to queries. The Group is reliable & trustworthy. I would certainly recommend the Group for a wide spectrum of Electrical Services & Solutions!",
        
	},
	{
		name: "Ajay Borawake",
		post: "(Operations - Head) Gearspect (I) Pvt. Ltd., Pune",
		review: "Sameer Group of Companies has a responsive attitude, as also the ability & capacity to deliver professionally and on time! Definitely recommended!",
        
	},
	{
		name: "Nilesh Pendharkar",
		post: "(Director) Thermotouch Industries, Pune",
		review: "Coordination and responsibility of work at Sameer Group is highly appreciable. We recommend Sameer Group for their very customer-friendly attitude and excellent service.",
        
	},

]



class Testimonial2 extends Component{
	render(){
		
		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 1,
					}
				},
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 1,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		};
		
		return(
			<>
				

				<Slider {...settings} className="testimonial-carousel shadow style3 owl-btn-center-lr owl-btn-1  arrow">
				{content.map((item, id) => (
					<div className="slider-item ">
						<div className="testimonial-bx  p-40 style2">
							<div className="testimonial-content">
								<div className="testimonial-rating"> 
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
								</div>
								<p>{item.review}</p>
							</div>
							<div className="client-info">
								
								<div className='text-left'>
									<h6 className="name">{item.name} </h6>
									<p>{item.post}</p>
								</div>
							</div>
						</div>
					</div>
				

				))}

					
					
				</Slider>
			</>
		);
	}
}

export default Testimonial2;