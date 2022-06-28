const Discord = require('discord.js');
const client = new Discord.Client();
module.exports.run = async (bot, message, args) => {
let cmf = args.join(" ").slice(0);
let user = message.author.username;
let guild = message.guild.name;
let guildid = message.guild.id;
let kanal = message.channel.name;
let channel = bot.channels.get("985215026946260992") //kayıtların tutulacağı kanal id sini girin
let Cmf = new Discord.RichEmbed()
.setTitle("Hata-Bug Rapor")
.setThumbnail("resim adresi")
.addField("Hata-Bug", cmf)
.addField("Rapor Eden", user, true)
.addField("Sunucu", guild, true)
.addField("Sunucu ID", guildid, true)
.addField("Kanal", kanal, true)
.setColor("#f49542")

message.channel.send(":white_check_mark:  **| Bug - Hata Raporu Başarı İle İletildi.**")
channel.send(cmf).then(i => i.react("⏳"))

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0  
};

exports.help = {
  name: 'bugreport',
  description: 'hata bildirimi.',
  usage: 'hata-bildir'
}