import domready from 'domready';
require('./scss/main.scss');

domready(() => {

	console.log('App is started');


	let numberOfTriangles = 250;

	let windowW = window.innerWidth;
	let windowH = window.innerHeight;

	let arrayOfColors = ["isRed", "isBlue", "isGreen"];


	while(numberOfTriangles--){

		let triangle = document.createElement('div');
		triangle.className = 'triangle ';
		triangle.className += arrayOfColors[Math.round(Math.random() * 3)];
		document.getElementById('application').appendChild(triangle);
	}


	document.addEventListener('mousemove', (event) => {

		console.log(event);

	})


});
