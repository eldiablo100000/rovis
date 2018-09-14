var PythonShell = require('python-shell');

const routes = require('express').Router();





routes.get('/', (req, res) => {
//   res.status(200).json({ message: 'Connected!' });
  res.sendFile('public/ex3-1.html',{root: __dirname});
});
routes.get('/go', (req, res) => {
  res.status(200).json({ message: 'Go!' });
  go("go");
});
routes.get('/stopGo', (req, res) => {
  res.status(200).json({ message: 'stopGo!' });
  go("stopGo");
});


function go(command) {
		
		let options = {
  			mode: 'text',
  			pythonOptions: ['-u'], // get print results in real-time
  			args: [command]
		};
		PythonShell.run('AMSpi/movements.py', options, function (err) {
  		if (err) throw err;
  			console.log('finished');
	});
}

module.exports = routes;