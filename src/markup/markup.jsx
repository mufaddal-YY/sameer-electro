import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom' 

// Home Pages
import Index from './pages/home/index';

// About Pages
import AboutUs2 from './pages/about/the-group';

import Services from './pages/services/services';
import Projects from './pages/services/projects';

// Faq Pages
import Careers from './pages/faq/careers';

// Contact Pages
import Contact1 from './pages/contact/contact';

// Error Pages
import Error404 from './pages/error/error-404';

// Blog Pages
import Csr from './pages/blog/csr';
import Safety from './pages/blog/quality-safety';
import Privacy from './pages/blog/privacy';
import TermsConditions from './pages/blog/terms-and-conditions';

const Markup = () => {
	
		return(
			<>
				<BrowserRouter>

					<Routes>
					
						{/* Home Pages */}
						<Route path='/' exact element={<Index/>} />
						{/* About Pages */}
						<Route path='/the-group' exact element={<AboutUs2/>} />
						<Route path='/services' exact element={<Services/>} />
						<Route path='/projects' exact element={<Projects/>} />
					
						{/* Faq Pages */}
						<Route path='/careers' exact element={<Careers/>} />
						
						{/* Contact Pages */}
						<Route path='/contact' exact element={<Contact1/>} />
						
						{/* Error Pages */}
						<Route path='/error-404' exact element={<Error404/>} />
						
						{/* Blog Pages */}
						<Route path='/privacy' element={<Privacy/>} />
						<Route path='/terms-and-conditions' element={<TermsConditions/>} />
						
						<Route path='/quality-safety' element={<Safety/>} />
						<Route path='/csr' element={<Csr/>} />
						
						
						
					</Routes>
				</BrowserRouter>
				
				{/* <BackToTop /> */}
				
			</>
		);
	}

export default Markup;