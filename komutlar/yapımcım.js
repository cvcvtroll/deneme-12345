const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message, params) => {
  const embed = new Discord.RichEmbed()
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**》 Yapımcım 《**", `<@826541954095251467>`)

 
  return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yapımcım'],
  permLevel: 0
};

exports.help = {
  name: 'yapımcım',
  description: 'Developed by AVNNN',
  usage: 'yapımcım'
}