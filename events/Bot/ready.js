// const client = require('../../index.js');
// const config = require('../../JSON/config.json');
// const ascii = require('ascii-table');
// const { red, greenBright, cyan, yellow } = require("chalk");
// client.on('ready', (message) => {
//     client.user.setPresence({
//         status: config.status,
//     });
//     client.user.setActivity(config.playing, { type: 'PLAYING' })
//     let table = new ascii("System");
//     table.setHeading("List", "Info");
//     table.addRow(`Bot Name`, `${client.user.username}`)
//     table.addRow(`Total Guilds`, `${client.guilds.cache.size} guilds`)
//     table.addRow(`Total Commands`, `${client.commands.size} commands`)
//     console.log(red(table.toString()))
//     var current = new Date();
// })
