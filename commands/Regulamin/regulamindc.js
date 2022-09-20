const Discord = require('discord.js');

module.exports = {
    name: 'regulamindc',  //Nazwa naszej komendy (najlepiej tak jak nazywa się nasz plik) 
    description: 'Testowa komenda', //Opis komendy
    usage: '!regulamindc',  //Nazwa naszej komendy (najlepiej tak jak nazywa się nasz plik plus na poczatek wykrzyknik)
    execute: async(message, args) => {

        let role = message.guild.roles.cache.find(r => r.name === "Uprawnienia do bota")

        if(message.member.roles.cache.some(r => r.name === "Uprawnienia do bota")){

        const buttons = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton()
            .setCustomId('Akceptdc')
            .setLabel('Akceptuje Regulamin ✅')
            .setStyle("PRIMARY"),
        );

        const embed = new Discord.MessageEmbed()
        
        .setColor('#04aa6d')  //Color wybrać na Hex color (robi to pasek z boku wiadmości)
        .setTitle('Regulamin Serwera 📜')
        .addFields(
            {name: '**____Postępuj zgodnie z Warunkami korzystania z usługi Discord:____**', value: '\u200b \n ➤ https://discord.com/terms  \n ➤ https://discord.com/guidelines \n \u200b'},
            {name: '**____§1. Ogólne zasady:____**', value: '\u200b \n ``` §1.1. Wchodząc na serwer discord, akceptujesz nasz regulamin. \n §1.2. Nieznajomość regulaminu nie zwalnia Cię z jego przestrzegania. \n §1.3. Wszystkich administratorów i użytkowników obowiązuje kultura osobista. \n §1.4. Skargi, odwołania od bana oraz błędy można zgłaszać na forum oraz na pv. \n §1.5. Zakaz wszelkiego rodzaju spamowania. \n §1.6. Zakaz używania modulatora głosu. \n §1.7. Zakaz krzyczenia/piszczenia do mikrofonu. \n §1.8. Zakaz nagrywania głosu i publikacji jakiejkolwiek zawartości tego typu publicznie. \n §1.9. Zakaz używania prefiksów z nazwą rang. \n §1.10 Działania mające na celu zaszkodzenie serwerowi są zabronione.```\n \u200b'},
            {name: '**____§2. Użytkownicy:____**', value: '\u200b \n ``` §2.1. Zakaz wszelkiego rodzaju obrażania innych użytkowników. \n §2.2. Zakaz używania nicków, awatarów, nazw kanałów i opisów które są wulgarne, rasistowskie, propagują nazizm, nienawiść i nietolerancję lub obrażają innych użytkowników. \n §2.3. Zakaz podszywania się pod administrację. \n §2.4. Zakaz bezzasadnego wchodzenia na kanały pomocy. \n §2.5. Zakaz reklamowania wszelkich treści niezwiązanych z siecią serwerów Life Ravens. \n §2.6. Zakaz puszczania muzyki na kanałach administracji/publicznych(Bez zgody wszyskich osób będących na kanale.). \n §2.7. Zakaz udostępniania i rozpowszechniania danych osobowych/zdjęć administracji/użytkowników. \n §2.8. Zakaz publikowania jakichkolwiek treści 18+ . \n §2.9. Zakaz oznaczania administracji bez powodu . \n §2.10. Zakaz pisania rzeczy niezgodnych z tematyką kanału.``` \n \u200b'},
            {name: '**____§3. Administracja:____**', value: '\u200b \n ``` §3.1. Każdy administrator ma obowiązek udzielić pomocy użytkownikowi, jeśli ten jej potrzebuje. \n §3.2. Administracja musi zachować bezstronność. \n §3.3. Administrator ma prawo do kickowania lub banowania użytkowników nieprzestrzegających regulaminu. \n §3.4. Administrator ma prawo wejść na kanał prywatny bez zgody użytkownika. \n §3.5. Administrator musi posiadać nick zgodny z nickiem na forum. \n §3.6. Administrator powinien dawać dobry przykład użytkownikom.``` \n \u200b'},
            {name: '**____§4.Opis na ile dostaje się bana:____**', value: '\u200b \n ``` §4.1. Podszywanie się pod administrację - Ban permanentny \n §4.2. Reklamowanie treści niezwiązanych z siecią serwerów Life Ravens - Ban permanentny \n §4.3. Udostępnianie i rozpowszechnianie danych osobowych - Ban wg. uznania administracji \n §4.4. Obrażanie administracji/użytkowników - Pouczenie -> Ban na 1 dzień -> Ban na tydzień \n §4.5. Spamowanie - Pouczenie -> Ban do 1 dnia \n §4.6. Nick/avatar niezgodny z regulaminem - Pouczenie -> Ban do 1 dnia \n §4.7. Bezzasadne wchodzenie na kanał pomocy - Pouczenie -> Ban do 1 dnia \n §4.8. Skakanie po kanałach - Pouczenie -> Ban do 1 dnia \n §4.9. Puszczanie muzyki na kanałach administracji/publicznych - Pouczenie -> Ban do 1 dnia \n §4.10. Używanie modulatora głosu - Pouczenie -> Ban do 1 dnia \n §4.11. Działanie na szkodę serwera - Ban na 1 dzień -> Ban na tydzień \n §4.12. Udostępnianie treści 18+ - Ban na dzień -> Ban na tydzień -> Ban permanentny \n §4.13.Oznaczanie administracji bez powodu - Pouczenie -> Mute na 1 dzień -> Ban na tydzień.``` \n \u200b'},
        )
        .setImage('https://cdn.discordapp.com/attachments/1014182559472681030/1014182830047232041/Regulamin_Discord.png')

        message.channel.send({ embeds: [embed], components: [buttons] });

    } else {
        message.channel.send('`[❌]` Niestety nie posiadasz uprawnień do tej komeny!!!')
    }

    }
}