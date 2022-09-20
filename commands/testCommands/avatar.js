const Discord = require('discord.js');

module.exports = {
    name: 'avatar',  //Nazwa naszej komendy (najlepiej tak jak nazywa się nasz plik) 
    description: 'Pokazuje obecny avatar użytkownika', //Opis komendy
    usage: '!avatar (osoba)',  //Nazwa naszej komendy (najlepiej tak jak nazywa się nasz plik plus na poczatek wykrzyknik)
    execute: async(message, args) => {

        let role = message.guild.roles.cache.find(r => r.name === "Uprawnienia do bota")

        if(message.member.roles.cache.some(r => r.name === "Uprawnienia do bota")){

        let user = null;
        const mention = message.mentions.members.first();

        if(mention) user = mention.user;
        else user = message.author;

        const embed = new Discord.MessageEmbed()
        .setColor('#4fc718')
        .setTitle('Avatar')
        .setDescription(`Avatar  użytkownika ${user}\n[Kliknij tutaj](${user.avatarURL({ dynamic: true, size: 2048 })}), aby zobaczyć avatar w większej rozdzielczości`)
        .setImage(user.avatarURL({ dynamic: true, size: 1024 }))
        .setTimestamp()
        .setFooter({ text: 'Some footer text here', iconURL: 'https://cdn.discordapp.com/avatars/713842348051791883/de605a789fde7649bcb73688a21b8ab1.webp?size=2048', dynamic: true });

        message.channel.send({ embeds: [embed] })

    } else {
        message.channel.send('`[❌]` Niestety nie posiadasz uprawnień do tej komeny!!!')
    }

    }
}