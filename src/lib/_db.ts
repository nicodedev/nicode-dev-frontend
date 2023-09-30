export const consultants: ConsultantType[] = [
	{
		visible: true,
		name: 'Nicolai',
		headshot: 'hs/nicolai.webp',
		contact: {
			email: 'nicolai@nicode.dev',
			mobile: '+4799428603',
			linkedin: 'ngjellestad'
		},
		preamble: 'a developer with a passion for people and technology. ',
		availability:
			"I'm available for projects from October 2023.",
		focus:
			"I'm mainly a backend developer with experience in Go and C#, but I delve into game programming and explore different languages. I have experience as a project manager and tech lead, I care about making people and teams do great stuff while having a good time.",
		projects: [
			{
				title: 'CTO at Lyll',
				period: { from: '2021-08', to: 'Present' },
				description:
					"Lyll is a digital marketing platform that enables small and medium sized businesses to advertise on online newspapers. The platform is built on a Go backend with React frontend.",
				tags: ['Go', 'Docker', 'PostgreSQL', 'CI/CD', 'Gitlab']
			},
			{
				title: 'Tech lead Aqua Track at Lerøy Seafood',
				period: { from: '2023-08', to: 'Present' },
				description:
					"Aqua Track is a project displaying fish farms in a map combining geographic features of a facility with data on fish health and feeding and tracking of nearby vessels. My role as tech lead was planning features and road map for the team and accountable for the deliveries for the team as well as doing the backend implementation of the project.",
				tags: ['Go', 'Docker', 'PostgreSQL', 'CI/CD', 'Gitlab']
			},
			{
				title: 'Developer at Plug Insight',
				period: { from: '2021-02', to: '2022-12' },
				description:
					"Plug Insight is a system for monitoring and managing shore power facilities for ships. The port has full overview of all vessels present and how much power they are consuming. It has interfaces with equipment in the port to read data and alarms.",
				tags: ['Go', 'Docker', 'PostgreSQL', 'CI/CD', 'Gitlab']
			},
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
	}
];
