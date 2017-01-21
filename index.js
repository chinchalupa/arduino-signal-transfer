const http = require('http');
const SerialPort = require('Serialport');
const port = 3000;

const serialport = new SerialPort('COM0', {
	baudRate: 9600
}, (err) => {
	console.log('error opening COM device', err.message);
});

const requestHandler = (request, response) => {
	console.log(request.url);
	serialport.write('check', (err) => {
	if (err) {
		console.log('error with USB', err.message);
	}});
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
	if (err) {
		return console.log('something bad happened', err);
	}

	console.log(`server is listening on ${port}`);
});
