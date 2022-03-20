console.clear();
require('events').defaultMaxListeners = 15;
const  Discord  = require('discord.js');
const { createConnection } = require('mysql');
const http = require('http');
const express = require("express");
const config = require('./JSON/config.json')
const app = express();
const server = http.createServer(app);
const { GiveawaysManager } = require("discord-giveaways");
const ascii = require('ascii-table');
const Constants = require('discord.js/src/util/Constants.js');
const client = new Discord.Client({

  restTimeOffset: 0,
  allowedMentions: {
    parse: ["roles", "users", "everyone" ],
    repliedUser: false,
  },
  intents: 32767,
    partials: ["USER", "CHANNEL", "MESSAGE", "GUILD_MEMBER", "REACTION"],
  
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MEMBERS,
    Discord.Intents.FLAGS.GUILD_BANS,
    Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Discord.Intents.FLAGS.GUILD_INTEGRATIONS,
    Discord.Intents.FLAGS.GUILD_WEBHOOKS,
    Discord.Intents.FLAGS.GUILD_INVITES,
    Discord.Intents.FLAGS.GUILD_VOICE_STATES,
    // Discord.Intents.FLAGS.GUILD_PRESENCES,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Discord.Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Discord.Intents.FLAGS.DIRECT_MESSAGES,
    Discord.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Discord.Intents.FLAGS.DIRECT_MESSAGE_TYPING,
  ],
  partials: ["CHANNEL"],
  // ws: { properties: { $browser: "Discord iOS" }},
  disableEveryone: true,
  partials: ["USER", "CHANNEL", "MESSAGE", "GUILD_MEMBERS", "REACTION"]
});
module.exports = client;
// import
client.config = config
const fs = require('fs');
const { dir } = require('console');
const { ok } = require('assert');
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = fs.readdirSync("./commands/");
client.cooldowns = new Discord.Collection();
client.logger = require('./Utils/Logger');
client.slashCommands = new Discord.Collection();
client.delay = ms => new Promise(res => setTimeout(res, ms));
client.embedCollection = new Discord.Collection();
client.interactions = new Discord.Collection();
client.snipes = new Discord.Collection();
client.slashcommands = new Discord.Collection();
// client.mysql = require('./Utils/mysql')
["command", "event", 'slashCommand'].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});


const commandFiles = fs.readdirSync("./SlashCommands/").filter(file => file.endsWith(".js"))
for(const file of commandFiles){
    const command = require(`./SlashCommands/${dir}/${file}`)

    client.commands.set(command.name, command)
}


process.on('unhandledRejection', err => {
  client.logger.error(`Have an error: ${err.message}.`);
  console.log(err);
});

process.on('warning', (warning) => {
  console.log(warning.stack);
});
client.login(config.token).catch(e => client.logger.error(e.message));
