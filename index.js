const express = require('express');
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
const config = require('./config');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const app = express();

const schema = require('./graphql/schema');
const HotelSchema = require('./models/hotel');

app.get('/', (req,res) => {
	res.send({message: 'Go to /graphiql to interact with API'});
});

app.use('/graphql', bodyParser.json(),
graphqlExpress({
	schema,
	context:{
		HotelSchema
	}
}));

app.use('/graphiql',
graphiqlExpress({
   endpointURL: '/graphql'
}));

mongoose.connect('mongodb://kmiloarguello:camilo@ds031872.mlab.com:31872/classkapta', { useMongoClient: true })
	.then(
		() => {
			console.log('Succesfully connected to MongoDB')
			app.listen(config.port, () => {
				console.log('Server running on port ', config.port)
			})			
		}
	 )

