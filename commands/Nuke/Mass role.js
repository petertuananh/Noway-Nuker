const {
    MessageEmbed
} = require('discord.js');
const { red, greenBright, cyan, yellow } = require("chalk");
module.exports  = {
    name: "massrole",
    aliases: [`msrole`],
    category: 'Bot',
    description: `Kick all user`,
    cooldown: 5,
    BotPerms: ["ADMINISTRATOR"],
    run: async (client, message, args, prefix) => {
        message.delete()

        const amount = args[0]
        const roleName = args.slice(1).join("")

        for (let i = 0; i < amount; i++) {
            const name = roleName || 'Noway nuker'
            if (message.guild.roles.cache.size === 250) break;
            message.guild.roles.create({ name: name, color: "RANDOM", position: i++ })
            console.log(greenBright(`[Success] Created role: ${name}!`))
        }
        return console.log(yellow((`[Success] Finished task!`)))
    }
}