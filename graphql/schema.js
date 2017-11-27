const {makeExecutableSchema} = require('graphql-tools');

const typeDefs = `
    type Hotel{
        id:ID!
        name:String
        stars:Int
        image:String
        price:String
    }

    input HotelInput{
        name:String
        stars:Int
        image:String
        price:String
    }
    
    type Query{
        allHotels: [Hotel]
        hotelByName(name: String): Hotel
    }

    type Mutation{
        registerHotel(input: HotelInput): Hotel
    }
`
    const resolvers = {
        Query: {
            allHotels: async(parent,args,{HotelSchema}) => {
                return await HotelSchema.find();
            },
            hotelByName: async(parent, args, {HotelSchema}) => {
                return await HotelSchema.findOne({name: args.name})
            }
        },
        Mutation:{
            registerHotel: async (parent, args, {HotelSchema}) => {
                return HotelSchema.create(args.input)
            }
        }    
    }

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

module.exports = schema;