const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');

module.exports.run = async (bot, message, args) => {
	var str = '';
	var guilds = bot.guilds.array();
	for (var i = 0; i < guilds.length; i++) {
		str += (i + 1) + '. Sunucu: ' + guilds[i].name + ' - ' + guilds[i].members.size + ' Kullanıcı\n\n';
	}
	message.delete(1)
	var sunuculistesi = new Discord.RichEmbed()
		.setAuthor(`${bot.user.username} Adlı Botun Bulunduğu Sunucular`)
		.setDescription(str)
		.setColor("RANDOM")
		.setTimestamp()
		.setFooter(`${message.author.username}`)
	message.delete(1)
	message.channel.sendEmbed(sunuculistesi)
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'sunucular',
    description: 'Botun bulunduğu sunucuları gösterir.',
    usage: 'sunucular'
};