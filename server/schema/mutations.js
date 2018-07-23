const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString } = graphql
const UserType = require('./types/user_type')
const AuthService = require('../services/auth')

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { email, password }, req) {
        // do not put business logic inside mutations,
        // delegate it to other helpers instead
        return AuthService.signup({ email, password, req })
      }
    },
    logout: {
      type: UserType,
      resolve(parentValue, args, req) {
        // this can be pulled apart to services/auth
        const { user } = req
        req.logout()
        return user
      }
    }
  }
})

module.exports = mutation
