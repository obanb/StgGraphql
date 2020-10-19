import {makeExecutableSchema} from 'graphql-tools';
import {importSchema} from 'graphql-import';
import {GraphQLSchema} from 'graphql';
import { testService} from '../services';

const resolvers = {
    Query: {
        test: () => ({
            test: testService.test(),
        }),
    },
};

export const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs: importSchema('schema/root.graphql'),
    resolvers,
    resolverValidationOptions: {
        requireResolversForResolveType: false,
    },
});
