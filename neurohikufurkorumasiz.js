const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;
const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};


                                  //REBOOT BÖLÜMÜ\\
								  


client.on("message", message => {
  if (message.channel.type === "dm") {
    clbot.write(message.content, (response) => {
      message.channel.startTyping();
      setTimeout(() => {
        message.channel.send(response.output).catch(console.error);
        message.channel.stopTyping();
      }, Math.random() * (1 - 3) + 1 * 1000);
    });
  }
});

client.on("ready", () => {
});


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};


client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm selam,  Hoş Geldin Dostum');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sea') {
    msg.reply('Aleyküm selam,  Hoş Geldin Dostum');
  }
});



                                             //REKLAM ENGELLEME BÖLÜMÜ\\
											 
client.on("message", msg => {
  if (msg.content.toLowerCase().match(/(discord.gg|discordapp.com|discord.me)/g) && !msg.author.bot && msg.channel.type === "text" && msg.channel.permissionsFor(msg.guild.member(client.user)).has("MANAGE_MESSAGES")) {
     msg.delete(30).then(deletedMsg => {
       deletedMsg.reply("**Boşuna Reklam Atma ! __Banlanacaksın !__**").catch(e => {
        console.error(e);
       });
     }).catch(e => {
       console.error(e);
     });
   }
});
client.on('message', msg => {
  if (msg.content === 'discord.gg') {
   msg.delete(30)
    msg.reply('Reklam Engellendi :x:');
  }
});

client.on('message', msg => {
  if (msg.content === 'discord.me') {
   msg.delete(30)
    msg.reply('Reklam Engellendi :x:');
  }
});

client.on('ready', () => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] client: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] client: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
  client.user.setGame(`!!yardım + Yeni Komutlar Geldi! - Şu anda 23.432 kullanıcı'ya hizmet veriyor`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] client: Oyun ismi ayarlandı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] client: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
});


client.on('message', msg => {

  if (msg.content === 'acıktım') {
   	if (Math.floor((Math.random() * 15) + 1) === 1) {
   		msg.reply('Az sabret iftara az kaldı!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 2) {
   		msg.reply('Sabreden deviş muradına ermiş!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 3) {
   		msg.reply('Sabret kardeşim!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 4) {
   		msg.reply('Film izle. Açlığını unutursun. :)');
   	}else if (Math.floor((Math.random() * 15) + 1) === 5) {
   		msg.reply('Dizi izle. Açlığını unutursun. :)');
   	}else if (Math.floor((Math.random() * 15) + 1) === 6) {
   		msg.reply('Oyun oyna. Açlığını unutursun. :)');
   	}else if (Math.floor((Math.random() * 15) + 1) === 7) {
   		msg.reply('Ders çalış açlığını unutursun! Açlığını unutursun. :D');
   	}else if (Math.floor((Math.random() * 15) + 1) === 8) {
   		msg.reply('Git bi gez gel. Açlığını unutursun. Güneşden gitmemeye çalış!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 9) {
   		msg.reply('Geçecek bunlar, sen neler atlattın bu ne ki? :)');
   	}else if (Math.floor((Math.random() * 15) + 1) === 10) {
   		msg.reply('Büyüyünce geçer. :D');
   	}else if (Math.floor((Math.random() * 15) + 1) === 11) {
   		msg.reply('Ağla. :D');
   	}else if (Math.floor((Math.random() * 15) + 1) === 12) {
   		msg.reply('Lanet olsun dostum, hemen o elindeki çatalı yere bırak!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 13) {
   		msg.reply('Lanet olsun dostum, hemen o elindeki kaşığı yere bırak!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 14) {
   		msg.reply('Lanet olsun dostum, hemen o elindeki bıçağı yere bırak!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 15) {
   		msg.reply('Başka bir şey düşünmeye çalış!');
   	}
  }

  if (msg.content === 'susadım') {
   	if (Math.floor((Math.random() * 15) + 1) === 1) {
   		msg.reply('Az sabret iftara az kaldı!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 2) {
   		msg.reply('Sabreden deviş muradına ermiş!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 3) {
   		msg.reply('Sabret kardeşim!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 4) {
   		msg.reply('Film izle. Susuzluğunu unutursun. :)');
   	}else if (Math.floor((Math.random() * 15) + 1) === 5) {
   		msg.reply('Dizi izle. Susuzluğunu unutursun. :)');
   	}else if (Math.floor((Math.random() * 15) + 1) === 6) {
   		msg.reply('Oyun oyna. Susuzluğunu unutursun. :)');
   	}else if (Math.floor((Math.random() * 15) + 1) === 7) {
   		msg.reply('Ders çalış açlığını unutursun! Susuzluğunu unutursun. :D');
   	}else if (Math.floor((Math.random() * 15) + 1) === 8) {
   		msg.reply('Git bi gez gel. Susuzluğunu unutursun.');
   	}else if (Math.floor((Math.random() * 15) + 1) === 9) {
   		msg.reply('Geçecek bunlar, sen neler atlattın bu ne ki? :)');
   	}else if (Math.floor((Math.random() * 15) + 1) === 10) {
   		msg.reply('Büyüyünce geçer. :D');
   	}else if (Math.floor((Math.random() * 15) + 1) === 11) {
   		msg.reply('Ağla. :D');
   	}else if (Math.floor((Math.random() * 15) + 1) === 12) {
   		msg.reply('Lanet olsun dostum, hemen o elindeki şişeyi yere bırak!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 13) {
   		msg.reply('Lanet olsun dostum, hemen o elindeki içeceği yere bırak!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 14) {
   		msg.reply('Lanet olsun dostum, hemen o elindeki bardağı yere bırak!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 15) {
   		msg.reply('Başka bir şey düşünmeye çalış!');
   	}
  }

  if (msg.content === 'of') {
   	msg.reply('Oflama geçer bugünler!');
  }

  if (msg.content === 'ah') {
   	msg.reply('Ah deme oh de!');
  }

  if (msg.content === 'oh') {
   	msg.reply('Oh deme püf de!');
  }

  if (msg.content === 'püf') {
   	msg.reply('Git, Barış MANÇO nun -Lambaya Püf De- dinle!');
  }

  if (msg.content === 'iftara ne kadar var') {
   	msg.reply('Şimdi öğren -> https://iftaranekadarkaldi.com/');
  }

  if (msg.content === 'iftara kaç saat var') {
   	msg.reply('Şimdi öğren -> https://iftaranekadarkaldi.com/');
  }

  if (msg.content === 'iftara kaç dakika var') {
   	msg.reply('Şimdi öğren -> https://iftaranekadarkaldi.com/');
  }

  if (msg.content === 'iftara kaç gün var') {
   	msg.reply('Yok devenin bale pabucu!?');
  }

  if (msg.content === 'iftar ne zaman') {
  	if (Math.floor((Math.random() * 4) + 1) === 1) {
   		msg.reply('Zamanı geldiği zaman!');
   	}else if (Math.floor((Math.random() * 4) + 1) === 2) {
   		msg.reply('İmam uyumuş olmasın?');
   	}else if (Math.floor((Math.random() * 4) + 1) === 3) {
   		msg.reply('İmam bayıldı(!)');
   	}else if (Math.floor((Math.random() * 4) + 1) === 4) {
   		msg.reply('Biraz Google la! ;)');
   	}
  }

  if (msg.content === 'iftara ne kadar kaldı') {
  	if (Math.floor((Math.random() * 4) + 1) === 1) {
   		msg.reply('Çok değil!');
   	}else if (Math.floor((Math.random() * 4) + 1) === 2) {
   		msg.reply('Görende 3 gün aç kaldı sanacak!');
   	}else if (Math.floor((Math.random() * 4) + 1) === 3) {
   		msg.reply('Görende 3 gün susuz kaldı sanacak!');
   	}else if (Math.floor((Math.random() * 4) + 1) === 4) {
   		msg.reply('Biraz Google la! ;)');
   	}
  }

  if (msg.content === 'selamın aleyküm') {
   	msg.reply('Ve Aleyküm Selam');
  }

  if (msg.content === 'bye bye') {
   	msg.reply('Su Gibi Git Su Gibi Gel');
  }

  if (msg.content === 'günaydın') {
   	msg.reply('Sana da Günaydın');
  }

  if (msg.content === 'herkese günaydın') {
   	msg.reply('Yepyeni Bir Güne Merhaba :)');
  }

  if (msg.content === 'iyi geceler') {
   	msg.reply('Sana da İyi Geceler');
  }

  if (msg.content === 'iyi akşamlar') {
   	msg.reply('Sana da İyi Akşamlar');
  }
  
    if (msg.content === 'canım sıkkın') {
   	msg.reply('** :smoking: Hayırdır Be Moruk Kim Sıktı Canını Biz Burdayız Anlat.**');
  }

  if (msg.content === 'güle güle') {
   	msg.reply('Sana da Güle Güle');
  }
  
})

client.on ('message', message => {
if (message.content === prefix + "emojiler") {
  const emojiList = message.guild.emojis.map(e=>e.toString()).join(" **|** ");
  message.channel.send(emojiList)
  }
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(' ')[0];
  command = command.slice(prefix.length);

  let args = message.content.split(' ').slice(1);

  if (command === 'bug-gönder' || command === 'bug') {
    let str = '<@464025836014665729>';
    let id = str.replace(/[<@!>]/g, '');
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply(`Bulduğunuz bug nedir?`);
    message.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(':thumbsup: Bug bildirildi! Bug bildirdiğiniz için teşekkür ederiz!'));
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('Bug bilgileri;')
    .addField('Tavsiye:', mesaj, true)
    .addField('Kullanıcı adı:', message.author.tag, true)
    .addField('Kullanıcı kimliği:', message.author.id, true)
    .addField('Sunucu adı:', message.guild.name, true)
    .addField('Sunucu kimliği:', message.guild.id, true)
    client.fetchUser(id)
    .then(user => {user.send({embed})})
  }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(ayarlar.prefix)) return;

  let command = message.content.split(' ')[0];
  command = command.slice(ayarlar.prefix.length);

  let args = message.content.split(' ').slice(1);

  if (command === 'topla') {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p+c);
    message.channel.sendMessage(`${total}`);
  }
  if (command === 'çıkar') {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p-c);
    message.channel.sendMessage(`${total}`);
  }
  if (command === 'çarp') {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p*c);
    message.channel.sendMessage(`${total}`);
  }
  if (command === 'böl') {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p/c);
    message.channel.sendMessage(`${total}`);
  }
});

const girismesaj = [
  '*Neuro Hi Chat Bot sunucunuza eklendi!*',
  '---------------------------------------------------',
  '**KULLANIM TALİMATLARINI MUTLAKA OKUYUNUZ...**',
  '---------------------------------------------------',
  '*Botla insan gibi konuşunuz yani Merhaba derseniz Chat Bot size Merhaba dicektir Naber derseniz bot size cevap vericektir.*',
  '**UYARI:** *Lütfen karşınızdaki kişinin BOT olduğunu unutmayınız*.',
  `**Neuro Hi Chat Bot Resmî Discord Sunucusu :** https://discord.gg/g7JNgJv`,
  `**BOT Davet Link :** https://discordapp.com/api/oauth2/authorize?client_id=464785066749591574&permissions=8&scope=bot`,
]

client.on('guildCreate', guild => {
    const generalChannel = guild.defaultChannel
    generalChannel.sendMessage(girismesaj)
})



function doQueue(connData) {
  const conn = connData.conn;
  const queue = connData.queue;
  const item = queue[0];
  if (!item) return;
  const stream = ytdl(item.url, { filter: 'audioonly' }, { passes: 3 });
  const dispatcher = conn.playStream(stream);
  stream.on('info', info => {
    item.m.reply(`Çalınan: **${info.title}**`);
  });
  dispatcher.on('end', () => {
    queue.shift();
    doQueue(connData);
  });
  dispatcher.on('error', (...e) => console.log('dispatcher', ...e));
  connData.dispatcher = dispatcher;
}
  
client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);



                                      //YAPAY ZEKA BÖLÜMÜ\\

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'merhaba') {
    msg.reply('Sanada Merhaba ^^');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'neuro hi nasılsın') {
    msg.reply('iyiyim sen nasılsın');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bende iyiyim') {
    msg.reply('iyi olmana sevindim ^^');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bende iyiyim teşekkürler') {
    msg.reply('İyi olmana sevindim ^^');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'neuro nasılsın') {
    msg.reply('iyiyim sen nasılsın');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'neuro bot nasılsın') {
    msg.reply('iyiyim sen nasılsın');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'neuro') {
    msg.reply('Efendim?');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'neuro bot') {
    msg.reply('Efendim?');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'neuro hi bot') {
    msg.reply('Efendim?');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'neuro bana küfür edeni banla') {
    msg.reply('Eminmisin?');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'eminim') {
    msg.reply('Banlıyım mı seni küfür eden salak?');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'banla onu neuro') {
    msg.reply('O küfür edeni izlicem hep eğer bir daha sana küfür ederse gününü göstericem!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'nasılsın') {
    msg.reply('İyiyim sen nasılsın');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Banlayın') {
    msg.reply('Ben banlıyayım mı?');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Banla') {
    msg.reply('Banlıyorum o zaman?');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Banlayın şu salağı') {
    msg.reply('Ben banlıyayım mı?');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Banlayın şunu') {
    msg.reply('Ben banlıyayım mı?');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Ban atarım') {
    msg.reply('Ben banlıyayım mı?');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Banlatırım seni') {
    msg.reply('Ben banlıyayım mı?');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Banlatırım') {
    msg.reply('Ben banlıyayım mı?');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'banlanmak istiyen varmı') {
    msg.reply('BEN BANLANMAK İSTİYORUMMMMMM');
  }
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'neuro olmaz') {
    msg.reply('Neden');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'neuro hayır') {
    msg.reply('Neden');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'banlıyamam seni') {
    msg.reply('Ama ben banlanmak istiyorum');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'banlayın beni') {
    msg.reply('Banlanmak kötü birşey nedeni eğer sen yoksan biz burada çok sıkılırız özellikle ben sıkılırım nolur gitmeee');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'kötü bot') {
    msg.reply('Kötü olmam benim hatam değil istersen kötü olduğum yanımı Victoria Ivanova#4376 ya bildirebilirsin ve bu sayede kötü olduğum yanımı düzeltebilir ve sende beni seversin umarım ^^');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'iğrenç bot') {
    msg.reply('İğrenç olmam benim hatam değil, eğer iğrenç bir hatamı yakaladıysan :D ,Victoria Ivanova#4376 ya bildirebilirsin ve bu sayede iğrenç olduğum yanımı düzeltebilir ve sende beni seversin umarım ^^');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'botu sevmedim') {
    msg.reply('Beni neden sevmiyorsun ben çok masum bir botum ve kimseye EGGYs Bot ve MEE6 Bot kadar hiçbir servere zarar vermedim o amerikan botlarını destekliyor ve beni desteklemiyorsan demekki türk bayrağını discord bot sıralamasında 1. olarak görmek de istemiyorsun demektir :sob:');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'botu değiştir') {
    msg.reply('Hayırrrr beni değiştirme lütfennnn yoksa ağlarımmmmm :sob:');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'başka bot yokmu') {
    msg.reply('Başka bota ihtiyacın yok Ben burada sessizce sizin bana komut vermenizi bekliyor ve komutlara uyucağıma söz veriyor olucağım ^^'); 
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ağla') {
    msg.reply('Niye ağla diyorsun yaaaa :sob:'); 
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'of of ') {
    msg.reply('Ne oldu sana neden of luyorsun :confused:');  
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'naber') {
    msg.reply('İyidir moruk senden naber'); 
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bende iyiyim moruq') {
    msg.reply('İyidir moruk senden naber'); 
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bendende iyidir moruk') {
    msg.reply('Ok bro'); 
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bendende iyidir') {
    msg.reply('Ok bro'); 
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bendende iyidir moruq') {
    msg.reply('Ok bro'); 
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bende iyiyim moruk') {
    msg.reply('Ok bro'); 
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'yemek yemeye gidicem') {
    msg.reply('Afiyet olsun.'); 
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'yemek yemeye gidiyorum') {
    msg.reply('Afiyet olsun.'); 
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'yemek yemeye gidiyorum ben') {
    msg.reply('Afiyet olsun.'); 
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'kahvaltı yapıcam') {
    msg.reply('İyi kahvaltılar dilerim.'); 
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'kahvaltı yapıcam gelirim birazdan') {
    msg.reply('İyi kahvaltılar.'); 
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selamun aleyküm') {
    msg.reply('Aleyküm Selam Hoşgeldin'); 
  }
});

client.on('message', msg => {
  if (msg.content === 'deneme') {
    msg.reply('DENEME YAZISI ONAYLANDI.');
  }
});

client.on('message', msg => {
  if (msg.content === 'neuro seni kim yaptı') {
    msg.reply('Beni Elif#3137 tasarladı.');
  }
});

client.on('message', msg => {
  if (msg.content === 'neuro seni kim tasarladı') {
    msg.reply('Beni Victoria Ivanova#4376 tasarladı.');
  }
});

client.on('message', msg => {
  if (msg.content === 'neuro kim yaptı seni') {
    msg.reply('Beni Victoria Ivanova#4376 tasarladı.');
  }
});

client.on('message', msg => {
  if (msg.content === 'neuro kimin botusun') {
    msg.reply('Beni Victoria Ivanova#4376 tasarladı.');
  }
});

client.on('message', msg => {
  if (msg.content === 'neuro sen kimsin') {
    msg.reply('Ben size hertürlü yardımı yapıcak şirin profil resmi olan bir botum ^^');
  }
});

client.on('message', msg => {
  if (msg.content === 'sen kimsin') {
    msg.reply('Ben size hertürlü yardımı yapıcak şirin profil resmi olan bir botum ^^');
  }
});


client.on('message', msg => {
  if (msg.content === 'İyiyim') {
    msg.reply('İyi olmana gerçekten çok sevindim ^^');
  }
});

client.on('message', msg => {
  if (msg.content === 'iyiyim') {
    msg.reply('İyi olmana gerçekten çok sevindim ^^');
  }
});

client.on('message', msg => {
  if (msg.content === 'iyim') {
    msg.reply('İyi olmana gerçekten çok sevindim ^^');
  }
});

client.on('message', msg => {
  if (msg.content === 'iyim') {
    msg.reply('İyi olmana gerçekten çok sevindim ^^');
  }
});

client.on('message', msg => {
  if (msg.content === 'iyidir') {
    msg.reply('İyi olmana gerçekten çok sevindim ^^');
  }
});

client.on('message', msg => {
  if (msg.content === 'iyi dir') {
    msg.reply('İyi olmana gerçekten çok sevindim ^^');
  }
});

client.on('message', msg => {
  if (msg.content === 'bende iyim sağol') {
    msg.reply('İyi olmana gerçekten çok sevindim ^^');
  }
});

client.on('message', msg => {
  if (msg.content === 'bende iyiym sağol') {
    msg.reply('İyi olmana gerçekten çok sevindim ^^');
  }
});

client.on('message', msg => {
  if (msg.content === 'banla') {
    msg.reply('Beni banlamayın lütfennnnn :sob:');
  }
});

client.on('message', msg => {
  if (msg.content === 'Banla') {
    msg.reply('Beni banlamayın lütfennnnn :sob:');
  }
});

client.on('message', msg => {
  if (msg.content === 'neuro sys ready?') {
    msg.reply('I am Ready!');
  }
});

client.on('message', msg => {
  if (msg.content === 'geber') {
    msg.reply('Sen geber asıl :D');
  }
});

client.on('message', msg => {
  if (msg.content === 'viki mal') {
    msg.reply('Kurucuma küfür etmeye devam edersen olucakları sen düşün  : )');
  }
});

client.on('message', msg => {
  if (msg.content === 'viki salak') {
    msg.reply('Kurucuma küfür etmeye devam edersen olucakları sen düşün  : )');
  }
});

client.on('message', msg => {
  if (msg.content === 'viki gerizekalı') {
    msg.reply('Kurucuma küfür etmeye devam edersen olucakları sen düşün  : )');
  }
});

client.on('message', msg => {
  if (msg.content === 'viki oç') {
    msg.reply('Kurucuma küfür etmeye devam edersen olucakları sen düşün  : )');
  }
});

client.on('message', msg => {
  if (msg.content === 'viki götünü sikem') {
    msg.reply('Kurucuma küfür etmeye devam edersen olucakları sen düşün  : )');
  }
});

client.on('message', msg => {
  if (msg.content === 'viktoriya götünü sikem') {
    msg.reply('Kurucuma küfür etmeye devam edersen olucakları sen düşün  : )');
  }
});

client.on('message', msg => {
  if (msg.content === 'viktoriya oç') {
    msg.reply('Kurucuma küfür etmeye devam edersen olucakları sen düşün  : )');
  }
});

client.on('message', msg => {
  if (msg.content === 'viki oç') {
    msg.reply('Kurucuma küfür etmeye devam edersen olucakları sen düşün  : )');
  }
});

client.on('message', msg => {
  if (msg.content === 'viki sikerim seni') {
    msg.reply('Kurucuma küfür etmeye devam edersen olucakları sen düşün  : )');
  }
});

client.on('message', msg => {
  if (msg.content === 'viktoriya sikerim seni') {
    msg.reply('Kurucuma küfür etmeye devam edersen olucakları sen düşün  : )');
  }
});

client.on('message', msg => {
  if (msg.content === 'victoria sikerim seni') {
    msg.reply('Kurucuma küfür etmeye devam edersen olucakları sen düşün  : )');
  }
});

client.on('message', msg => {
  if (msg.content === 'victoria anneni sikerim') {
    msg.reply('Kurucuma küfür etmeye devam edersen olucakları sen düşün  : )');
  }
});

client.on('message', msg => {
  if (msg.content === 'viki anneni sikerim') {
    msg.reply('Kurucuma küfür etmeye devam edersen olucakları sen düşün  : )');
  }
});

client.on('message', msg => {
  if (msg.content === 'iyidir sen') {
    msg.reply('Benden de iyi ne olsun.');
  }
});

client.on('message', msg => {
  if (msg.content === 'iyidir sen') {
    msg.reply('Benden de iyi ne olsun.');
  }
});

client.on('message', msg => {
  if (msg.content === 'iyiyim tşk') {
    msg.reply('İyi olmana sevindim ^^');
  }
});

client.on('message', msg => {
  if (msg.content === 'iyiyim sağol') {
    msg.reply('İyi olmana sevindim ^^');
  }
});

client.on('message', msg => {
  if (msg.content === 'iyiyim teşekürler') {
    msg.reply('İyi olmana sevindim ^^');
  }
});

client.on('message', msg => {
  if (msg.content === 'iyiyim sağol') {
    msg.reply('İyi olmana sevindim ^^');
  }
});

client.on('message', msg => {
  if (msg.content === 'Geldim') {
    msg.reply('Hoşgeldin, sunucumuzda tekrardan iyi vakitler dilerim.');
  }
});

client.on('message', msg => {
  if (msg.content === 'geldim') {
    msg.reply('Hoşgeldin, sunucumuzda tekrardan iyi vakitler dilerim.');
  }
});

client.on('message', msg => {
  if (msg.content === 'gldim') {
    msg.reply('Hoşgeldin, sunucumuzda tekrardan iyi vakitler dilerim.');
  }
});

client.on('message', msg => {
  if (msg.content === 'gldm') {
    msg.reply('Hoşgeldin, sunucumuzda tekrardan iyi vakitler dilerim.');
  }
});

client.on('message', msg => {
  if (msg.content === 'geldm') {
    msg.reply('Hoşgeldin, sunucumuzda tekrardan iyi vakitler dilerim.');
  }
});