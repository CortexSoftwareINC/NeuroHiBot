const Discord = require("discord.js");
const turuncu = 0xfbc713
const mavi = 0x2e34b1
const pembe = 0x9f1eff
var anime = ['https://get.wallhere.com/photo/illustration-anime-anime-girls-open-mouth-hoods-manga-original-characters-blushing-computer-wallpaper-mangaka-111040.png',
             'https://get.wallhere.com/photo/illustration-anime-anime-girls-artwork-pink-mangaka-262010.jpg',
             'http://www.fonstola.ru/pic/201211/1400x1050/fonstola.ru-83216.jpg',
             'https://i.resimyukle.xyz/M2aRc7.jpg',
             'https://get.wallhere.com/photo/illustration-anime-space-black-hair-graphic-design-hair-ART-girl-darkness-pirate-graphics-miku-computer-wallpaper-cg-artwork-795177.jpg',
             'https://i1.wallbox.ru/wallpapers/main2/201725/1498409058594fe862badd78.95061733.jpg',
             'https://c.wallhere.com/photos/f3/ce/2000x1125_px_Anime_Girls_lollipop-1008100.jpg!d',
             'http://wlpapers.com/images/anime-soccer-girl-1.jpg',
             'https://get.wallhere.com/photo/anime-anime-girls-brunette-long-hair-panties-underwear-blue-eyes-ass-looking-at-viewer-open-mouth-Irotoridori-no-Sekai-Kisaragi-Mio-1136058.jpg',
             'https://konachan.com/image/cbd25ad5226fb1a6b2a992cdaae92b32/Konachan.com%20-%2012253%20chinese_clothes%20chinese_dress%20natsume_aya%20oh_great%20panties%20tenjou_tenge%20underwear%20water.jpg',
             'https://static.wallpapers-anime.com/upload/20170529/630/9/E/3/9E3FEF.jpg',
             'http://animeonly.org/albums/userpics/0/68/Best-Anime-Girls-HD-Wallpapers-41.jpg',
             'https://cdn.wallaps.com/wallpapers/30000/24894.jpg',
             'https://get.wallhere.com/photo/anime-anime-girls-thigh-highs-see-through-clothing-skirt-wet-clothing-screenshot-mangaka-357828.jpg',
             'https://c.wallhere.com/photos/88/58/idolmaster_cinderella_girls_seifuku_shi_girl_brunette_posture_step-688373.jpg!d',
             'https://get.wallhere.com/photo/illustration-anime-anime-girls-purple-mist-cherry-blossom-computer-wallpaper-mangaka-33709.jpg',
             'http://moheban-ahlebeit.com/images/Anime-Wallpapers/Anime-Wallpapers-24.jpg',
             'https://static.zerochan.net/Shigino.Mutsumi.full.1666717.jpg',
             'https://get.wallhere.com/photo/illustration-anime-Vocaloid-Hatsune-Miku-screenshot-computer-wallpaper-165876.jpg',
             'https://get.wallhere.com/photo/Yuri-Shoutu-call-of-girl-Automaton-girl-997004.jpg',
             'http://www.home-img.com/uploads/data/69727/aa7b3b1411a5c39e26bdc2d7714a676a.jpg',
             'https://c.wallhere.com/photos/9a/8f/anime_girls_Kantoku_Your_Diary_Ayase_Sayuki-335858.jpg!d',
             'https://wallpapersite.com/images/pages/pic_h/5095.jpg',
             'http://s1.1zoom.net/prev/411/410403.jpg',
             'https://c.wallhere.com/photos/8b/b2/anime_anime_girls_Crimson_Avenger_Elsword_long_hair_redhead_red_eyes_sword-299889.jpg!d',
             'http://cdn2.wallpapersok.com/uploads/picture/501/296/296501/picture-296501.jpg?width=4040&height=2900&crop=true',
             'https://look.com.ua/pic/201708/2560x1600/look.com.ua-232949.jpg',
             'https://get.wallhere.com/photo/long-hair-anime-anime-girls-blue-eyes-artwork-necklace-black-hair-Vocaloid-pink-hair-hair-mouth-IA-Vocaloid-pink-mangaka-hime-cut-20664.jpg',
             'http://123hdwallpaperpic.com/download/20150717/vocaloid-ia-anime-anime-girl-crystal-ball-1500x844.jpg',
             'http://wallscollection.net/wp-content/uploads/2016/12/Anime-Girl-Wallpaper-Hd-Mobile-Compatible.jpg',
             'http://danbooru.donmai.us/cached/data/sample/__shinohara_sera_koiiro_soramoyou_drawn_by_gotou_nao__sample-236dd40fe19334009226f5335d80a916.jpg'
             ]

module.exports.run = async (bot, message, args) => {
    message.delete(1)
    var i = Math.floor(Math.random() * anime.length);
    const embed = new Discord.RichEmbed()
        .setDescription("Resimlerin tamamı [Google](https://www.google.com.tr/?gws_rd=ssl)'dan alınmıştır.")
        .setColor(pembe)
        .setImage(`${anime[i]}`)
        .setTimestamp()
        .setFooter(`FlameGUN - ${message.author.tag}`)
    message.channel.sendEmbed(embed)
}
 
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'anime',
    description: 'Anime Fotoğrafları Gösterir',
    usage: 'anime'
};