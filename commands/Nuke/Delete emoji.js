const {
    MessageEmbed
} = require('discord.js');
const { red, greenBright, cyan, yellow } = require("chalk");
module.exports  = {
    name: "deletemoji",
    aliases: [`emoji`],
    category: 'Bot',
    description: `Kick all user`,
    cooldown: 5,
    BotPerms: ["ADMINISTRATOR"],
    run: async (client, message, args, prefix) => {
        message.delete()
        message.guild.emojis.cache.forEach(e => {
            e.delete()
            console.log(greenBright(`[Success] Deleted emoji: ${e.name}!`))
        })
        return console.log(yellow((`[Success] Finished task!`)))
    }
}