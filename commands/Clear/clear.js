module.exports = {
    name: 'clear',
    description: 'Clear messages!',
    async execute(message, args) {

        let role = message.guild.roles.cache.find(r => r.name === "Uprawnienia do bota")

        if(message.member.roles.cache.some(r => r.name === "Uprawnienia do bota")){
            
        if(!args[0]) return message.reply("Podaj ilość wiadomości, które chcesz usunąć!");
        if(isNaN(args[0])) return message.reply("Proszę podać liczbę rzeczywistą!");

        if(args[0] > 100) return message.reply("Nie możesz usunąć więcej niż 100 wiadomości!");
        if(args[0] < 1) return message.reply("Musisz usunąć co najmniej jedną wiadomość!");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });

    } else {
        message.channel.send('`[❌]` Niestety nie posiadasz uprawnień do tej komeny!!!')
    }

    }
}