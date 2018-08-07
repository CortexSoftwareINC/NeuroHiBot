const Discord = require("discord.js");
const snekfetch = require('snekfetch');
const turuncu = 0xfbc713
const mavi = 0x2e34b1
const pembe = 0x9f1eff

module.exports.run = async (bot, message, args) => {
    if (!args[0]) { return message.channel.send("Neyi Hastebin'e yüklemeyi düşünüyorsun?") }
    snekfetch.post("https://hastebin.com/documents").send(args.slice(0).join(" ")).then(body => {
        message.delete(1)
        const embed = new Discord.RichEmbed()
            .setColor(mavi)
            .setTitle("Yazı başarıyla Hastebin'e yüklendi!")
            .setDescription("https://hastebin.com/" + body.body.key)
            .setTimestamp()
            .setFooter(`Neuro Hi- ${message.author.tag}`)
        message.channel.sendEmbed(embed);
})
}
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucu', 'sunucu bilgi', 'sbilgi'],
  permLevel: 0
};

exports.help = {
  name: 'hastebin',
  description: 'Yazdığınız Şeyi Hastebin Şeklinde Yazar',
  usage: 'hastebin'
};
