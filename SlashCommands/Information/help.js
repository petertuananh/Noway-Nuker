const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "help",
    description: "Show all commands",
    ownerOnly : false,
    // UserPerms: ["ADMINISTRATOR"],
    // BotPerms: ["ADMINISTRATOR"],
    "options": [
        {
            "name": "type",
            "description": "Type",
            "type": 3,
            "required": true,
            "choices": [
                {
                    "name": "prefix",
                    "value": "prefix"
                },
                {
                    "name": "slash",
                    "value": "slash"
                }
            ],
        },
    ],
    run: async (client, interaction, args, err) => {
        const commands = client.commands
        const embed1 = new MessageEmbed()
            .setTitle("Help prefix command")
            .setColor('RED')
            .addField(`<:Information:912139638741811240> Enabled - ${commands.size}`, commands.map(x => `\`${x.name}\``).join(' | '))
        const commands2 = client.slashcommands
        const embed2 = new MessageEmbed()
            .setTitle("Help slash command")
            .setColor('RED')    
            .addField(`<:Information:912139638741811240> Enabled - ${commands2.size}`, commands2.map(x => `\`${x.name}\``).join(' | '))
        const [ subcommand ] = args;
        if(subcommand === "prefix") return interaction.followUp({embeds: [embed1]})
        if(subcommand === "slash") return interaction.followUp({embeds: [embed2]})
    }
}
