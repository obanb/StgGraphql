import * as express from 'express';
import {ApolloServer} from 'apollo-server-express';
import {schema} from './graphql';
import bodyParser = require('body-parser');
// tslint:disable-next-line
require('dotenv').config();

const app = express();

// app.use('*', (req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     if (req.method === 'OPTIONS') {
//         res.sendStatus(200);
//     } else {
//         next();
//     }
// });

app.use(bodyParser.json());

const PORT = process.env.PORT || 8888;
app.listen(PORT, () => {
    // tslint:disable-next-line
    console.log(`Graphl ready on:${PORT}/graphql`);
});

const apolloServer = new ApolloServer({
    schema,
    tracing: true,
    debug: true,
    introspection: true,
    playground: {
        settings: {
            'editor.theme': 'light',
            'editor.cursorShape': 'line',
        } as any,
    },
});
apolloServer.applyMiddleware({app, path: '/graphql'});
