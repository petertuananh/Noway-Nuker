const {
    MessageEmbed
} = require('discord.js');
const { red, greenBright, cyan, yellow } = require("chalk");
module.exports  = {
    name: "masssping",
    aliases: [`spamping`],
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
                return console.log(greenBright(`[Success] Pinging channel ${channel.name}!`))
            })
            
        }
        return console.log(yellow((`[Success] Finished task!`)))
    }
}