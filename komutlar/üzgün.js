const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const saldır = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`AgaB`)
.setDescription(`


`)
.setImage("https://cdn.discordapp.com/attachments/758750197882159115/785433341142368296/asdhakh.jpg")

message.channel.send(saldır)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['pandaüzgün'], 
  permLevel: 0
};

exports.help = {
  name: "panda-üzgün",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'pandaüzgün'
};