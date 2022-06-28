const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, msg, args) => {

  msg.react("👍")
  var user23 = msg.mentions.users.first();
  var id = msg.author
  var sayı = [1,2,3,4,5,6]

  var item = sayı[Math.floor(Math.random() * sayı.length)];

  msg.channel.send("》**Zar atılıyor**")

  msg.channel.send("https://media.tenor.com/images/afd885cf9751a4c6c33b699f6322143a/tenor.gif")

  setTimeout(() => {  msg.channel.send("》**Zar atıldı çıkan sayı**: "+item); }, 3000);

  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["atzar","zar"],
  permLevel: 0
};

var use = "zarat"

exports.help = {
  name: use,
  description: use,
  usage: use
};