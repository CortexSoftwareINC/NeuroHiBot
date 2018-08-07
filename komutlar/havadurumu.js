const Discord = require('discord.js');
const weather = require('weather-js');
const turuncu = 0xfbc713
const mavi = 0x2e34b1
const pembe = 0x9f1eff

module.exports.run = async (bot, message, args) => {
    weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) { // Make sure you get that args.join part, since it adds everything after weather.
            if (err) message.channel.send(err);

            
            if (!result || result === "" || result === " ") return message.channel.send('Lütfen ingilizce bir konum girin! (Istanbul)') // This tells them in chat that the place they entered is invalid.

            
            var current = result[0].current; 
            var location = result[0].location; 

            
            const embed = new Discord.RichEmbed()
                .setDescription(`${current.skytext}`) // This is the text of what the sky looks like, remember you can find all of this on the weather-js npm page.
                .setAuthor(`${current.observationpoint} Hava Durumu`) // This shows the current location of the weather.
                .setThumbnail(current.imageUrl) // This sets the thumbnail of the embed
                .setColor(mavi) // This sets the color of the embed, you can set this to anything if you look put a hex color picker, just make sure you put 0x infront of the hex
                .addField('Zaman Dilimi',`UTC${location.timezone}`, false) // This is the first field, it shows the timezone, and the true means `inline`, you can read more about this on the official discord.js documentation
                .addField('Ölçüm Birimi',`°${location.degreetype}`, false)// This is the field that shows the degree type, and is inline
                .addField('Sıcaklık',`${current.temperature} °C`, false)
                .addField('Hissedilen Sıcaklık', `${current.feelslike} °C`, false)
                .addField('Rüzgar Durumu',current.winddisplay, false)
                .addField('Nem Oranı', `%${current.humidity}`, false)
                .setTimestamp()
                .setFooter(`Spolify BOT - ${message.author.tag}`)
    message.channel.sendEmbed(embed)
})
};
 
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'havadurumu',
    description: 'Hava Durumunu Gösterir',
    usage: 'havadurumu'
};