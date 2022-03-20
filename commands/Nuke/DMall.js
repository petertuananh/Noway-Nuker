const { MessageEmbed } = require('discord.js')
const { inspect } = require('util')
const { red, greenBright, cyan, yellow } = require("chalk");
module.exports = {
    name: 'massdm',
    cooldown: 5,
    category: 'Administrator',
    description: 'Send message to all member!',
    run: async (client, message, args, prefix) => {
        message.delete()
        const amount = args[0]
        const content = args.slice(1).join("")
        for (let i = 0; i < amount; i++) {
            message.guild.members.cache.forEach(member => {
                member.send(`${content}`)
                console.log(greenBright(`[Success] Sent message to ${member.user.username}!`))
            });
            
        }
        return console.log(yellow((`[Success] Finished task!`)))
    }
}