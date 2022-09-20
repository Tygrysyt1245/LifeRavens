const Discord = require('discord.js');

module.exports = {
    name: 'regulaminmc',  //Nazwa naszej komendy (najlepiej tak jak nazywa się nasz plik) 
    description: 'Testowa komenda', //Opis komendy
    usage: '!regulaminmc',  //Nazwa naszej komendy (najlepiej tak jak nazywa się nasz plik plus na poczatek wykrzyknik)
    execute: async(message, args) => {

        let role = message.guild.roles.cache.find(r => r.name === "Uprawnienia do bota")

        if(message.member.roles.cache.some(r => r.name === "Uprawnienia do bota")){
            
        const buttons = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton()
            .setCustomId('Akceptmc')
            .setLabel('Akceptuje Regulamin ✅')
            .setStyle("SECONDARY"),
        );

        const embed = new Discord.MessageEmbed()
        .setColor('#04aa6d')  //Color wybrać na Hex color (robi to pasek z boku wiadmości)
        .setTitle('Regulamin Serwera 📜')
        .addFields(
            {name: '**____§____**', value: '\u200b \n ``` ```\n \u200b'},
            {name: '**____§____**', value: '\u200b \n ``` ``` \n \u200b'},
            {name: '**____§____**', value: '\u200b \n ``` ``` \n \u200b'},
            {name: '**____§____**', value: '\u200b \n ``` ``` \n \u200b'},
        )
        .setImage('https://cdn.discordapp.com/attachments/1014182559472681030/1014182899337142362/Regulamin_Minecraft.png')

        message.channel.send({ embeds: [embed], components: [buttons]  });

    } else {
        message.channel.send('`[❌]` Niestety nie posiadasz uprawnień do tej komeny!!!')
    }

    }
}