const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')
exports.run = (client, message, args, member) => {
const yardım = new Discord.MessageEmbed()
  .setAuthor(`Crypto Yardım Menüsü`, client.user.avatarURL())
  .setColor("0x36393F")
  .setThumbnail(client.user.avatarURL())
  .setDescription(`• Hey! <@${message.author.id}> beni kullandığın için teşekkür ederim!\n •  Prefixim: **e?**\n • Dilim: **TR** :flag_tr:\n • Üyelik durumu: ${db.has(`üyelikk_${message.author.id}`, "üyelik") ? `**Gold üye!**` : `**Normal üye!**`}`)
  .addField(" • Kategoriler:", `> • [e?kullanıcı](https://discord.gg/egVGTzG7Qy): **Kullanıcı yardım menüsünü gösterir.**\n > • [e?moderasyon](https://discord.gg/egVGTzG7Qy): **Moderasyon yardım menüsünü gösterir.**\n > •  [e?çekilişsistemi](https://discord.gg/egVGTzG7Qy): ** Çekiliş sistemi yardım menüsünü gösterir.**`)
  .addField(" • Güncelleme Notları:", "**Güncelleme v0.4:** Çekiliş sistemi eklendi!")  //.addField("• Sponsor:", `• Bize sponsor olan **Önem Bilişim**'e teşekkür ederiz! [Sunucu](https://discord.gg/FNnUg6z) • [Site](https://www.onembilisim.com/)`)
  .addField(" • Linkler:", "• [Davet Et](https://discord.com/oauth2/authorize?client_id=924366658397683722&permissions=8&scope=bot/) • [Destek Sunucusu](https://discord.gg/egVGTzG7Qy) ")
//  .setImage("https://cdn.discordapp.com/attachments/769957882166116353/769974488670011422/standard.gif")
.setFooter("Elyesa", message.author.avatarURL())
.setTimestamp()
  message.channel.send(yardım)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["y", "help", "h"],
    permLevel: 0
}

exports.help = {
    name: "yardım",
    description: "yardım",
    usage: "yardım"
}