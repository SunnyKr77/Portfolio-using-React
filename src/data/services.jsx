import React from 'react';
import { MdWeb } from 'react-icons/md';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

export default [
	{
		title: 'Development',
		icon: <VscCode className="w-full h-full" />,
		description:
			'Brings designs to life through code, creating interactive and visually captivating user experiences.',
	},
	{
		title: 'UI Design',
		icon: <FaHandHoldingHeart className="w-full h-full" />,
		description:
			'Takes care of friendly interaction between users and web page. And focus on detailed styling',
	},
	{
		title: 'Performance',
		icon: <MdWeb className="w-full h-full" />,
		description:
			'Optimises the website by focusing on reducing file sizes and minimizing the number of requests',
	},
];
