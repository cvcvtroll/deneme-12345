const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message, args) => {
  message.reply("**Çalışıyorum Abi**");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "kontrol",
  description: "kontrol",
  usage: "kontrol"
};
