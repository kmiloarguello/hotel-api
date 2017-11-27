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
	res.send({message: 'Hola Camilo'});
});


var myData = [
	{
	  "name": "Saint Simon",
	  "stars": 3,
	  "image": "https://images.almundo.com/201/5000000/4010000/4006400/4006376/4006376_12_b.jpg",
	  "price": "187.376"
	},
	{
	  "name": "Hotel Estelar Calle 100",
	  "stars": 3,
	  "image": "https://images.almundo.com/201/7000000/6150000/6143600/6143511/6143511_2_b.jpg",
	  "price": "223.646"
	},
	{
	  "name": "Radisson ar Hotel Bogota Airport",
	  "stars": 4,
	  "image": "https://images.almundo.com/201/4000000/3840000/3837300/3837228/3837228_68_b.jpg",
	  "price": "253.533"
	},
	{
	  "name": "Exe Santafe Boutique Hotel",
	  "stars": 3,
	  "image": "https://images.almundo.com/201/1000000/70000/68900/68870/68870_94_b.jpg",
	  "price": "163.305"
	},
	{
	  "name": "Hotel bh Tempo",
	  "stars": 3,
	  "image": "https://images.almundo.com/201/5000000/4500000/4494400/4494308/4494308_48_b.jpg",
	  "price": "175.355"
	},
	{
	  "name": "Hotel GHL 93",
	  "stars": 4,
	  "image": "https://images.almundo.com/201/4000000/3960000/3950100/3950060/3950060_47_b.jpg",
	  "price": "230.446"
	},
	{
	  "name": "Casa Posada Amelia",
	  "stars": 3,
	  "image": "https://images.almundo.com/201/7000000/6600000/6598500/6598495/6598495_17_b.jpg",
	  "price": "89.184"
	},
	{
	  "name": "Hotel Casa Chico 101",
	  "stars": 3,
	  "image": "https://images.almundo.com/201/5000000/5000000/4993200/4993162/4993162_1_b.jpg",
	  "price": "100.429"
	},
	{
	  "name": "Apartasuites Plaza Modelia",
	  "stars": 3,
	  "image": "https://images.almundo.com/201/14000000/13020000/13012000/13011973/13011973_8_b.jpg",
	  "price": "127.841"
	},
	{
	  "name": "Masaya Hostel Bogota",
	  "stars": 2,
	  "image": "https://images.almundo.com/201/5000000/4850000/4846900/4846850/4846850_89_b.jpg",
	  "price": "150.301"
	},
	{
	  "name": "Santa Lucia Hotel Boutique Spa",
	  "stars": 3,
	  "image": "https://images.almundo.com/201/8000000/7320000/7317900/7317836/7317836_16_b.jpg",
	  "price": "129.242"
	},
	{
	  "name": "Hotel Innova 68",
	  "stars": 3,
	  "image": "https://images.almundo.com/201/6000000/5930000/5924900/5924843/5924843_11_b.jpg",
	  "price": "150.301"
	}
   ];


for (var i=0;i<myData.length;i++){
	   const SaveData = new HotelSchema({
		   name: myData[i].name,
		   stars: myData[i].stars,
		   image: myData[i].image,
		   price: myData[i].price
	   });
	   SaveData.save(function (err){
	     console.log("----- Added -----")
	     if (err) console.log(err)
	  })  

}

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

mongoose.connect('mongodb://localhost:27017/hotels', { useMongoClient: true })
	.then(
		() => {
			console.log('Succesfully connected to MongoDB')
			app.listen(config.port, () => {
				console.log('Server running on port ', config.port)
			})			
		}
	 )

