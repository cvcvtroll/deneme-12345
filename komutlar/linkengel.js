const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(` Bu komudu kullanabilmek için "Sunucuyu Yönet" yetkisine sahip olman gerek.`)
  if (!args[0]) return message.channel.send(`:no_entry: Reklam Filtresini Ayarlamak İçin \`s$$reklam aç\` | Kapatmak İstiyorsanız \`s$$reklam kapat\` Yazabilirsiniz`)
  if (args[0] !== 'aç' && args[0] !== 'kapat') return message.channel.send(`:no_entry: Reklam Filtresini Ayarlamak İçin \`s$$reklam aç\` | Kapatmak İstiyorsanız \`s$$reklam kapat\` Yazabilirsiniz`)

    if (args[0] == 'aç') {
    db.set(`reklamFiltre_${message.guild.id}`, 'acik')
    let i = await db.fetch(`reklamFiltre_${message.guild.id}`)
  message.channel.send(`Reklam Filtresi başarıyla ayarlandı.`)    
     
  } 

  if (args[0] == 'kapat') {
    
    let üye = await db.fetch(`reklamFiltre_${message.guild.id}`)
    if (!üye) return message.channel.send(`Reklam filtresini açtığına emin misin?.`)
    
    
    db.delete(`reklamFiltre_${message.guild.id}`)
    
    message.channel.send(`Reklam Filtresini Kapattım.`)
  }
 
};


exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['reklam', 'reklam-filtresi', 'reklamfiltresi', 'reklam-filtre', 'reklamfiltre'],
 permLevel: 0
};

exports.help = {
 name: 'reklam-engelleme',
 description: 'reklamm',
 usage: 's$$kanal'
};