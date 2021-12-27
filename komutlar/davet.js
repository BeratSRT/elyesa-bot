const Discord = require('discord.js');
const { MessageButton } = require('discord-buttons');

exports.run = async (client, message, args) => {
  const embed = new Discord.MessageEmbed()
 .setDescription('Beni davet etmek için butona tıkla.')
 .setColor('RANDOM')

  const button = new MessageButton()
  .setLabel('Davet Et!')
  .setStyle('url')
  .setURL('https://discordapp.com/oauth2/authorize?client_id=924366658397683722&scope=bot&permissions=8'); //buraya bot davet linkinizi yazın

  return message.channel.send({ embed: embed, component: button });

};
exports.conf = {
  aliases: ['invite']
};
exports.help = {
  name: 'davet'
}; 