const {
    MessageEmbed
} = require('discord.js');
const config = require('../../JSON/config.json');
module.exports  = {
    name: "spamping",
    aliases: [`ping`],
    category: 'Bot',
    description: `Kick all user`,
    cooldown: 5,
    BotPerms: ["ADMINISTRATOR"],
    run: async (client, message, args, prefix) => {
        message.delete()

        const amount = args[0]
        const content = args.slice(1).join("")

        for (let i = 0; i < amount; i++) {
            message.guild.channels.cache.forEach(async (channel) => {
                await channel.send(content)
                return console.log(`[Success] Pinging channel ${channel.name}!`)
            })
            
        }
        return console.log(`[Success] Finished task!`)
    }
}