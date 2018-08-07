module.exports = member => {
  const channel = member.guild.channels.find('name', 'mod-log');
  if (!channel) return;
  channel.send(`** :inbox_tray:  |** ${member} **Sunucuya Giriş Yaptı! Sunucuya Hoş eldin ${member} .**`);
};
