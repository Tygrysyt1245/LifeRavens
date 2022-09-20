module.exports = {
    name: 'test',  //Nazwa naszej komendy (najlepiej tak jak nazywa się nasz plik) 
    description: 'Testowa komenda', //Opis komendy
    usage: '!test',  //Nazwa naszej komendy (najlepiej tak jak nazywa się nasz plik plus na poczatek wykrzyknik)
    execute: async(message, args) => {

        let role = message.guild.roles.cache.find(r => r.name === "Uprawnienia do bota")

        if(message.member.roles.cache.some(r => r.name === "Uprawnienia do bota")){
        message.channel.send('To jest testowa komenda'); //W nawiasie jest odpowieć bota

        } else {
            message.channel.send('`[❌]` Niestety nie posiadasz uprawnień do tej komeny!!!')
        }
    }
}