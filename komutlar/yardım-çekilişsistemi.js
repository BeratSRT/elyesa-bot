const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const config = require('../config.json');
let prefix = config.prefix
// let WestraGif = `https://cdn.discordapp.com/attachments/769957882166116353/769974488670011422/standard.gif`

exports.run = (client, message) => {
 const Embed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Çekiliş Sistemi Yardım Menüsü`)
 .setDescription(`
**${prefix}çekiliş** \n-> Çekiliş başlatır.
**${prefix}reroll** \n-> Çekilişi yeniden çeker.
**${prefix}çekilişbitir** \n-> Çekilişi bitirir.
`)
 .setFooter(`Elyesa`)
 .setTimestamp()
// .setImage(WestraGif)
 message.channel.send(Embed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'çekilişsistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};