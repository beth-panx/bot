import * as restify from 'restify';
import * as builder from 'botbuilder';
import convo from './convo';

let connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});
let bot = new builder.UniversalBot(connector, convo);
let server = restify.createServer();
server.post('/api/messages', (bot.connector('*') as builder.ChatConnector).listen());
server.listen(process.env.PORT, () => console.log(`${server.name} listening to ${server.url}`));
