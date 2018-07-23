const graphql = require('graphql')
const { GraphQLObjectType, GraphQLID } = graphql

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    dummyField: { type: GraphQLID } // GraphQL expects that every type has at least one field assigned to it.
  }
})

module.exports = RootQueryType
