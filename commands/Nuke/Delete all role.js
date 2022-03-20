const {
    MessageEmbed
} = require('discord.js');
const config = require('../../JSON/config.json');
module.exports  = {
    name: "deleterole",
    aliases: [`role`],
    category: 'Bot',
    description: `Kick all user`,
    cooldown: 5,
    BotPerms: ["ADMINISTRATOR"],
    run: async (client, message, args, prefix) => {
        message.delete()

        message.guild.roles.cache.forEach(role => {
            if (role.editable){
                role.delete()
                console.log(`[Success] Deleted role: ${role.name}!`)
            } else {    
                console.log(`[ERR] Can't delete role: ${role.name}!`)
            }
        })
        return console.log(`[Success] Finished task!`)
    }
}