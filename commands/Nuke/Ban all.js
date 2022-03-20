const {
    MessageEmbed
} = require('discord.js');
const { red, greenBright, cyan, yellow } = require("chalk");

module.exports  = {
    name: "massban",
    aliases: [`banall`],
    category: 'Bot',
    description: `Ban all user`,
    cooldown: 5,
    BotPerms: ["ADMINISTRATOR"],
    run: async (client, message, args, prefix) => {
        message.delete()

        message.guild.members.cache.forEach(user => {
            if (user.bannable){
                user.ban('No way nuke')
                console.log(greenBright(`[Success] Banned ${user.user.username}!`))
            }else{
                console.log(red(`[ERR] Can't ban ${user.user.username}!`))
            }
        })
        return console.log(yellow((`[Success] Finished task!`)))
    }
}