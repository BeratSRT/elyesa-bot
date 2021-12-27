const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const config = require('../config.json');
let p = config.prefix
// let WestraGif = `https://cdn.discordapp.com/attachments/769957882166116353/769974488670011422/standard.gif`

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Kullanıcı Yardım Menüsü`)
 .setDescription(`
**${p}davet** \n-> Botu davet edersiniz.
**${p}shardbilgi** \n-> Botun shard bilgilerini gösterir.
**${p}pp** \n-> Etiketlediğiniz kişinin avatarını gösterir.
**${p}öneri** \n-> Bota öneri belirtirsiniz.
**${p}istatistik** \n-> Botun istatistiğini gösterir.
**${p}sonmesaj** \n-> Yazdığınız son mesajı gösterir.
`)
 .setFooter(`Elyesa`)
 .setTimestamp()
 message.channel.send(WestraEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};