const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`PandBot`)
.setDescription(`


:white_small_square: **=**  \`p!kanal-koruma\` : **Kanal Koruma Aç/Kapat**
:white_small_square: **=**  \`p!küfür-engel\`:  **Küfür Engel Aç/Kapat**
:white_small_square: **=**  \`p!reklam-engel\` :  **Reklam Engel Aç/Kapat**
:white_small_square: **=**  \`p!istatistik\`:  **Botun İstatistiklerini Atar**
:white_small_square: **=**  \`p!temizle\`:  **Belirttiğiniz Sayıda Mesajı Siler**
:white_small_square: **=**  \`p!ping\`:  **Pinginizi Ölçüp Atar**
:white_small_square: **=**  \`p!avatar\`:  **Avatarınızı Atar**
:white_small_square: **=**  \`p!deprembilgi\` : **En Son Olan 10 Depremi Sıralar**

`)

.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help'], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};