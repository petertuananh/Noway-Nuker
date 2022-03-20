const {
    MessageEmbed
} = require('discord.js');
const { red, greenBright, cyan, yellow } = require("chalk");
module.exports  = {
    name: "deleterole",
    aliases: [`delrole`],
    category: 'Bot',
    description: `Kick all user`,
    cooldown: 5,
    BotPerms: ["ADMINISTRATOR"],
    run: async (client, message, args, prefix) => {
        message.delete()

        message.guild.roles.cache.forEach(role => {
            if (role.editable){
                role.delete()
                console.log(greenBright(`[Success] Deleted role: ${role.name}!`))
            } else {    
                console.log(red(`[ERR] Can't delete role: ${role.name}!`))
            }
        })
        return console.log(yellow((`[Success] Finished task!`)))
    }
}