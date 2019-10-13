const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjMyNjA1NTQxMjYwMDY2ODE2.XaH38A.MLaLudVp4w8uNDimBB0eDgg9P9E';

const PREFIX = '%';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', message=>{
    
    let args = message.content.substring(PREFIX.length).split(" ");
    switch(args[0]){

        case 'ping':
            message.channel.sendMessage('pong!')
            break;
        case 'website':
            message.channel.sendMessage('https://NightlyHQ.namlesshosting.com')
            break;
        case 'store':
            message.channel.sendMessage('https://nightlyhq.craftingstore.net')
            break;
        case 'ip':
            message.channel.sendMessage('mc.nightlyhq.us')
            break;
        case 'ts':
            message.channel.sendMessage('ts.nightlyhq.us')
            break;
        case 'info':
            if(args[1] === 'version'){
                message.channel.sendMessage('Version 1.00');
            }else{
                message.channel.sendMessage('Invalid Args')
            }
        break;
        case 'help':
            message.channel.sendMessage('Here is a list of commands: %ping, %website, %store, %ip, %info %info version %ts. Note: these are not the only commands, other commands will also be added in the future.')
            break;
    }
})
        
bot.login(token);
