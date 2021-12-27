const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const config = require('../config.json');
let p = config.prefix
// let WestraGif = `https://cdn.discordapp.com/attachments/769957882166116353/769974488670011422/standard.gif`

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Moderasyon Yardım Menüsü`)
 .setDescription(`
**${p}mod-log #kanal** \n-> Mod-log ayarlar.
**${p}mod-log sıfırla** \n-> Mod-log sıfırlar.
**${p}bansay** \n-> Sunucuda kaç banlanan üye olduğunu gösterir.
**${p}ban @kullanıcı** \n-> Etiketlediğiniz kullanıcıyı banlar.
**${p}küfürengel** \n-> Küfür engel açar/kapatır.
**${p}küfürlog #kanal** \n-> Küfür-log ayarlar.
**${p}sa-as aç** \n-> SA-AS sistemini açar.
**${p}sa-as kapat** \n-> SA-AS sistemini kapatır.
**${p}sil** \n-> Yazdığınız miktar kadar mesaj siler.
**${p}say** \n-> Sunucu bilgilerini gösterir.
**${p}oylama** \n-> Oylama yapar.
`)
 .setFooter(`Elyesa`)
 .setTimestamp()
// .setImage(WestraGif)
 message.channel.send(WestraEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mod'],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'moderasyon',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};