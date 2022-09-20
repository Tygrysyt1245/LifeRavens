const Discord = require('discord.js');

module.exports = {
    name: 'buttons',  //Nazwa naszej komendy (najlepiej tak jak nazywa się nasz plik) 
    description: 'Wysyła wiadomość z testowymi przyciskami', //Opis komendy
    usage: '!buttons',  //Nazwa naszej komendy (najlepiej tak jak nazywa się nasz plik plus na poczatek wykrzyknik)
    execute: async(message, args) => {

        let role = message.guild.roles.cache.find(r => r.name === "Uprawnienia do bota")

        if(message.member.roles.cache.some(r => r.name === "Uprawnienia do bota")){

        const buttons = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton()
            .setCustomId('testButtons1')
            .setLabel('To jest testowy przycisk')
            .setStyle("PRIMARY")
            .setDisabled(true),

            new Discord.MessageButton()
            .setCustomId('testButtons2')
            .setLabel('Test2')
            .setStyle('SECONDARY')
            .setEmoji('😺'),

            new Discord.MessageButton()
            .setCustomId('testButtons3')
            .setLabel('Test3')
            .setStyle('SUCCESS')
            .setEmoji('<:4178_mc_diamond_block:970661905049976882>'),

            new Discord.MessageButton()
            .setCustomId('testButtons4')
            .setLabel('Test4')
            .setStyle('DANGER'),

            new Discord.MessageButton()
            .setLabel('Test5')
            .setStyle('LINK')
            .setURL('https://discord.com/')

            
        );

        message.channel.send({ content: 'To jest testowa komenda', components: [buttons] });

    } else {
        message.channel.send('`[❌]` Niestety nie posiadasz uprawnień do tej komeny!!!')
    }

    }
}