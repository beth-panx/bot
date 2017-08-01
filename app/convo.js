"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder = require("botbuilder");
exports.default = [
    (session) => {
        builder.Prompts.text(session, 'What is your name?');
    },
    (session, results) => {
        session.endConversation(`Hello, ${results.response}`);
    }
];
//# sourceMappingURL=convo.js.map