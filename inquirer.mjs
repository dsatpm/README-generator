import inquirer from "inquirer";
import fs from 'fs';

inquirer
	.prompt([
		{
			type: 'input',
			name: 'projectName',
			message: 'What is the name of your project?',
		},

		{
			type: 'input',
			name: 'description',
			message: 'How would you describe your project? For example, what technologies were used, who the project is designed for, etc.',
		},

		{
			type: 'input',
			name: 'installation',
			message: 'Are there installation requirements for this project?',
		},

		{
			type: 'input',
			name: 'usage',
			message: 'Give a brief description of how your project is intended to be used.',
		},

		{
			type: 'input',
			name: 'license',
			message: 'Did you use a license for this project? If no, put N/A',
		},

		{
			type: 'input',
			name: 'tests',
			message: 'What have you used to test the functionality of your project?'
		},

		{
			type: 'input',
			name: 'credits',
			message: 'Who worked on this project?',
		},

		{
			type: 'input',
			name: 'contributions',
			message: 'Describe ways that people can help contribute to this project. For example, a good way to connect with you.',
		},

		{
			type: 'input',
			name: 'questions',
			message: 'Enter your Github username'
		},

		{
			type: 'input',
			name: 'email',
			message: 'Enter your email address',
		},

	])
	.then((answers) => {
		let projectName = answers.projectName;
		let description = answers.description;
		let installation = answers.installation;
		let license = answers.license;
		let tests = answers.tests;
		let usage = answers.usage;
		let credits = answers.credits;
		let contributions = answers.contributions;
		let questions = answers.questions;
		let email = answers.email;

		console.log('Answers: ', answers);

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
	
	pre {
		width: 80%;
		white-space: pre-wrap;
	}
	
	.grid {
		display: grid;
		grid-template-columns: 1fr 4fr 4fr;
		grid-template-rows: 2fr 8fr 8fr;
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
		padding-left: 14px;
	}
	
	.grid-content {
		grid-area: content;
		background-color: var(--third-color);
		border-left: 2px solid var(--text-color);
		border-bottom: 2px solid var(--text-color);
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
		background-color: var(--secondary-color);
	}
	
	.grid-footer p {
		max-width: 600px;
	}
	
	.highlighted {
		background-color: var(--secondary-color);
	}
	</style>
  <title>{README} Generator</title>
</head>

<body>
  <div class="grid">

    <header class="grid-header">
      <h1>${projectName}</h1>
    </header>

    <div class="grid-info">
      <h2>Table of Contents</h2>
      <ul class="list-items">
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
			<pre>${projectName}</pre>
			</div>
			<div id="description>
			<h2>Description</h2>
			<pre>${description}</pre>
			</div>
			<div id="installation">
      <h2>Installation</h2>
      <pre>${installation}</pre>
			</div>
			<div id="license">
			<h2>Licenses</h2>
			<pre>${license}</pre>
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
		console.log('Highlighting section:', id);
		document.querySelectorAll('h2').forEach((section) => {
			section.classList.remove('highlighted');
		});
	
		const highlightedSection = document.getElementById(id);
		if (highlightedSection) {
			highlightedSection.classList.add('highlighted');
			console.log('Section highlighted', id);
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
	.catch((error) => {
		if (error.isTtyError) {
			console.error('Prompt could not be rendered in the current environment.');
		} else {
			console.error('Something else went wrong: ', error);
		}
	});

