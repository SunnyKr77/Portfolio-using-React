import React from 'react';
import { MdWeb } from 'react-icons/md';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

export default [
	{
		title: 'Accessibilty',
		icon: <MdWeb className="w-full h-full" />,
		description:
			'Try to ensures people with different abilities can access and understand content on internet.',
	},
	{
		title: 'UI Design',
		icon: <FaHandHoldingHeart className="w-full h-full" />,
		description:
			'Takes care of friendly interaction between users and web page. And focus on detailed styling',
	},
	{
		title: 'Performance',
		icon: <VscCode className="w-full h-full" />,
		description:
			'Optimises the website by focusing on reducing file sizes and minimizing the number of requests',
	},
];
