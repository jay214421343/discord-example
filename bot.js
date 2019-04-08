const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
 });
client.on('message'. message => {
    if (message.content === 'help') {
        message.reply('You can use this soon!);
                
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NTYxODM0NjExMTU2NTgyNDIw.XKtgTQ.y8Kp3F4aY7ML9bZH7-xa1gdHYB0);//where BOT_TOKEN is the token of our bot 
