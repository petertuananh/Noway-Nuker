const {
    MessageEmbed
} = require('discord.js');
const { red, greenBright, cyan, yellow } = require("chalk");
module.exports  = {
    name: "help",
    aliases: [`hép`],
    category: 'Bot',
    description: `Kick all user`,
    cooldown: 5,
    run: async (client, message, args, prefix) => {
        message.delete()
        const commands = client.commands
        const embed = new MessageEmbed()
        .setTitle("Help prefix command")
        .setColor('RED')
        .addField(`${commands.size}`, commands.map(x => `\`${x.name}\` \n`).join(' | '))
        return message.channel.send({embeds: [embed]})
    }
}