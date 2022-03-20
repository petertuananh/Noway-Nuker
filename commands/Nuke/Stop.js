const {
    MessageEmbed
} = require('discord.js');
const { red, greenBright, cyan, yellow } = require("chalk");
module.exports  = {
    name: "stop",
    aliases: [`s`],
    category: 'Bot',
    description: `Kick all user`,
    cooldown: 5,
    run: async (client, message, args, prefix) => {
        message.delete()
        await process.exit()
        return console.log(greenBright(`[Success] Stopped!`))
    }
}