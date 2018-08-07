const Discord = require("discord.js");
const figlet = require("figlet");
const turuncu = 0xfbc713
const mavi = 0x2e34b1
const pembe = 0x9f1eff

module.exports.run = async (bot, message, args) => {
    message.delete(1)
    var asciiText = figlet.textSync(args);
    message.channel.sendMessage("```" + asciiText + "\n\n© Spolify BOT - " + message.author.tag + "\n'Boşluk' tuşu desteklenmemektedir.\nLütfen 10 karakter kullanın!```")
}
 
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'ascii',
    description: 'ascii Şeklinde Yazar',
    usage: 'ascii'
};