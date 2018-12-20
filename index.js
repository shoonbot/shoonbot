const Commando = require('discord.js-commando');
const bot = new Commando.Client({
    commandPrefix: "?"
});
const TOKEN = 'NTI0NjAwNTI0Mzk0MzMyMTgw.Dvq4Ew.WOOOQAhde76PSZd4I_Hqt_kpkPc'


bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('admin', 'Admin');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.currentTeamMembers = [];
global.servers = {};

bot.on('message', function(message){
    if(message.content == 'Hello')
    {
        message.channel.send('Hello ' + message.author + ', how are you?')
    }
});

bot.on('message', function(message){
    if(message.content == "gay")
    {
        message.channel.send('nou')
    }
});

bot.on('message', function(message){
    if(message.content == 'ari')
    {
        message.channel.send('FEETSIES owo')
    }
});

bot.on('message', function(message){
    if(message.content == 'ducan')
    {
        message.channel.send('BARK BARK BARK BARK')
    }
});

bot.on('ready', function(){
    console.log("Ready");
    bot.user.setActivity("?commands || With KyloBinx", {type: 'PLAYING'})
})

bot.login(TOKEN);

client.login(process.env.TOKEN);
