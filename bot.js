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

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NTUyODYxMzc3NzgyNjExOTg3.D2Fr5g.mwRlkdRIJLp9k3KZ2JXvk5aC74s);
