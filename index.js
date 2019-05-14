const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log(`Ready..!! esta conectado como : ${bot.user.tag}`);
});

bot.on('message', (message) => {
    console.log(message.content);

    if(message.content == 'ping'){
        message.reply('pong');
    }

    if(message.content == 'hola'){
        message.channel.send(`Hola ${message.author} ... Gracias por escribirnos.`);
    }

    if(message.content.includes('!test')){
        message.channel.send('Feliz de que tu estes testeando.');
    }

    if(message.content.includes('jaja')){
        message.channel.send('De que te ries ?? :angry:');
    }

    if(message.content.includes('!facebook')){
        message.channel.send('https://www.facebook.com/VicepresidenciaBolivia/');
        message.channel.send('Y tal vez te interese ver nuestro Twitter :');
        message.channel.send('https://twitter.com/vpep_bol?lang=es');
    }
});

bot.login('NTY2NjIwMjY0NjIwNzUyOTA4.XLHohA.mwdJo27xZ3zYW9rXqKyzI5XHFbQ');