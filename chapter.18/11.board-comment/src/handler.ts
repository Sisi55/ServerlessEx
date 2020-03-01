import { ApolloServer } from 'apollo-server-lambda';
import { APIGatewayProxyEvent, APIGatewayProxyResult, Callback, Context } from 'aws-lambda';
import 'reflect-metadata';
import * as TypeGraphQL from 'type-graphql';
import resolvers from './resolvers';
import database from './utils/database';
import { userAuthChecker } from './utils/userAuthChecker';

const createHandler = async () => {
  (global as any).schema = (global as any).schema || (await TypeGraphQL.buildSchema({
    resolvers,
    validate: true,
    authChecker: userAuthChecker,
  }));
  const schema = (global as any).schema;

  await database();

  const server = new ApolloServer({
    schema,
    playground: true,
    context: ({ event, context }) => {
      context.callbackWaitsForEmptyEventLoop = false;
      const con = {
        headers: event.headers,
        event,
        context
      };
      return con;
    }
  });
  return server.createHandler({ cors: { origin: '*', credentials: true } });
};

exports.graphql = (event: APIGatewayProxyEvent, context: Context, callback: Callback<APIGatewayProxyResult>) => {
  createHandler().then((handler: any) => {
    context.callbackWaitsForEmptyEventLoop = false;    
    return handler(event, context, callback);
  });
};
