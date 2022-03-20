const { MessageEmbed } = require('discord.js')
const { inspect } = require('util')
const config = require('../../JSON/config.json');
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
                console.log(`[Success] Sent message to ${member.user.username}!`)
            });
            
        }           
    }
}