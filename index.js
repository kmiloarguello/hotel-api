const express = require('express');
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
const config = require('./config');
const bodyParser = require('body-parser');
const app = express();

const schema = require('./graphql/schema');

app.get('/', (req,res) => {
	res.send({message: 'Hola Camilo'})
})

app.use('/graphql', bodyParser.json(),
graphqlExpress({
	schema
})
)

app.use('/graphiql',
graphiqlExpress({
   endpointURL: '/graphql'
}))

app.listen(config.port, () => {
	console.log('Server running on port ', config.port)
})

