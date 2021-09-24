const config = require("./config.json");
const Discord = require('discord.js');
const { ClientUser } = require("discord.js");
const clients = new Discord.Client({ intents: 14087});
const prefix = "-scp ";
var version = '1.6.5';
const packageJSON = require("./package.json");

clients.once('ready', async () => {
    let date = new Date();
    let time = await date.toLocaleString('en-US');
    let msg = `Bot successfully rebooted at ${time}\nCurrent version is **${version}**`;
    clients.channels.cache.get("890166184979361792").send(msg);
    clients.user.setActivity("SCP Foundation Bot By Peanut with ScionSpy and TaraV");
});

clients.on("messageCreate", async (message) => {
  try{

    if (!message.content.startsWith(prefix)) return;
  
    if (message.content.startsWith(prefix + "foo")) {
      message.channel.send("bar!");
    }else
    if (message.content == prefix + "help"){
      let Help = "**list**\n<:bot_reply:890435782551162940> Shows the list of all minecraft SCPs.\n**ping**\n<:bot_reply:890435782551162940> Shows the latency.\n**foo**\n<:bot_reply:890435782551162940> bar? Never heard that before.";
      let embed = new Discord.MessageEmbed()
        .setTitle("**Help Menu**")
        .setDescription(Help)
        .setColor('RANDOM')
        .setFooter("Help Menu by Peanut")
    
      
      message.channel.send({embeds: [embed]})




    }else
  if(message.content == prefix + "list"){
      let list = "\n**SCP-1** the unkillable cow\n**SCP-2** The Nether\n**SCP-2-1** The Wither\n**SCP-2-2** The Piglin Brutes\n**SCP-3** The End\n**SCP-3-1** EnderDragon\n**SCP-3-2** Endermite\n**SCP-3-3** End Crystal\n**SCP-4** Giant\n**SCP-5** The Undead";
      let embed = new Discord.MessageEmbed()
        .setTitle("**List Of Minecraft SCPs**")
        .setDescription(list)
        .setColor('RANDOM')
        .setFooter("list 2 for next page    page 1 of 4")
    
   
      message.channel.send({embeds: [embed]})
     }else

     if(message.content == prefix + "list 1"){
      let list = "\n**SCP-1** the unkillable cow\n**SCP-2** The Nether\n**SCP-2-1** The Wither\n**SCP-2-2** The Piglin Brutes\n**SCP-3** The End\n**SCP-3-1** EnderDragon\n**SCP-3-2** Endermite\n**SCP-3-3** End Crystal\n**SCP-4** Giant\n**SCP-5** The Undead";
      let embed = new Discord.MessageEmbed()
        .setTitle("**List Of Minecraft SCPs**")
        .setDescription(list)
        .setColor('RANDOM')
        .setFooter("list 2 for next page    page 1 of 4")
    
   
      message.channel.send({embeds: [embed]})
     }else


     if(message.content == prefix + "list 2"){
      let list = "\n**SCP-5-1** Witch\n**SCP-5-2** Failure of the Witch A (Zombie)\n**SCP-5-3** Failure of the Witch B (Skeleton)\n**SCP-7** The Pyro Axe\nOnly the Worthies Can Hold this Axe As Long as they Want\n**SCP-8** Slime bois\n**SCP-8-1** Giant slime\n**SCP-8-2** Smol slime\n**SCP-8** Pyro Axe 2 (Copy of Pyro Axe that was made from the Foundation)\n**SCP-10**  THe Ghost Machines\n**SCP-10-1** Ghost Machine";
      let embed = new Discord.MessageEmbed()
        .setTitle("**List Of Minecraft SCPs**")
        .setDescription(list)
        .setColor('RANDOM')
        .setFooter("list 3 for next page    page 2 of 4")
    
   
      message.channel.send({embeds: [embed]})
     }else

     if(message.content == prefix + "list 3"){
      let list = "\n**SCP-10-2** Unghost machine\n**SCP- 11** The Shy One\n**SCP-1985** The dark cornners\n**SCP 1985** is a house\n**SCP-2981** Unholy Machine\n**SCP-4001** the bone orchard\n**SCP-4001-1** Vex\n**SCP-4001-2** Ravager\n**SCP-4001-3** Pillager\n**SCP-4001-4** Uninvisible Evoker";
      let embed = new Discord.MessageEmbed()
        .setTitle("**List Of Minecraft SCPs**")
        .setDescription(list)
        .setColor('RANDOM')
        .setFooter("list 4 for next page    page 3 of 4")
    
   
      message.channel.send({embeds: [embed]})
     }else

     if(message.content == prefix + "list 4"){
      let list = "\n**SCP - 12** The Steam Punk Island\n**SCP - 12 - 1** The Core\n**SCP - 12 - 2** The Iron men\n**SCP - 13 - 1** The Corpse of a Titan ";
      let embed = new Discord.MessageEmbed()
        .setTitle("**List Of Minecraft SCPs**")
        .setDescription(list)
        .setColor('RANDOM')
        .setFooter("This is the last page we are still working on more!    page 4 of 4")
    
   
      message.channel.send({embeds: [embed]})
     }else


    if( message.content == prefix + "version" ){
      message.channel.send(`Current version is: ${version}`);
    }else
    if( message.content == prefix + "ping" ){
      let ping = `🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(clients.ws.ping)}ms`;
    
      let embed = new Discord.MessageEmbed()
        .setTitle("Pong!")
        .setDescription(ping)
        .setColor('RANDOM')
      
        message.channel.send({embeds: [embed]})

      }else
      if (message.content == prefix + "info"){
        let info = "**SCP Foundation Information**\n<:bot_reply:890435782551162940> .\n**ping**\n<:bot_reply:890435782551162940> Shows the latency.\n**foo**\n<:bot_reply:890435782551162940> bar? Never heard that before.";
        let embed = new Discord.MessageEmbed()
          .setTitle("**SCP Foundation Information**")
          .setDescription(info)
          .setColor('RANDOM')
          .setFooter("Help Menu by Peanut")
      
        
        message.channel.send({embeds: [embed]})

      }else

    if (message.author.bot) return;

    if (message.content == prefix + "dversion") {
        const discordJSVersion = packageJSON.dependencies["discord.js"];
        const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`Bot stats - Current Bot`)
            .addField("Discord.js version", discordJSVersion);
        message.channel.send({
            embeds: [embed]
        });
    }


  }catch(err){
    let ch = clients.channels.cache.get('417093499167440896');
    let msg = err;
    ch.send(msg, {code:'js', split:true});
  }
});

clients.login(config.token);

