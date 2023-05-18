import React from 'react';
import myImg from '../images/hero.jpg';
import SectionTitle from './SectionTitle';

function About() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
			<div className="w-full md:w-6/12">
				<SectionTitle>About Me</SectionTitle>
				<p className="text-md text-gray-600 dark:text-gray-300">
					Hi Sunny here,
					Experience in collaborating on freelance projects & technical writing, my goal is to leverage my skills in HTML, CSS, & JS to develop & enhance user experiences.
				</p>
				<a
					href="mailto:webcifar.com"
					className="block mt-3 text-md md:text-lg text-gray-700 dark:text-gray-300 underline decoration-1 hover:text-indigo-500 dark:hover:text-indigo-500"
				>
					sunnykrshah201@gmail.com
				</a>
			</div>

			<img
				src={myImg}
				alt="Sunny"
				className="w-full md:w-6/12 rounded-lg object-cover"
			/>
		</div>
	);
}

export default About;
