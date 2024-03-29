import React from 'react';
import Typed from 'react-typed';

function HeroSection() {
	return (
		<div id="hero" className="flex items-center justify-center flex-col py-20">
			<div className="text-center w-full flex items-center justify-center flex-col">
				<h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-gray-600 dark:text-gray-300 font-semibold">
					Hi, This is 
					<Typed className="text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 dark:text-indigo-500 font-semibold" strings={[' Sunny Kumar Shah']} typeSpeed={180} backSpeed={160} loop></Typed>
				</h1>
				<p className="text-center text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300 ">
					Front End Developer. 
					<br />
					Excited to collaborate with a dynamic team and people that embraces creativity, and ongoing learning.{' '}
				</p>
				<a
					href="#works"
					className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md "
				>
					See Works
				</a>
			</div>
		</div>
	);
}

export default HeroSection;
