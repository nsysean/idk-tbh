const path = require('path');
const express = require('express');
const app = express();
app.set('view engine', 'ejs');

const port = 42069;
app.get('/', (req, res) => {
  
	let categoryyy = [];
	const commandss = require('./data.json').partners;
	commandss.forEach(p => {
		categoryyy.push({
			url: p.avatar,
			media: p.link,
			subs: p.count,
			name: p.name,
			des: p.des
		});
	});

	var data = {
		name: 'Commands',
		partners: categoryyy
	};

	
	res.render('main.ejs', { data: data });
});
	
app.get('/launcher', (req, res) => {
	
	res.render('index.ejs', { data: [] });
});

app.listen(port);

