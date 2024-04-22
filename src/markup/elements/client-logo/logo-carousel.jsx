import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

// Images
import angular from "../../../images/tech-stack/bajaj.png";
import azure from "../../../images/tech-stack/bidve.png";
import aws from "../../../images/tech-stack/cipla.png";
import python from "../../../images/tech-stack/fibro.png";
import google from "../../../images/tech-stack/forbes-marshall.png";
import django from "../../../images/tech-stack/gera.png";
import flask from "../../../images/tech-stack/pride-purple.png";
import jenkins from "../../../images/tech-stack/rolls-royce.png";
import pytorch from "../../../images/tech-stack/skoda.png";
import sagemaker from "../../../images/tech-stack/space-matrix.png";

const content = [
	{
		thumb: angular
	},
	{
		thumb: azure
	},
	{
		thumb: aws
	},
	{
		thumb: python
	},
	{
		thumb: django
	},
	{
		thumb: google
	},
	{
		thumb: flask
	},
	{
		thumb: jenkins
	},
	{
		thumb: pytorch
	},
	{
		thumb: sagemaker
	},

]

class LogoCarousel extends Component{
	
	render(){
		
		const settings = {
			dots: false,
      infinite: true,
      loop: true,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 4,
					}
				},
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 4,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 360,
					settings: {
						slidesToShow: 2,
					}
				}
			]
		};
		
		return(
			<>
				<Slider {...settings} className="testimonial-carousel owl-btn-center-lr owl-btn-1 arrow-none ">
					{content.map((item) => (

					
					
					<div className="slider-item">
						
							<Link className='' to="#"><img loading="lazy" src={item.thumb} width="150px" alt=""/></Link>
							
						
					</div>
					))}
				</Slider >
			</>
		);
	}
}

export default LogoCarousel;