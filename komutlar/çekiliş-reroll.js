const ms = require('ms');
exports.run = (client, message, args) => {
if(!message.member.hasPermission('MANAGE_MESSAGES')){
        return message.channel.send('Yetersiz yetki! gereken yetki; `MESAJLARI YÖNET`.');
    }    // Giveaway message ID
    let messageID = args[0];
    // If no channel is mentionned
    if(!messageID){
        return message.channel.send('Bir mesaj IDsi belirtmelisin!');
    }   try {
        // Reroll the giveaway
        client.giveawaysManager.reroll(messageID);
        // Success message
        message.channel.send('Çekiliş yeniden çekildi!');
    } catch (error) {
        // If the giveaway isn't found
        if(error.startsWith(`${messageID} IDsi ile başlayan bir çekiliş bulunamadı!.`)){
            message.channel.send(""+messageID + " IDsi ile başlayan bir çekiliş bulunamadı!");
        }
        // If the giveaway is not ended
        if(error.startsWith(`${messageID} IDsi ile başlayan çekiliş bitmemiş!.`)){
            message.channel.send('Bu çekiliş bitmemiş!');
        }
    }
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yeniden"],
  permLevel: 0
}

exports.help = {
  name: "reroll",
  description: "reroll",
  usage: "w!reroll"
}