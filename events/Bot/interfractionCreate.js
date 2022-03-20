const { MessageEmbed, Discord } = require('discord.js');
const client = require('../../index.js');
const config = require('../../JSON/config.json');
client.on('interactionCreate', interaction => {

    const embed = new MessageEmbed()
        .setColor("RED")

    if (!interaction.guild) {
        embed.setDescription(`**・You can't use slash command in DMs**`)
        return interaction.reply({
            embeds: [embed]
        })
    }

    if (interaction.isCommand() || interaction.isContextMenu()) {
        interaction.deferReply({
            ephemeral: false
        }).catch((error) => {
            console.log(error)
        });

        const command = client.slashcommands.get(interaction.commandName);

        embed.setDescription('**・An error occured while running this command ✖**')
        if (!command) return interaction.followUp({
            embeds : [embed]
        }) && client.slashcommands.delete(interaction.commandName);;

        const args = [];

        for (let option of interaction.options.data) {
            if (option.type === 'SUB_COMMAND') {
                if (option.name) args.push(option.name);
                option.options?.forEach(x => {
                    if (x.value) args.push(x.value);
                });
            } else if (option.value) args.push(option.value);
        }

        const momsgEmbed = new MessageEmbed()
            .setColor('#3d35cc')
            .setAuthor(`PERMISSIONS ❌`, client.user.displayAvatarURL())
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription("Bot is missing permission!")
            .addField("You need give:", `\`SEND MESSAGES\`, \`EMBED LINKS\` to bot!`)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()

        const upEmbed = new MessageEmbed()
            .setColor('#3d35cc')
            .setAuthor(`PERMISSIONS ❌`, client.user.displayAvatarURL())
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription("You're missing permission!")
            .addField("You need", `\`${command.UserPerms || []}\``)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()

        const bpEmbed = new MessageEmbed()
            .setColor('#3d35cc')
            .setAuthor(`PERMISSIONS ❌`, client.user.displayAvatarURL())
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription("Bot is missing permission!")
            .addField("Bot need:", `\`${command.BotPerms || []}\``)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()

        if (!interaction.guild.me.permissions.has(["SEND_MESSAGES", "EMBED_LINKS"])) return interaction.member.send({
            embeds: [momsgEmbed]
        }).catch(err => console.log(err))

        if (!interaction.member.permissions.has(command.UserPerms || [])) return interaction.followUp({
            embeds: [upEmbed]
        })

        if (!interaction.guild.me.permissions.has(command.BotPerms || [])) return interaction.followUp({
            embeds: [bpEmbed]
        })

        command.run(client, interaction, args)
    }
})