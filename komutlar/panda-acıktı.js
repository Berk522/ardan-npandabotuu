const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const saldır = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Panda Acıkmış`)
.setDescription(`


`)
.setImage("https://cdn.discordapp.com/attachments/758750197882159115/785154645906554900/ham_ham.jpg")

message.channel.send(saldır)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['pandaacıktı'], 
  permLevel: 0
};

exports.help = {
  name: "panda-acıktı",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'pandaacıktı'
};