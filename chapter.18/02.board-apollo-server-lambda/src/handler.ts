import { ApolloServer, gql } from 'apollo-server-lambda';
import { APIGatewayProxyEvent, APIGatewayProxyResult, Callback, Context } from 'aws-lambda';

const createHandler = async () => {
  const typeDefs = gql`
    type Query {
      hello: String
    }
  `;

  const resolvers = {
    Query: {
      hello: () => 'Hello world!',
    },
  };

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true
  });
  return server.createHandler({ cors: { origin: '*', credentials: true } });
};

exports.graphql = (event: APIGatewayProxyEvent, context: Context, callback: Callback<APIGatewayProxyResult>) => {
  createHandler().then((handler: any) => {
    context.callbackWaitsForEmptyEventLoop = false;    
    return handler(event, context, callback);
  });
};

