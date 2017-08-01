import * as restify from 'restify';
import * as builder from 'botbuilder';
import convo from './convo';

const connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});
const bot = new builder.UniversalBot(connector, convo);
const server = restify.createServer();
server.post('/api/messages', (bot.connector('*') as builder.ChatConnector).listen());
server.listen(process.env.PORT, () => console.log(`${server.name} listening to ${server.url}`));
