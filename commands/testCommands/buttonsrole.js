const Discord = require('discord.js');

module.exports = {
    name: 'buttonsrole',  //Nazwa naszej komendy (najlepiej tak jak nazywa się nasz plik) 
    description: 'Wysyła wiadomość z testowymi przyciskami nadającymi role', //Opis komendy
    usage: '!buttonsrole',  //Nazwa naszej komendy (najlepiej tak jak nazywa się nasz plik plus na poczatek wykrzyknik)
    execute: async(message, args) => {

        let role = message.guild.roles.cache.find(r => r.name === "Uprawnienia do bota")

        if(message.member.roles.cache.some(r => r.name === "Uprawnienia do bota")){

        const buttons = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton()
            .setCustomId('role3')
            .setLabel('test3')
            .setStyle("PRIMARY"),

            new Discord.MessageButton()
            .setCustomId('role2')
            .setLabel('test2')
            .setStyle("PRIMARY"),

            new Discord.MessageButton()
            .setCustomId('role1')
            .setLabel('test1')
            .setStyle("PRIMARY"),
        );

        const embed = new Discord.MessageEmbed()
        .setTitle('Wybierz role')
        .setDescription('<@&1001153148708208650> - Opis roli 1\n<@&1001153446910627840> - Opis roli 2\n<@&1001153579370946730> - Opis roli 3\n');

        message.channel.send({ embeds: [embed], components: [buttons] });

    } else {
        message.channel.send('`[❌]` Niestety nie posiadasz uprawnień do tej komeny!!!')
    }

    }
}       