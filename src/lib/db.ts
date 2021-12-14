export const consultants: ConsultantType[] = [
	{
		visible: true,
		name: 'Nicolai',
		headshot: 'hs/nicolai.webp',
		contact: {
			email: 'nicolai@gjellestad.net',
			mobile: '+4799428603',
			linkedin: 'ngjellestad'
		},
		preamble: 'a developer with a passion for people and technology. ',
		availability:
			"I'm available for full time projects from August 2022, but I may be open for smaller projects before this.",
		focus:
			"I'm mainly a backend developer focusing on C# and Go, but I delve into functional front end programming with Elm on my spare time. Lately I've built API's and serverless functions in C# and a high performance real-time bidder in Go. I have experience as a project manager and tech lead, I care about making people and teams do great stuff while having a good time.",
		projects: [
			{
				title: 'Team lead at Nurofy',
				period: { from: '2019-02', to: '2020-12' },
				description:
					"Nurofy creates a digital marketing platform that enables users to run and manage advertisement campaigns across different social media networks and programmatic advertisement from a single interface. As a team lead for developers and designers we built API's and user interfaces, and a high performance real time bidder in Go.",
				tags: ['.NET Core', 'Go', 'Azure', 'SQL', 'Svelte', 'CI/CD']
			},
			{
				title: 'Senior Consultant at Avo Consulting',
				period: { from: '2017-02', to: '2019-01' },
				description:
					'Avo Consulting helps businesses creating better ways to work and utilize their workforce by leveraging robot process automation (RPA) and AI. With RPA we can reduce costs, improve customer satisfaction and improve quality in critical business processes.',
				tags: [' .NET Core', 'SQL', 'Azure', ' Blue Prism', 'Python']
			},
			{
				title: 'Consultant at Candidator',
				period: { from: '2013-10', to: '2017-01' },
				description:
					'Candidator (formerly Knowit Services) is a managed services provider that manages everything from webhosting to complete IT infrastructures. With state of the art computer centres in Sweden and Norway we served thousands of users every day. I was technical manager for several accounting companies, managing everything from their computer networks to software maintenance and support.',
				tags: ['PowerShell', 'Azure', 'Windows Server', 'Cisco', 'Office365']
			}
		]
	},
	{
		visible: true,
		name: 'Hans',
		headshot: 'hs/hans.webp',
		contact: {
			email: 'box@melaa.net',
			mobile: '+4748149606',
			linkedin: ''
		},
		preamble: 'a developer with a passion for making great user experiences.',
		availability: "I'm available for full time projects from January 2022.",
		focus:
			'As a developer focusing on frontend and user experience, it is important for me that communication is clear, not only to the end user but also in such a way that I am enabling all stakeholders to do great. I have a knack for data wrangling and love cooking up a script in Python and have it look great in a JavaScript based frontend. Lately I have been working on a programmatic advertisement platform written in Svelte.',
		projects: [
			{
				title: 'Developer and tech lead at Nurofy',
				period: { from: '2019-06', to: '2021-12' },
				description:
					'A startup developing a digital marketing platform for multichannel programmatic advertising. My role was development and design of the frontend application. I entered quite early, and my responsibilities grew naturally with the needs of the team; where I took part in planning and design of the architecture, models, and workflows.',
				tags: ['JavaScript', 'Svelte', 'Sapper', 'Express', 'Node', 'Affinity Designer', 'Docker']
			},
			{
				title: 'Developer and research assistant at University of Bergen',
				period: { from: '2019-08', to: '2019-11' },
				description:
					'Development of a quiz-like application for data collection and comprehension analysis and student course progression. I was tasked with development and design of the frontend, communicating with a python-based rest API.',
				tags: ['JavaScript', 'Sapper', 'Python', 'Affinity Designer']
			},
			{
				title: 'Consultant at Thriving Ventures AB',
				period: { from: '2019-04', to: '2019-06' },
				description:
					'A company developing a SaaS solution for administration and monetization of game servers. The project consisted of creating a landing page, logo and profile. I had a great time communicating with the client and figuring out exactly what was needed to deliver a satisfying product.',
				tags: ['JavaScript', 'Svelte', 'Adobe Illustrator']
			}
		]
	}
];

export const blogPosts: BlogPostType[] = [
	{
		visible: true,
		published: '2020-01-01',
		tags: ['javascript', 'web', 'frontend'],
		slug: 'The future of the web',
		title: 'The future of the web',
		content: `
			Cats are going to be the future of the web.
			The future of the web is a lot more than just a browser.
			It is a platform that enables us to create content, communicate, and interact with each other.
			The future of the web is a platform that enables us to create content, communicate, and interact with each other.
		`,
		author: 'TestMan'
	}
];
