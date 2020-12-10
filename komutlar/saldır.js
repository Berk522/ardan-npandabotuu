const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const saldır = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Saldırı Başlıyor :D`)
.setDescription(`


`)
.setImage("https://cdn.discordapp.com/attachments/758750197882159115/785153101073612830/saldr.jpg")

message.channel.send(saldır)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['saldır'], 
  permLevel: 0
};

exports.help = {
  name: "saldır",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'saldır'
};