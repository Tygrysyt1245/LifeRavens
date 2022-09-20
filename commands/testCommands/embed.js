const Discord = require('discord.js');

module.exports = {
    name: 'embed',  //Nazwa naszej komendy (najlepiej tak jak nazywa się nasz plik) 
    description: 'Testowa komenda', //Opis komendy
    usage: '!embed',  //Nazwa naszej komendy (najlepiej tak jak nazywa się nasz plik plus na poczatek wykrzyknik)
    execute: async(message, args) => {

        let role = message.guild.roles.cache.find(r => r.name === "Uprawnienia do bota")

        if(message.member.roles.cache.some(r => r.name === "Uprawnienia do bota")){

        const embed = new Discord.MessageEmbed()
        .setColor('#4fc718')  //Color wybrać na Hex color (robi to pasek z boku wiadmości)
        .setAuthor({ name: 'Some name', iconURL: 'https://cdn.discordapp.com/avatars/713842348051791883/de605a789fde7649bcb73688a21b8ab1.webp?size=2048', url: 'https://discord.js.org' })
        .setThumbnail('https://i.imgur.com/AfFp7pu.png')
        .setTitle('Tytuł embeda')
        .setDescription('__Opis__ **embeda**\naaaa')
        .addFields(
            {name: 'Nazwa fieldu 1', value: 'Opis Fieldu 1', inline: true},
            {name: 'Nazwa fieldu 2', value: 'Opis Fieldu 2', inline: true},
            {name: 'Nazwa fieldu 3', value: 'Opis Fieldu 3', inline: true},
            {name: 'Nazwa fieldu 4', value: 'Opis Fieldu 4'},
        )
        .setImage('https://cdn.discordapp.com/avatars/713842348051791883/de605a789fde7649bcb73688a21b8ab1.webp?size=2048')
        .setTimestamp() //Na dolnym pasku pokazuje godzine wysłania komendy
        .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' }); //Na dolnym pasku pokazuje avatar author jak i tag

        message.channel.send({ embeds: [embed] });

    } else {
        message.channel.send('`[❌]` Niestety nie posiadasz uprawnień do tej komeny!!!')
    }
        
    }
}