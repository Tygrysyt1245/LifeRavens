const fs = require('fs');
const {
  Client,
  Collection,
  Intents
} = require('discord.js');
const config = require('./config.json');

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS
  ],
});

const Discord = require('discord.js');
client.discord = Discord;
client.config = config;

client.commands = new Discord.Collection();

const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));

    for(const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}

const prefix = '!';

client.once('ready', () =>
{
    console.log('bot jest online');

    client.user.setActivity('Zarządza serwerem', {type: 'LISTENING'})
});


client.on('messageCreate', async message =>
{ 
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if(!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('Ta komenda nie działa');
    }
});

client.on('interactionCreate', async interaction => {
  if(interaction.customId == 'role3') {
      const roleId = '1001153148708208650'; 
      const role = interaction.guild.roles.cache.get(roleId);

      if(interaction.member.roles.cache.has(roleId)) {
          await interaction.member.roles.remove(role);
          await interaction.reply({ content: `Usunięto rolę <@&${roleId}>`, ephemeral: true });
      } else {
          await interaction.member.roles.add(roleId);
          await interaction.reply({ content: `Dodano rolę <@&${roleId}>`, ephemeral: true });
      }

      // await interaction.deferUpdate();
  }

  if(interaction.customId == 'role2') {
      const roleId = '1001153446910627840';
      const role = interaction.guild.roles.cache.get(roleId);

      if(interaction.member.roles.cache.has(roleId)) {
          await interaction.member.roles.remove(role);
          await interaction.reply({ content: `Usunięto rolę <@&${roleId}>`, ephemeral: true });
      } else {
          await interaction.member.roles.add(roleId);
          await interaction.reply({ content: `Dodano rolę <@&${roleId}>`, ephemeral: true });
      }

      // await interaction.deferUpdate();
  }

  if(interaction.customId == 'role1') {
      const roleId = '1001153579370946730';
      const role = interaction.guild.roles.cache.get(roleId);

      if(interaction.member.roles.cache.has(roleId)) {
          await interaction.member.roles.remove(role);
          await interaction.reply({ content: `Usunięto rolę <@&${roleId}>`, ephemeral: true });
      } else {
          await interaction.member.roles.add(roleId);
          await interaction.reply({ content: `Dodano rolę <@&${roleId}>`, ephemeral: true });
      }

      // await interaction.deferUpdate();
  }

  if(interaction.customId == 'Akceptdc') {
      const roleId = '1013827809371754688';
      const role = interaction.guild.roles.cache.get(roleId);

      if(interaction.member.roles.cache.has(roleId)) {
          await interaction.member.roles.remove(role);
          await interaction.reply({ content: `Nie Akceptujesz Regulaminu`, ephemeral: true });
      } else {
          await interaction.member.roles.add(roleId);
          await interaction.reply({ content: `Akceptujesz Regulamin`, ephemeral: true });
      }

      // await interaction.deferUpdate();
  }

  if(interaction.customId == 'Akceptmc') {
    const roleId = '1013830458540294204';
    const role = interaction.guild.roles.cache.get(roleId);

    if(interaction.member.roles.cache.has(roleId)) {
        await interaction.member.roles.remove(role);
        await interaction.reply({ content: `Nie Akceptujesz Regulaminu`, ephemeral: true });
    } else {
        await interaction.member.roles.add(roleId);
        await interaction.reply({ content: `Akceptujesz Regulamin`, ephemeral: true });
    }

    // await interaction.deferUpdate();
}

  if(interaction.customId == 'AkceptR') {
      const roleId = '1009415413207158796';
      const role = interaction.guild.roles.cache.get(roleId);

      if(interaction.member.roles.cache.has(roleId)) {
          await interaction.member.roles.remove(role);
          await interaction.reply({ content: `Nie Akceptujesz Regulaminu`, ephemeral: true });
      } else {
          await interaction.member.roles.add(roleId);
          await interaction.reply({ content: `Akceptujesz Regulamin`, ephemeral: true });
      }

      // await interaction.deferUpdate();
  }

});


client.login(require('./config.json').token);