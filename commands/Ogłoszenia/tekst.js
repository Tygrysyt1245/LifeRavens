const Discord = require('discord.js');

module.exports = {
    name: 'tekst',  //Nazwa naszej komendy (najlepiej tak jak nazywa się nasz plik) 
    description: 'Komendan Ogłoszeniowa', //Opis komendy
    usage: '!tekst',  //Nazwa naszej komendy (najlepiej tak jak nazywa się nasz plik plus na poczatek wykrzyknik)
    execute: async(message, args) => {

        let role = message.guild.roles.cache.find(r => r.name === "Uprawnienia do bota")

        if(message.member.roles.cache.some(r => r.name === "Uprawnienia do bota")){
            
        const embed = new Discord.MessageEmbed()
        .setColor('#04aa6d')  //Color wybrać na Hex color (robi to pasek z boku wiadmości)
        .setThumbnail('https://i.imgur.com/AfFp7pu.png')
        .setTitle('Ogłoszenie 📑')
        .addFields(
            {name: 'Tekst', value: 'Tekst', inline: false},
        )
        .setTimestamp() //Na dolnym pasku pokazuje godzine wysłania komendy
        .setFooter({ text: 'Wykonawca komendy', iconURL: 'https://cdn.discordapp.com/avatars/713842348051791883/de605a789fde7649bcb73688a21b8ab1.webp?size=2048' }); //Na dolnym pasku pokazuje avatar author jak i tag

        message.channel.send({ embeds: [embed] });

    } else {
        message.channel.send('`[❌]` Niestety nie posiadasz uprawnień do tej komeny!!!')
    }

    }
}