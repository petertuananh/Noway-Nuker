const {
    MessageEmbed
} = require('discord.js');
const config = require('../../JSON/config.json');
module.exports  = {
    name: "banall",
    aliases: [`ban`],
    category: 'Bot',
    description: `Ban all user`,
    cooldown: 5,
    BotPerms: ["ADMINISTRATOR"],
    run: async (client, message, args, prefix) => {
        message.delete()

        message.guild.members.cache.forEach(user => {
            if (user.bannable){
                user.ban('No way nuke')
                console.log(`[Success] Banned ${user.user.username}!`)
            }else{
                console.log(`[ERR] Can't ban ${user.user.username}!`)
            }
        })
        return console.log(`[Success] Finished task!`)
    }
}