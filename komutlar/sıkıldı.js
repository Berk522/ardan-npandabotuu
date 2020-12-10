const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const saldır = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Beni Eğlendir`)
.setDescription(`


`)
.setImage("https://cdn.discordapp.com/attachments/758750197882159115/785434234452967424/za.jpg")

message.channel.send(saldır)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['pandasıkıldı'], 
  permLevel: 0
};

exports.help = {
  name: "panda-sıkıldı",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'pandasıkıldı'
};