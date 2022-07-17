const express = require("express");
const app = express();
const redisClient = require("redis").createClient(6379, '127.0.0.1');

const REDIS_USER_DATA_INDEX = 2;

redisClient.select(REDIS_USER_DATA_INDEX);

redisClient.on('connect', function () {
	    console.log('redis connected');
	    console.log(`connected ${redisClient.connected}`);
}).on('error', function (error) {
	    console.log(error);
});



app.use(express.json());

app.use(express.urlencoded({
	  extended: true
}));

app.get("/", function (req, res) {
	  res.status(200)
	    .send("Hi..");
});

app.listen(8081, function () {
	  console.log("Node js and Redis Script run on port 8081 ");
});


redisClient.set(['spectra_invoice', '100']);
redisClient.get('spectra_invoice', function (err, reply) {
	  console.log(reply); // value
});


