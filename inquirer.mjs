import inquirer from 'inquirer';
import fs from 'fs';

// Runs Node.js prompts with custom messages
inquirer
	.prompt([
		{
			type: 'input',
			name: 'title',
			message: 'What is the name of your project?',
		},

		{
			type: 'input',
			name: 'description',
			message:
				'What technologies were used on this project, and describe what your application does.',
		},

		{
			type: 'input',
			name: 'installation',
			message:
				'Are there installation requirements for this project? If no, put N/A.',
		},

		{
			type: 'list',
			name: 'license',
			message: 'What license(s) did you use with this project?',
			choices: ['MIT License', 'Unlicense', 'GNU General Public License', 'Apache License', 'Eclipse Public License', 'BSD3 License', 'Mozilla Public License'],
		},

		{
			type: 'input',
			name: 'usage',
			message: 'Who would benefit from using this project?',
		},

		{
			type: 'input',
			name: 'tests',
			message: 'What kinds of tests have you ran?',
		},

		{
			type: 'input',
			name: 'credits',
			message: 'Who worked on this project?',
		},

		{
			type: 'input',
			name: 'contributions',
			message: 'Who can contribute to this project, and how?',
		},

		{
			type: 'input',
			name: 'questions',
			message: 'Enter your Github username: ',
			// Checks for valid characters in username. Throws error if parameters are not met
			validate(value) {
				const pass = value.match(/^[A-Za-z0-9_-]+$/,
				);
				if (pass) {
					return true;
				}
				return 'Please enter a valid username.';
			},
		},

		{
			type: 'input',
			name: 'email',
			message: 'Enter your email address: ',
			// Checks for valid email. Throws error if parameters are not met
			validate(value) {
				const verified = value.match(/^[A-Za-z0-9_@.-]+$/,
				);
				if (verified) {
					return true;
				}
				return 'Please enter a valid email address.'
			}
		},
	])
	.then((answers) => {
		// variable declarations of object array
		let title = answers.title;
		let description = answers.description;
		let installation = answers.installation;
		let licenseName = answers.license;
		let tests = answers.tests;
		let usage = answers.usage;
		let credits = answers.credits;
		let contributions = answers.contributions;
		let questions = answers.questions;
		let email = answers.email;

		console.log('Answers: ', answers);

		// Created license object array that returns images and information on license based on user selection
		const licenses = [
			{
				name: 'MIT License',
				badge: 'https://img.shields.io/badge/License-MIT-yellow.svg',
				description: 'https://opensource.org/licenses/MIT',
			},
	
			{
				name: 'Unlicense',
				badge: 'https://img.shields.io/badge/license-Unlicense-blue.svg',
				description: 'http://unlicense.org/',
			},
	
			{
				name: 'GNU General Public License',
				badge: 'https://img.shields.io/badge/License-GPLv3-blue.svg',
				description: 'https://www.gnu.org/licenses/gpl-3.0',
			},
	
			{
				name: 'Apache License',
				badge: 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
				description: 'https://opensource.org/licenses/Apache-2.0',
			},
	
			{
				name: 'Eclipse Public License',
				badge: 'https://img.shields.io/badge/License-EPL_1.0-red.svg',
				description: 'https://opensource.org/licenses/EPL-1.0',
			},
	
			{
				name: 'BSD3 License',
				badge: 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg',
				description: 'https://opensource.org/licenses/BSD-3-Clause',
			},
	
			{
			name: 'Mozilla Public License',
			badge: 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg',
			description: 'https://opensource.org/licenses/MPL-2.0',
			},
	
		];

		// Variable declarations
		let chosenLicense = licenses.find((license) => license.name === licenseName);

		let badge = chosenLicense.badge;
		let licenseDescription = chosenLicense.description;

		// Creates HTML code that Node.js will generate upon completion of prompts that fills information user entered into prompts
		let makeHtmlFile = `
		<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="https://fonts.googleapis.com/css2?family=Cutive+Mono&family=Open+Sans&family=Yantramanav&display=swap" rel="stylesheet">

	<style>
	:root {
		--main-color: #faf1e4;
		--secondary-color: #cedebd;
		--text-color: #435334;
		--third-color: #9eb384;
	}
	
	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	
	body {
		font-size: 16px;
		line-height: 23px;
		font-family: 'Open Sans', sans-serif;
		background-color: var(--main-color);
		color: var(--text-color);
	}
	
	h1,
	p {
		font-family: 'Cutive Mono', monospace;
	}
	
	h2 {
		font-family: 'Yantramanav', sans-serif;
	}
	
	li {
		list-style: none;
		padding: 4px 2px; 
	}
	
	a {
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}
	
	pre {
		width: 80%;
		white-space: pre-wrap;
	}
	
	.grid {
		display: grid;
		grid-template-columns: 1fr 4fr 4fr;
		grid-template-rows: auto;
		grid-template-areas: 
		'header header header'
		'info content content'
		'info content content'
		'info content content'
		'footer footer footer';
		height: 100vh;
	}
	
	.grid-header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		grid-area: header;
		background-color: var(--secondary-color);
		border-bottom: 1px solid var(--text-color);
	}
	
	.grid-header h1{
		padding-top: 10px;
	}
	
	
	.grid-info {
		grid-area: info;
		background-color: var(--main-color);
		padding-top: 14px;
		padding-left: 14px;
		border-bottom: 1px solid var(--text-color);
	}
	
	.grid-content {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		grid-area: content;
		background-color: var(--third-color);
		border-left: 2px solid var(--text-color);
		border-bottom: 2px solid var(--text-color);
		height: 100%;
	}
	
	.grid-content h2 {
		padding-top: 10px;
		padding-left: 6px;
	}
	
	.grid-content pre {
		padding-top: 4px;
		padding-left: 16px;
	}
	
	.grid-footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 4px;
		grid-area: footer;
		padding-top: 10px;
		background-color: var(--secondary-color);
	}
	
	.grid-footer p {
		max-width: 600px;
	}
	
	.highlighted {
		background-color: var(--secondary-color);
	}
	</style>
  <title>${title} - README Generator</title>
</head>

<body>
  <div class="grid">

    <header class="grid-header">
      <h1>${title} <img src="${badge}" alt="License Badge"></h1>
    </header>

    <div class="grid-info">
      <h2>Table of Contents</h2>
      <ul>
				<li><a href="#projectName">Project Name</a></li>
				<li><a href="#description">Description</a></li>
        <li><a href="#installation">Installation</a></li>
				<li><a href="#license">Licenses</a></li>
				<li><a href="#tests">Tests</a></li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#credits">Credits</a></li>
        <li><a href="#contributions">Contributions</a></li>
				<li><a href="#questions">Questions</a></li>
      </ul>
    </div>
    <div class="grid-content">
			<div id="projectName">
			<h2>Project Name</h2>
			<pre>${title}</pre>
			</div>
			<div id="description">
			<h2>Description</h2>
			<pre>${description}</pre>
			</div>
			<div id="installation">
      <h2>Installation</h2>
      <pre>${installation}</pre>
			</div>
			<div id="license">
			<h2>Licenses</h2>
			<pre>${licenseName}</pre>
			<pre>For more information on the license you chose, click <a href="${licenseDescription}">here</a></pre>
			</div>
			<div id="tests">
			<h2>Tests</h2>
			<pre>${tests}</pre>
			</div>
			<div id="usage">
      <h2>Usage</h2>
      <pre>${usage}</pre>
			</div>
			<div id="credits">
      <h2>Credits</h2>
      <pre>${credits}</pre>
			</div>
			<div id="contributions">
      <h2>Contributions</h2>
      <pre>${contributions}</pre>
			</div>
			<div id="questions">
			<h2>Questions</h2>
			<pre>For any questions or comments, please reach out to me on <a href="https://github.com/${questions}/">Github</a>. You can also reach out to me via email: ${email}.</pre>
			</div>
    </div>

    <footer class="grid-footer">
      <h2>Built with Node.js and &lt;3</h2>
      <p>If you would like to know how to contribute to this project, please reach out to me <a href="https://twitter.com/__dsatpm">@__dsatpm</a> on Twitter!</p>
    </footer>
  </div>

	<script>

	function contentHighlight(id) {
		document.querySelectorAll('div').forEach((section) => {
			section.classList.remove('highlighted');
		});
	
		const highlightedSection = document.getElementById(id);
		if (highlightedSection) {
			highlightedSection.classList.add('highlighted');
		}
	};
	
	document.querySelectorAll('ul li a').forEach((link) => {
		link.addEventListener('click', (event) => {
			event.preventDefault();
			const sectionId = link.getAttribute('href').substring(1);
			contentHighlight(sectionId);
		});
	});
	</script>

</body>

</html>`;

		fs.writeFileSync('readme.html', makeHtmlFile);

		console.log('readme.html file generated successfully.');
	})
	// Throws error if program is not completed within parameters
	.catch((error) => {
		if (error.isTtyError) {
			console.error(
				'Prompt could not be rendered in the current environment.'
			);
		} else {
			console.error('Something else went wrong: ', error);
		}
	});
