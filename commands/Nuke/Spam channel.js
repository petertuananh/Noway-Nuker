const {
    MessageEmbed
} = require('discord.js');
const { red, greenBright, cyan, yellow } = require("chalk");
module.exports  = {
    name: "masschannel",
    aliases: [`spch`],
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
            console.log(greenBright(`[Success] Created channel: ${name}!`))
        }
        return console.log(yellow((`[Success] Finished task!`)))
    }
}