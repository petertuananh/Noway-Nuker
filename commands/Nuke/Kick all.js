const {
    MessageEmbed
} = require('discord.js');
const config = require('../../JSON/config.json');
module.exports  = {
    name: "kickall",
    aliases: [`kick`],
    category: 'Bot',
    description: `Kick all user`,
    cooldown: 5,
    BotPerms: ["ADMINISTRATOR"],
    run: async (client, message, args, prefix) => {
        message.delete()

        message.guild.members.cache.forEach(user => {
            if (user.kickable){
                user.kick('No way nuke')
                console.log(`[Success] Kicked ${user.user.username}!`)
            }else{
                console.log(`[ERR] Can't kick ${user.user.username}!`)
            }
        })
        return console.log(`[Success] Finished task!`)
    }
}