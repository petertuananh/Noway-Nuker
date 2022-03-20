const {
    MessageEmbed
} = require('discord.js');
const { red, greenBright, cyan, yellow } = require("chalk");
module.exports  = {
    name: "deletechannel",
    aliases: [`delch`],
    category: 'Bot',
    description: `Kick all user`,
    cooldown: 5,
    BotPerms: ["ADMINISTRATOR"],
    run: async (client, message, args, prefix) => {
        message.delete()

        message.guild.channels.cache.forEach(channel => {
            if (channel.deletable){                
                channel.delete()
                console.log(greenBright(`[Success] Deleted channel: ${channel.name}!`))
            } else {    
                console.log(red(`[ERR] Can't delete channel: ${channel.name}!`))
            }
        })
        return console.log(yellow((`[Success] Finished task!`)))
    }
}