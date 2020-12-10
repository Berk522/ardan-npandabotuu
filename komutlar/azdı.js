const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const saldır = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`ÇatPAt`)
.setDescription(`


`)
.setImage("https://cdn.discordapp.com/attachments/758750197882159115/785155176394653696/adojbakjdb.jpg")

message.channel.send(saldır)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['pandazdı'], 
  permLevel: 0
};

exports.help = {
  name: "panda-azdı",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'pandaazdı'
};