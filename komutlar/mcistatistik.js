const Discord = require('discord.js')
const request = require('request')
exports.run = async (client, message, args) => {
let turan = args[0]
if(!turan) return message.channel.send("Bir Sunucu IP Yazmalısn!")
 
if(turan){
var fc = 'https://mcapi.xdefcon.com/server/' + turan + '/full/json'
request(fc, function (err, response, body) {
if (err) {
console.log(err);
message.channel.send('Sunucu bilgilerini alırken hata oluştu!')
}
body = JSON.parse(body);
if(body.serverStatus === "offline"){
message.channel.send(`Bu sunucu aktif değil veya Ip yanlış girdin!`)
          }
      
if(body.serverStatus === "online"){
  const embed = new Discord.RichEmbed()
  .setColor("RED")
  .setTitle('SUNUCU İST.')
  .setAuthor(`Ritmik Server`,client.user.avatarURL)
  .addField(`:rocket: İp Adresi`, "" + body.serverip, true)
  .addField(`:satellite: Port`, "25565",false)
  .addField(`:alarm_clock: Ping`, body.ping,false)
  .addField(`:dolls: Oyuncu Sayısı`, body.players + "/" + body.maxplayers,true)
  .setImage(`https://media.giphy.com/media/U8HONUrXXecS1HNTQG/giphy.gif`)
  .setTimestamp()
  .setFooter(`Ritmik Server`);
  message.channel.send(embed)
}
});
}
}
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ['mc'],
  permLevel: 0
};
exports.help = {
  name: 'mcistatistik',
  description: '',
  usage: ''
};