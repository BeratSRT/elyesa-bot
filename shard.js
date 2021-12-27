const Discord = require('discord.js');
const config = require('./config.json');
const bot = new Discord.Client()
const westra = new Discord.ShardingManager('./server.js', {
    totalShards: 1,
    token: process.env.token
});

westra.spawn(); 

westra.on('launch', shard => {
  console.log(`**${shard.id}** ID'li shard başlatıldı.`)
});

setTimeout(() => {
    westra.broadcastEval("process.exit()");
}, 21600000);