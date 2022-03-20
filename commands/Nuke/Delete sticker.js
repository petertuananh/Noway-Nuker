const {
    MessageEmbed
} = require('discord.js');
const config = require('../../JSON/config.json');
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
            console.log(`[Success] Deleted sticker: ${e.name}!`)
        })
        return console.log(`[Success] Finished task!`)
    }
}