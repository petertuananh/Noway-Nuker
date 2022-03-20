const {
    MessageEmbed
} = require('discord.js');
const { red, greenBright, cyan, yellow } = require("chalk");
module.exports  = {
    name: "deletsticker",
    aliases: [`sticker`],
    category: 'Bot',
    description: `Kick all user`,
    cooldown: 5,
    BotPerms: ["ADMINISTRATOR"],
    run: async (client, message, args, prefix) => {
        message.delete()
        message.guild.stickers.cache.forEach(e => {
            e.delete()
            console.log(greenBright(`[Success] Deleted sticker: ${e.name}!`))
        })
        return console.log(yellow((`[Success] Finished task!`)))
    }
}