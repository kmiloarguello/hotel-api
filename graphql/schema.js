const {makeExecutableSchema} = require('graphql-tools');

const typeDefs = `
    type Hotel{
        id:ID!
        name:String
        stars:Int
        price:String
    }

    type Query{
        allHotels: [Hotel] 
    }
`
    const resolvers = {
        Query: {
            allHotels: () => {
                return [{
                    id: 1,
                    name: "Forrest Gump",
                    stars: 5,
                    price:"12.000"

                }]
            }
        }    
    }

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

module.exports = schema;