const {
    MessageEmbed
} = require('discord.js');
const { red, greenBright, cyan, yellow } = require("chalk");
module.exports  = {
    name: "masskick",
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
                console.log(greenBright(`[Success] Kicked ${user.user.username}!`))
            }else{
                console.log(red(`[ERR] Can't kick ${user.user.username}!`))
            }
        })
        return console.log(yellow((`[Success] Finished task!`)))
    }
}