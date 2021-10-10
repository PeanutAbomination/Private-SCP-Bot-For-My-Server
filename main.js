const config = require("./config.json");
const Discord = require('discord.js');
const { clientUser } = require("discord.js");
const clients = new Discord.Client({ intents: 14087});
const prefix = "-scp ";


var version = '1.6.6'; 
var O5perm = "775247639083614218" || "735410155432312854" || "572987740283731969" || "692105056119554079" || "729573721735561236";
const packageJSON = require("./package.json");
const fs = require(`fs`);
var CuteImages = ["https://i.ibb.co/sJSYD9Q/cute2.jpg", "https://i.ibb.co/YcdzCPm/cute1.png","https://i.ibb.co/YkRpBk9/cute3.jpg","https://i.ibb.co/gTmW6Pc/cute4.jpg","https://i.ibb.co/c2d7206/cute5.jpg","https://i.ibb.co/tCVFbL1/cute6.jpg","https://i.ibb.co/4FTxnt2/cute7.jpg","https://i.ibb.co/xJDDNJm/cute8.jpg","https://i.ibb.co/B3YsmFn/cute9.png" ];
getImage = function() {
  return CuteImages[Math.floor(Math.random() * CuteImages.length)];
};
var music = "Crab Rave";
var artist = "Noise Storm";
var LinkArtist = "https://www.youtube.com/channel/UCp8OOssjSjGZRVYK6zWbNLg";
var LinkMusic = "https://www.youtube.com/watch?v=LDU_Txk06tM";
var MusicImage = "https://i.ibb.co/tq426zf/crap.jpg";
//The variable music image must be "https://i.ibb.co/abcdefg/image.png"
clients.commands = new Discord.Collection();
const commandFiles= fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
  const command = require(`./commands/${file}`);

  clients.commands.set(command.name,command)
}
var SayDelete = "1"




clients.once('ready', async () => {
    let date = new Date();
    let time = await date.toLocaleString('en-US');
    let msg = `Bot successfully rebooted at ${time}\nCurrent version is **${version}**`;
    clients.channels.cache.get("890166184979361792").send(msg);
    clients.user.setActivity(" -scp help");
});





clients.on("messageCreate", async (message) => {
  try{

    
    if (!message.content.startsWith(prefix) || message.author.bot) return;
            
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (message.content.startsWith("-scp db")){
      if (message.author.id == "775247639083614218"){
       if (message.content == prefix + "db"){
       let embed = new Discord.MessageEmbed()
       .setTitle("Database command(only for my master)")
       .setColor("BLUE")
       .addFields(
         {name: "check sec", value: "<:bot_reply:890435782551162940> Check's the bot archive database security"},
         {name: "count folder", value: "<:bot_reply:890435782551162940> Count the amount of file in the database"},
         {name: "check file", value: "<:bot_reply:890435782551162940> Check's the database file/folder existence"},
       )
       message.channel.send({embeds: [embed]})
     }else
     if (message.content.startsWith(prefix + "db check file ")){
       var TotalPath2 = "0"
       var FilePath2 = ""
      var filter = message.content
      var filter1 = filter.replace("-scp db check file ", "")
      const path1 = `./${filter1}`
      if (fs.existsSync(path1)) {
        var path1Results = "```true```"
        var TotalPath2 = ++TotalPath2
        var FilePath2 = FilePath2 + "C:/Users/1love/Dropbox/My PC (DESKTOP-MEST1TS)/Desktop/Bot Core Assets/SCP bot assets \n \n"
      }else
      if (!fs.existsSync(path1)) {
        var path1Results = "```false```"
      }
      message.channel.send("`Checking.....`").then(async message => {
        await message.delete()})
        let CheckMain = new Discord.MessageEmbed()
        .addFields(
          {name: "Checking database './SCP Bot assets':", value: '```C:/Users/1love/Dropbox/My PC (DESKTOP-MEST1TS)/Desktop/Bot Core Assets/SCP bot assets```'},
          {name: "Result:", value: `${path1Results}`},
        )
        .setFooter("Database cheacking operation 1 of 6")
        .setColor("DARK_NAVY")
          message.channel.send({embeds: [CheckMain]}).then(async message => {
            await message.delete()})
            


            const path2 = `./archive/${filter1}`
      if (fs.existsSync(path2)) {
        var path2Results = "```true```"
        var TotalPath2 = ++TotalPath2
        var FilePath2 = FilePath2 + "C:/Users/1love/Dropbox/My PC (DESKTOP-MEST1TS)/Desktop/Bot Core Assets/SCP bot assets/archive \n \n"
      }else
      if (!fs.existsSync(path2)) {
        var path2Results = "```false```"
      }
      message.channel.send("`Checking.....`").then(async message => {
        await message.delete()})
        let CheckMain2 = new Discord.MessageEmbed()
        .addFields(
          {name: "Checking database './archive':", value: '```C:/Users/1love/Dropbox/My PC (DESKTOP-MEST1TS)/Desktop/Bot Core Assets/SCP bot assets/archive \n \n```'},
          {name: "Result:", value: `${path2Results}`},
        )
        .setFooter("Database checking operation 2 of 6")
        .setColor("DARK_NAVY")
          message.channel.send({embeds: [CheckMain2]}).then(async message => {
            await message.delete()})


            const path3 = `./archive/ProfileImage/${filter1}`
            if (fs.existsSync(path3)) {
              var path3Results = "```true```"
              var TotalPath2 = ++TotalPath2
              var FilePath2 = FilePath2 + "C:/Users/1love/Dropbox/My PC (DESKTOP-MEST1TS)/Desktop/Bot Core Assets/SCP bot assets/archive/ProfileImage \n \n"
            }else
            if (!fs.existsSync(path3)) {
              var path3Results = "```false```"
            }
            message.channel.send("`Checking.....`").then(async message => {
              await message.delete()})
              let CheckMain3 = new Discord.MessageEmbed()
              .addFields(
                {name: "Checking database './SCPs':", value: '```C:/Users/1love/Dropbox/My PC (DESKTOP-MEST1TS)/Desktop/Bot Core Assets/SCP bot assets/archive/ProfileImage```'},
                {name: "Result:", value: `${path3Results}`},
              )
              .setFooter("Database checking operation 4 of 6")
              .setColor("DARK_NAVY")
                message.channel.send({embeds: [CheckMain3]}).then(async message => {
                  await message.delete()})


                  const path4 = `./archive/SCPs/${filter1}`
                  if (fs.existsSync(path4)) {
                    var path4Results = "```true```"
                    var TotalPath2 = ++TotalPath2
                    var FilePath2 = FilePath2 + "C:/Users/1love/Dropbox/My PC (DESKTOP-MEST1TS)/Desktop/Bot Core Assets/SCP bot assets/archive/SCPs \n \n"
                  }else
                  if (!fs.existsSync(path4)) {
                    var path4Results = "```false```"
                  }
                  message.channel.send("`Checking.....`").then(async message => {
                    await message.delete()})
                    let CheckMain4 = new Discord.MessageEmbed()
                    .addFields(
                      {name: "Checking database './SCPs':", value: '```C:/Users/1love/Dropbox/My PC (DESKTOP-MEST1TS)/Desktop/Bot Core Assets/SCP bot assets/archive/SCPs```'},
                      {name: "Result:", value: `${path4Results}`},
                    )
                    .setFooter("Database checking operation 4 of 6")
                    .setColor("DARK_NAVY")
                      message.channel.send({embeds: [CheckMain4]}).then(async message => {
                        await message.delete()})



                        const path5 = `./commands/${filter1}`
                        if (fs.existsSync(path5)) {
                          var path5Results = "```true```"
                          var TotalPath2 = ++TotalPath2
                          var FilePath2 = FilePath2 + "C:/Users/1love/Dropbox/My PC (DESKTOP-MEST1TS)/Desktop/Bot Core Assets/SCP bot assets/commands \n \n"
                        }else
                        if (!fs.existsSync(path5)) {
                          var path5Results = "```false```"
                        }
                        message.channel.send("`Checking.....`").then(async message => {
                          await message.delete()})
                          let CheckMain5 = new Discord.MessageEmbed()
                          .addFields(
                            {name: "Checking database './commands':", value: '```C:/Users/1love/Dropbox/My PC (DESKTOP-MEST1TS)/Desktop/Bot Core Assets/SCP bot assets/commands```'},
                            {name: "Result:", value: `${path5Results}`},
                          )
                          .setFooter("Database checking operation 5 of 6")
                          .setColor("DARK_NAVY")
                            message.channel.send({embeds: [CheckMain5]}).then(async message => {
                              await message.delete()})


                              const path6 = `./node_modules/${filter1}`
                              if (fs.existsSync(path6)) {
                                var path6Results = "```true```"
                                var TotalPath2 = ++TotalPath2
                                var FilePath2 = FilePath2 + "C:/Users/1love/Dropbox/My PC (DESKTOP-MEST1TS)/Desktop/Bot Core Assets/SCP bot assets/node_modules \n \n"
                              }else
                              if (!fs.existsSync(path6)) {
                                var path6Results = "```false```"
                              }
                              message.channel.send("`Checking.....`").then(async message => {
                                await message.delete()})
                                let CheckMain6 = new Discord.MessageEmbed()
                                .addFields(
                                  {name: "Checking database './commands':", value: '```C:/Users/1love/Dropbox/My PC (DESKTOP-MEST1TS)/Desktop/Bot Core Assets/SCP bot assets/node_modules```'},
                                  {name: "Result:", value: `${path6Results}`},
                                )
                                .setFooter("Database checking operation 6 of 6")
                                .setColor("DARK_NAVY")
                                  message.channel.send({embeds: [CheckMain6]}).then(async message => {
                                    await message.delete()})


            

            if (FilePath2 == ""){
              var FilePath2 = "N/A" 
            }

            message.channel.send("Doing one last check......").then(async message => {
            await message.delete()})
            message.channel.send("Compiling......").then(async message => {
              await message.delete()})

            let Conclusion = new Discord.MessageEmbed()
            .setTitle("Database checking conclusion")
            .addFields(
              {name: "Results:", value: "```" + `${TotalPath2}` + "```"},
              {name: "Paths:", value: "```" + `${FilePath2}` + "```"},
            )
            .setColor("GREEN")
            message.channel.send({embeds: [Conclusion]})
     }
    }else
    if (message.author.id !== "775247639083614218"){
      let embed = new Discord.MessageEmbed()
      .setTitle("Dude the database may leaked sensitive stuff you can't execute that command only my master can!")
      .setColor("RED")
      message.channel.send({embeds: [embed]})
    }
    }else
    if (message.content  == ("-scp set avatar")){
      let embed = new Discord.MessageEmbed()
      .setTitle("List of all the bot's available avatars")
      .setColor("#99B898")
      .addFields(
        { name:"dafault", value:"<:bot_reply:890435782551162940> Default bot's profile image"},
        { name:"scare hamster", value:"<:bot_reply:890435782551162940> Scare hamster profile picture"},
        { name:"lollipop", value:"<:bot_reply:890435782551162940> Hot anime girl using a lollipop"},
        { name:"bruh", value:"<:bot_reply:890435782551162940> Small Ice bear belike"},
        { name:"cat", value:"<:bot_reply:890435782551162940> Nyan cat glasses, nice"},
      )
      .setFooter("you can view the profile picture by using `show avatar <avatar name>`")
      message.channel.send({embeds: [embed]})
    }else
    if (message.content.startsWith("-scp show avatar")){
      if ((message.content.startsWith("-scp show avatar")) && (message.content !== prefix + "show avatar " + "bruh") && (message.content !== prefix + "show avatar " + "cat") && (message.content !== prefix + "show avatar " + "lollipop") && (message.content !== prefix + "show avatar " + "scare") && (message.content !== prefix + "show avatar " + "default") && (message.content !== prefix + "show avatar") && (message.author.id == "775247639083614218" || "735410155432312854" || "572987740283731969" || "692105056119554079" || "729573721735561236" || "213250789823610880")){
        let embed = new Discord.MessageEmbed()
        .setTitle("That avatar does not exsist in the database 😑")
        .setColor("RED")
        message.channel.send({embeds: [embed]})
      }else
      if (message.content == prefix + "show avatar default"){
        var avatarFilter = message.content
        var avatarFilter2 = avatarFilter.replace("-scp show avatar", "")
        let embed = new Discord.MessageEmbed()
        .setTitle(`${avatarFilter2} profile image`)
        .setImage("attachment://default.png")
        message.channel.send({embeds: [embed], files: [`./archive/ProfileImage/default.png`]})
      }else
      if (message.content == prefix + "show avatar cat"){
        var avatarFilter = message.content
        var avatarFilter2 = avatarFilter.replace("-scp show avatar", "")
        let embed = new Discord.MessageEmbed()
        .setTitle(`${avatarFilter2} profile image`)
        .setImage("attachment://cat.jpg")
        message.channel.send({embeds: [embed], files: [`./archive/ProfileImage/cat.jpg`]})
      }else
      if (message.content == prefix + "show avatar scare hamster"){
        var avatarFilter = message.content
        var avatarFilter2 = avatarFilter.replace("-scp show avatar", "")
        let embed = new Discord.MessageEmbed()
        .setTitle(`${avatarFilter2} profile image`)
        .setImage("attachment://scare.jpg")
        message.channel.send({embeds: [embed], files: [`./archive/ProfileImage/scare.jpg`]})
      }else
      if (message.content == prefix + "show avatar lollipop"){
        var avatarFilter = message.content
        var avatarFilter2 = avatarFilter.replace("-scp show avatar", "")
        let embed = new Discord.MessageEmbed()
        .setTitle(`${avatarFilter2} profile image`)
        .setImage("attachment://lollipop.jpg")
        message.channel.send({embeds: [embed], files: [`./archive/ProfileImage/lollipop.jpg`]})
      }else
      if (message.content == prefix + "show avatar bruh"){
        var avatarFilter = message.content
        var avatarFilter2 = avatarFilter.replace("-scp show avatar", "")
        let embed = new Discord.MessageEmbed()
        .setTitle(`${avatarFilter2} profile image`)
        .setImage("attachment://bruh.jpg")
        message.channel.send({embeds: [embed], files: [`./archive/ProfileImage/bruh.jpg`]})
      }
    }else
    if ((message.content == ("-scp set avatar scare hamster")) && (message.author.id == "775247639083614218" || "735410155432312854" || "572987740283731969" || "692105056119554079" || "729573721735561236" || "213250789823610880")){
      let set = clients.user.setAvatar('./archive/ProfileImage/scare.jpg');
      let embed = new Discord.MessageEmbed()
      .setTitle("Successfully set the bots avatar!")
      .setColor("GREEN")
      .setImage("attachment://scare.jpg")
      .setDescription("")
      message.channel.send({set, embeds: [embed], files: [`./archive/ProfileImage/scare.jpg`]})
    }else
    if ((message.content == ("-scp set avatar default")) && (message.author.id == "775247639083614218" || "735410155432312854" || "572987740283731969" || "692105056119554079" || "729573721735561236" || "213250789823610880")){
      let set = clients.user.setAvatar('./archive/ProfileImage/default.png');
      let embed = new Discord.MessageEmbed()
      .setTitle("Successfully set the bots avatar!")
      .setColor("GREEN")
      .setImage("attachment://default.png")
      .setDescription("")
      message.channel.send({set, embeds: [embed], files: [`./archive/ProfileImage/default.png`]})
    }else
    if ((message.content == ("-scp set avatar lollipop")) && (message.author.id == "775247639083614218" || "735410155432312854" || "572987740283731969" || "692105056119554079" || "729573721735561236" || "213250789823610880")){
      let set = clients.user.setAvatar('./archive/ProfileImage/lollipop.jpg');
      let embed = new Discord.MessageEmbed()
      .setTitle("Successfully set the bots avatar!")
      .setColor("GREEN")
      .setImage("attachment://lollipop.jpg")
      .setDescription("")
      message.channel.send({set, embeds: [embed], files: [`./archive/ProfileImage/lollipop.jpg`]})
    }else
    if ((message.content == ("-scp set avatar cat")) && (message.author.id == "775247639083614218" || "735410155432312854" || "572987740283731969" || "692105056119554079" || "729573721735561236" || "213250789823610880")){
      let set = clients.user.setAvatar('./archive/ProfileImage/cat.jpg');
      let embed = new Discord.MessageEmbed()
      .setTitle("Successfully set the bots avatar!")
      .setColor("GREEN")
      .setImage("attachment://cat.jpg")
      .setDescription("")
      message.channel.send({set, embeds: [embed], files: [`./archive/ProfileImage/cat.jpg`]})
    }else
    if ((message.content == ("-scp set avatar bruh")) && (message.author.id == "775247639083614218" || "735410155432312854" || "572987740283731969" || "692105056119554079" || "729573721735561236" || "213250789823610880")){
      let set = clients.user.setAvatar('./archive/ProfileImage/bruh.jpg');
      let embed = new Discord.MessageEmbed()
      .setTitle("Successfully set the bots avatar!")
      .setColor("GREEN")
      .setImage("attachment://bruh.jpg")
      .setDescription("")
      message.channel.send({set, embeds: [embed], files: [`./archive/ProfileImage/bruh.jpg`]})
    }else
    if ((message.content.startsWith("-scp set avatar")) && (message.content !== prefix + "set avatar " + "bruh") && (message.content !== prefix + "set avatar " + "cat") && (message.content !== prefix + "set avatar " + "lollipop") && (message.content !== prefix + "set avatar " + "scare") && (message.content !== prefix + "set avatar " + "default") && (message.content !== prefix + "set avatar") && (message.author.id == "775247639083614218" || "735410155432312854" || "572987740283731969" || "692105056119554079" || "729573721735561236" || "213250789823610880")){
      let embed = new Discord.MessageEmbed()
      .setTitle("That avatar does not exsist in the database 😑")
      .setColor("RED")
      message.channel.send({embeds: [embed]})
    }else
    if ((message.content.startsWith("-scp set avatar bruh")) && (message.author.id !== "775247639083614218" || "735410155432312854" || "572987740283731969" || "692105056119554079" || "729573721735561236" || "213250789823610880")){
      let embed = new Discord.MessageEmbed()
      .setTitle("Unable to execute the command")
      .setFooter("reason: Only the Owner's **trusted** friends may execute this command")
      .setColor("RED")
      message.channel.send({embeds: [embed]})
    }else

    if ((message.content == prefix + "restart") && (message.author.id == "775247639083614218")){
      message.channel.send("rebooting the bot it might take less than 4000ms.....")
      setTimeout("3000")
      clients.destroy()
      clients.login(config.token);
      let embed = new Discord.MessageEmbed()
      .setTitle(`Rebooted the bot successfully now the bot is at ${Math.round(clients.ws.ping)}ms`)
      .setColor("GREEN")
      message.channel.send({embeds: [embed]})
    }else
    if ((message.content == prefix + "restart") && !(message.author.id == "775247639083614218")){
    let embed = new Discord.MessageEmbed()
    .setTitle(`Dude you are not my master`)
    .setColor("RED")
    message.channel.send({embeds: [embed]})
  }else

  if (message.content.startsWith("-scp say")){
    message.delete();
    var filter = (message.content);
    var filter1 = filter.replace("-scp say ", "");
    if (message.content == "-scp say"){
      let bruh = new Discord.MessageEmbed()
      .setTitle(`Can't send an empty message 🙃\n \n Requested by: <@${message.author.id}>`)
      .setColor("DARK_AQUA")
      message.channel.send({embeds: [bruh]})
    }else
    if (message.content !== `-scp say`){
    message.channel.send(filter1 + `\n \n \nRequested by: <@${message.author.id}>`)
    }
  }else

  if (message.content.startsWith("-scp PTsay")){
    message.delete();
    var filter = (message.content);
    var filter1 = filter.replace("-scp PTsay ", "");
    if (message.content == "-scp PTsay"){
      let bruh = new Discord.MessageEmbed()
      .setTitle(`Can't send an empty message 🙃\n \n Requested by: <@${message.author.id}>`)
      .setColor("DARK_AQUA")
      message.channel.send({embeds: [bruh]})
    }else
    if (message.content !== `-scp PTsay`){
    message.channel.send(filter1 + `\n \n \nRequested by: <@${message.author.id}>`)
    }
  }else

  if (message.content.startsWith("-scp PFsay")){
    message.delete();
    var filter = (message.content);
    var filter1 = filter.replace("-scp PFsay ", "");
    if (message.content == "-scp PFsay"){
      let bruh = new Discord.MessageEmbed()
      .setTitle(`Can't send an empty message 🙃\n \n Requested by: <@${message.author.id}>`)
      .setColor("DARK_AQUA")
      message.channel.send({embeds: [bruh]})
    }else
    if (message.content !== `-scp PFsay`){
    message.channel.send(filter1)
    }
  }else





    if (message.content == prefix + "motd"){
      let embed = new Discord.MessageEmbed()
        .setTitle("Music Of The Day!")
        .setDescription("Music of the day presents to you " + `[${music}](${LinkMusic})` + " by " + `[${artist}](${LinkArtist})`)
        .setColor('RANDOM')
        .setFooter(`sent in ${Math.round(clients.ws.ping)}ms` + "\nMade by Peanut with Scions help")
        .setThumbnail(MusicImage,`${LinkMusic}`)
  
      message.channel.send({embeds: [embed]})


    }else

    if (message.content.startsWith("-scp google ")){
      var filter = (message.content);
      var filter1 = filter.replace("-scp google ", "");
      var filter2 = filter1.replaceAll(" ", '+');
      var filter3 = (`https://letmegooglethat.com/?q=` + `${filter2}`);
      if (filter3 == "https://letmegooglethat.com/?q="){
        let none = new Discord.MessageEmbed()
        .setTitle("Bruh at least give me something to search")
        .setColor('RED')
        .setFooter(`sent in ${Math.round(clients.ws.ping)}ms`)
        message.channel.send({embeds: [none]})
      }else
      if (filter2 !== ""){
      let embed = new Discord.MessageEmbed()
        .setTitle("Let Me Google That 4 You")
        .setDescription(`I created this [link](${filter3}) for you  lazy ass <@${message.author.id}>`)
        .setColor('RANDOM')
        .setFooter(`sent in ${Math.round(clients.ws.ping)}ms`)
        .setThumbnail(`https://i.ibb.co/9w5b7Lc/bruh.png`)
      
      message.channel.send({embeds: [embed]})
      }

    }else

    if (message.content.startsWith("-scp set activity ")){
      var filter = (message.content);
      var filter1 = filter.replace("-scp set activity ", "");
      if (message.author.id == "775247639083614218" || "735410155432312854" || "572987740283731969" || "692105056119554079" || "729573721735561236"){
        clients.user.setActivity(`${filter1}`)
      let embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle(`Successfully set activity to "${filter1}"`)
      .setFooter(`sent in ${Math.round(clients.ws.ping)}ms`)

      message.channel.send({embeds: [embed]})
      }else
      if (!(message.author.id == "775247639083614218" || "735410155432312854" || "572987740283731969" || "692105056119554079" || "729573721735561236")){
        let embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle(`You are not allowed to execute that command only O5 members does`)
  
        message.channel.send({embeds: [embed]})
      }
    }else

    if (message.content == prefix + "support"){
      let embed = new Discord.MessageEmbed()
        .setTitle("Support/Join Us!")
        .setDescription(`You can join our server [here](https://discord.gg/nJNzsgF3JG), you also can [invite](https://discord.com/api/oauth2/authorize?client_id=890043377050058752&permissions=0&redirect_uri=https%3A%2F%2Fdiscord.com%2Fapi%2Foauth2%2Fauthorize%3Fclient_id%3D890043377050058752%26permissions%3D0%26scope%3Dbot%2520applications.commands&scope=bot%20applications.commands) the bot`)
        .setColor('RANDOM')
        .setFooter(`sent in ${Math.round(clients.ws.ping)}ms` + "\nMade by Peanut with Scions help")

  
      message.channel.send({embeds: [embed]})


    }else

    if (message.content == prefix + "join"){
      let embed = new Discord.MessageEmbed()
        .setTitle("Support/Join Us!")
        .setDescription(`You can join our server [here](https://discord.gg/nJNzsgF3JG), you also can [invite](https://discord.com/api/oauth2/authorize?client_id=890043377050058752&permissions=0&redirect_uri=https%3A%2F%2Fdiscord.com%2Fapi%2Foauth2%2Fauthorize%3Fclient_id%3D890043377050058752%26permissions%3D0%26scope%3Dbot%2520applications.commands&scope=bot%20applications.commands) the bot`)
        .setColor('RANDOM')
        .setFooter(`sent in ${Math.round(clients.ws.ping)}ms` + "\nMade by Peanut with Scions help")
  
      message.channel.send({embeds: [embed]})


    }else

    if(!(message.author.id == "775247639083614218") && message.content == prefix + "motd report"){

      message.react("<:negative:598440628501610558>")
      let embed = new Discord.MessageEmbed()
       .setTitle("You can't do that, if you did you can get in big trouble!")
       .setColor("ff0000")
       

       message.channel.send({embeds: [embed]})
  
      }else


      if((message.author.id == "775247639083614218") && message.content == prefix + "motd report"){
        let report1 = new Discord.MessageEmbed()
        .setTitle("Music Of The Day!")
        .setDescription("Music of the day presents to you " + `[${music}](${LinkMusic})` + " by " + `[${artist}](${LinkArtist})`)
        .setColor('RANDOM')
        .setFooter("\nMade by Peanut with Scions help")
        .setThumbnail(`${MusicImage}`,`${LinkMusic}`)
        clients.channels.cache.get("890581125074939944").send({embeds: [report1]})
        let report2 = new Discord.MessageEmbed()
        .setTitle("Music Of The Day!")
        .setDescription("Music of the day presents to you " + `[${music}](${LinkMusic})` + " by " + `[${artist}](${LinkArtist})`)
        .setColor('RANDOM')
        .setFooter("\nMade by Peanut with Scions help")
        .setThumbnail(`${MusicImage}`,`${LinkMusic}`)
        clients.channels.cache.get("417093499167440896").send({embeds: [report2]})
        message.react("<:affirmative:598440628925366313>")
        let embed = new Discord.MessageEmbed()
         .setTitle(`The opperation was successful and has reported to multiple servers from the database within ${Math.round(clients.ws.ping)}ms`)
         .setColor("#006400")

         message.channel.send({embeds: [embed]})
      }



    if(!(message.author.id == "775247639083614218") && message.content == prefix + "cease"){

      let embed = new Discord.MessageEmbed()
       .setTitle("Wait, you can't do that you are not my master!")
       .setColor("ff0000")

       message.channel.send({embeds: [embed]})

      

  
      }else

    
      if (message.content == prefix + `cute`){    

        let embed = new Discord.MessageEmbed()
          .setTitle('Cute SCP Images')
          .setColor("RANDOM")
          .setImage(getImage())
    
          message.channel.send({embeds: [embed]})
  
  
    }else





  
  
    if (message.content == prefix + "help"){
      let embed = new Discord.MessageEmbed()
        .setTitle("**Help Menu**")
        .setDescription('**General** (4)\n**Fun** (4)\n**Admin** (5)\n**Others** (2)\n \n**All** (13)')
        .setColor('RANDOM')
        .setFooter(`sent in ${Math.round(clients.ws.ping)}ms`)
        message.channel.send({embeds: [embed]})
    }else

    if (message.content == prefix + "help all"){
      let embed = new Discord.MessageEmbed()
        .setTitle("**Help Menu(general)**")
        .setColor('RANDOM')
        .setFooter(`sent in ${Math.round(clients.ws.ping)}ms`)
        .addFields(        
          { name: 'list', value: '<:bot_reply:890435782551162940> Shows the list of all minecraft SCPs' },
          { name: 'ping', value: '<:bot_reply:890435782551162940> Shows the latency'},
          { name: 'dversion', value: '<:bot_reply:890435782551162940> Shows the bot Discord.js version'},
          { name: 'say', value: '<:bot_reply:890435782551162940> Make the bot say whatever you want'},
          { name: 'motd', value: '<:bot_reply:890435782551162940> Shows the music of the day!'},
          { name: 'info', value: '<:bot_reply:890435782551162940> Shows all the bot information commands'},
          { name: 'cute', value: '<:bot_reply:890435782551162940> Shows cute SCPs, awwww'},
          { name: 'google', value: '<:bot_reply:890435782551162940> Google for those lazy ass people out there'},
          { name: '8ball', value: '<:bot_reply:890435782551162940> This will answer all your questions(I swear it will)'},
          { name: "support/join", value: '<:bot_reply:890435782551162940> You can join our server or invite your bot'},
          { name: 'cease  <a:admin_crown:892937818056314901> ', value: '<:bot_reply:890435782551162940> Stop the bot permanently until someone turn it back on'},
          { name: 'restart  <a:admin_crown:892937818056314901>', value: '<:bot_reply:890435782551162940> Restarts the bot and **hopefully** decrease the API latency'},
          { name: 'set status  <a:admin_crown:892937818056314901> ', value: '<:bot_reply:890435782551162940> Sets the bot status'},
          { name: 'motd report  <a:admin_crown:892937818056314901>', value: '<:bot_reply:890435782551162940> Notify multiple server about the motd from the database'},
          { name: 'set activity  <a:admin_crown:892937818056314901>', value: '<:bot_reply:890435782551162940> Sets the activity to your desire'},
          { name: 'set avatar  <a:admin_crown:892937818056314901>', value: '<:bot_reply:890435782551162940> Sets the bots avatar'},
          )
        message.channel.send({embeds: [embed]})
    }else

    if (message.content == prefix + "help general"){
      let embed = new Discord.MessageEmbed()
        .setTitle("**Help Menu(general)**")
        .setColor('RANDOM')
        .setFooter(`sent in ${Math.round(clients.ws.ping)}ms`)
        .addFields(  
          { name: 'list', value: '<:bot_reply:890435782551162940> Shows the list of all minecraft SCPs' },
          { name: 'ping', value: '<:bot_reply:890435782551162940> Shows the latency'},
          { name: 'motd', value: '<:bot_reply:890435782551162940> Shows the music of the day!'},
          { name: 'info', value: '<:bot_reply:890435782551162940> Shows all the bot information commands'},
          { name: 'say', value: '<:bot_reply:890435782551162940> Make the bot say whatever you want'},
          )
        message.channel.send({embeds: [embed]})
    }else

    if (message.content == prefix + "help fun"){
      let embed = new Discord.MessageEmbed()
        .setTitle("**Help Menu(fun)**")
        .setColor('RANDOM')
        .setFooter(`sent in ${Math.round(clients.ws.ping)}ms`)
        .addFields(  
          { name: 'cute', value: '<:bot_reply:890435782551162940> Shows cute SCPs, awwww'},
          { name: '8ball', value: '<:bot_reply:890435782551162940> This will answer all your questions(I swear it will)'},
          { name: 'google', value: '<:bot_reply:890435782551162940> Google for those lazy ass people out there'},
          )
        message.channel.send({embeds: [embed]})
    }else

    if (message.content == prefix + "help admin"){
      let embed = new Discord.MessageEmbed()
        .setTitle("**Help Menu(admin)**")
        .setColor('RANDOM')
        .setFooter(`sent in ${Math.round(clients.ws.ping)}ms`)
        .addFields(  
          { name: 'cease <a:admin_crown:892937818056314901>  ', value: '<:bot_reply:890435782551162940> Stop the bot permanently until someone turn it back on'},
          { name: 'restart <a:admin_crown:892937818056314901> ', value: '<:bot_reply:890435782551162940> Restarts the bot and **hopefully** decrease the API latency'},
          { name: 'set status <a:admin_crown:892937818056314901>  ', value: '<:bot_reply:890435782551162940> Sets the bot status'},
          { name: 'motd report <a:admin_crown:892937818056314901> ', value: '<:bot_reply:890435782551162940> Notify multiple server about the motd from the database'},
          { name: 'set avatar  <a:admin_crown:892937818056314901>', value: '<:bot_reply:890435782551162940> Sets the bots avatar'},
          )
        message.channel.send({embeds: [embed]})
    }else

    if (message.content == prefix + "help others"){
      let embed = new Discord.MessageEmbed()
        .setTitle("**Help Menu(others)**")
        .setColor('RANDOM')
        .setFooter(`sent in ${Math.round(clients.ws.ping)}ms`)
        .addFields(  
          { name: 'dversion', value: '<:bot_reply:890435782551162940> Shows the bot Discord.js version'},
          { name: "support/join", value: '<:bot_reply:890435782551162940> You can join our server or invite your bot'},
          )
        message.channel.send({embeds: [embed]})
    }else

    if (message.content.startsWith("-scp 8ball")){
      var ball = ["Absolutelly no", "YES DO IT","Dont know how to answer","Maybe not","Sure DO IT","Believe me, yes","Of course no!","I can't answer all your questions I'm not a answer machine" ];
  const balls = ball[Math.floor(Math.random() * ball.length)];
      let answer = new Discord.MessageEmbed()
      .setTitle(balls)
      .setColor("RANDOM")
      .setFooter("Answer Machine 2000")
      message.channel.send({embeds: [answer]})


      }else

       
      

    if (message.content == prefix + "info levels"){
      let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`List of all the SCP Levels`)
      .addFields(
        {name: 'Level 0 (For Official Use Only)', value: '<:bot_reply:890435782551162940> Level 0 security clearances are given to non-essential personnel with no need to access information regarding anomalous objects or entities in Foundation containment.'},
        {name: 'Level 1 (Confidential) ', value: '<:bot_reply:890435782551162940> Level 1 security clearances are given to personnel working in proximity to but with no direct, indirect, or informational access to anomalous objects or entities in containment.'},
        {name: 'Level 2 (Restricted)', value: '<:bot_reply:890435782551162940> Level 2 security clearances are given to security and research personnel that require direct access to information regarding anomalous objects and entities in containment.'},
        {name:  'Level 3 (Secret)', value: '<:bot_reply:890435782551162940> Level 3 security clearances are given to senior security and research personnel that require in-depth data regarding the source, recovery circumstances, and long-term planning for anomalous objects and entities in containment. '},
        {name: 'Level 4 (Top Secret)',value: '<:bot_reply:890435782551162940> Level 4 security clearances are given to senior administration that require access to site-wide and/or regional intelligence as well as long-term strategic data regarding Foundation operations and research projects.'},
        {name: 'Level 5 (Thaumil)', value: '<:bot_reply:890435782551162940> Level 5 security clearances are given to the highest-ranking administrative personnel within the Foundation and grant effectively unlimited access to all strategic and otherwise sensitive data.'},
      )
      .setFooter(`message was sent in ${Math.round(clients.ws.ping)}ms`)
     message.channel.send({embeds: [embed]})

    }else

    if((message.content == prefix + "info level 0") + (message.content == prefix + "info Level 0")){
    let embed = new Discord.MessageEmbed()
    .setTitle("Level 0 Clearance Info")
    .setColor("RANDOM")
    .setDescription("Level 0 security clearances are given to non-essential personnel with no need to access information regarding anomalous objects or entities in Foundation containment. Level 0 access is typically held by personnel in non-secured clerical, logistics, or janitorial positions at facilities with no access to operational data.")
    .setFooter(`message was sent in ${Math.round(clients.ws.ping)}ms`)
    message.channel.send({embeds: [embed]})
    }else

    if((message.content == prefix + "info level 1" ) || (message.content == prefix + "info Level 1")){
      let embed = new Discord.MessageEmbed()
      .setTitle("Level 1 Clearance Info")
      .setColor("RANDOM")
      .setDescription("Level 1 security clearances are given to personnel working in proximity to but with no direct, indirect, or informational access to anomalous objects or entities in containment. Level 1 security clearances are typically granted to personnel working in clerical, logistics, or janitorial positions at facilities with containment capability or otherwise must handle sensitive information.")
      .setFooter(`message was sent in ${Math.round(clients.ws.ping)}ms`)
      message.channel.send({embeds: [embed]})

    }else

    if((message.content == prefix + "info level 2") || (message.content == prefix + "info Level 2")){
      let embed = new Discord.MessageEmbed()
      .setTitle("Level 2 Clearance Info")
      .setColor("RANDOM")
      .setDescription("Level 2 security clearances are given to security and research personnel that require direct access to information regarding anomalous objects and entities in containment. Most research staff, field agents, and containment specialists hold a Level 2 security clearance.")
      .setFooter(`message was sent in ${Math.round(clients.ws.ping)}ms`)
      message.channel.send({embeds: [embed]})
    }else
    if((message.content == prefix + "info level 3") || (message.content == prefix + "info Level 3")){
      let embed = new Discord.MessageEmbed()
      .setTitle("Level 3 Clearance Info")
      .setColor("RANDOM")
      .setDescription("Level 3 security clearances are given to senior security and research personnel that require in-depth data regarding the source, recovery circumstances, and long-term planning for anomalous objects and entities in containment. Most senior research staff, project managers, security officers, response team members, and Mobile Task Force operatives hold a Level 3 security clearance.")
      .setFooter(`message was sent in ${Math.round(clients.ws.ping)}ms`)
      message.channel.send({embeds: [embed]})
    }else
    if((message.content == prefix + "info level 4") || (message.content == prefix + "info Level 4")){
      let embed = new Discord.MessageEmbed()
      .setTitle("Level 4 Clearance Info")
      .setColor("RANDOM")
      .setDescription("Level 4 security clearances are given to senior administration that require access to site-wide and/or regional intelligence as well as long-term strategic data regarding Foundation operations and research projects. Level 4 security clearances are typically only held by Site Directors, Security Directors, or Mobile Task Force Commanders.")
      .setFooter(`message was sent in ${Math.round(clients.ws.ping)}ms`)
      message.channel.send({embeds: [embed]})
    }else
    if((message.content == prefix + "info level 5") || (message.content == prefix + "info Level 5")){
      let embed = new Discord.MessageEmbed()
      .setTitle("Level 5 Clearance Info")
      .setColor("RANDOM")
      .setDescription("Level 5 security clearances are given to the highest-ranking administrative personnel within the Foundation and grant effectively unlimited access to all strategic and otherwise sensitive data. Level 5 security clearances are typically only granted to O5 Council members and selected staff.")
      .setFooter(`message was sent in ${Math.round(clients.ws.ping)}ms`)
      message.channel.send({embeds: [embed]})
    }else


    if(!(message.author.id == "775247639083614218" || "735410155432312854" || "572987740283731969" || "692105056119554079" || "729573721735561236") && (message.content == prefix + "set status idle" || "set status online" || "set status do not disturb" || "set status invisible")){
      let embed = new Discord.MessageEmbed()
      .setTitle("Wait, you can't do that you are not my master!")
      .setColor("ff0000")

      message.channel.send({embeds: [embed]})
 
     }else

     if(message.content == prefix + "set status"){
      let embed = new Discord.MessageEmbed()
      .setTitle("Set what status? Tell me more specific!")
      .setColor("RANDOM")
      .addFields(
        { name: "idle/id <:idle:561649673832759317> ", value: "set the bot status to idle"},
        { name: "do not disturb/dnd <:dnd:561649719978229791> ", value: "set the bot status to do not disturb"},
        { name: "online/on <:on:561649276682240009> ", value: "set the bot status to online"},
        { name: "invisible/invis <:off:561649770452484103> ", value: "set the bot status to invisible and may seem offline to us"},
      )

      message.channel.send({embeds: [embed]})

      }else

      if((message.author.id == "775247639083614218" || "735410155432312854" || "572987740283731969" || "692105056119554079" || "729573721735561236") && (message.content == prefix + "set status idle") || (message.content == prefix + "set status id")){
        clients.user.setPresence({
          status: "idle"
        })
        
        let embed = new Discord.MessageEmbed()
        .setTitle("Successfully set status!")
        .setColor("#00FF00")
        message.channel.send({embeds: [embed]})

      }else

      if((message.author.id == "775247639083614218" || "735410155432312854" || "572987740283731969" || "692105056119554079" || "729573721735561236") && ((message.content == prefix + "set status do not disturb") || (message.content == prefix + "set status dnd"))){
        clients.user.setPresence({
          status: "dnd"
        })
        
        let embed = new Discord.MessageEmbed()
        .setTitle("Successfully set status!")
        .setColor("#00FF00")
        message.channel.send({embeds: [embed]})

      }else

      if((message.author.id == "775247639083614218" || "735410155432312854" || "572987740283731969" || "692105056119554079" || "729573721735561236") && ((message.content == prefix + "set status invisible") || (message.content == prefix + "set status invis"))){
        clients.user.setPresence({
          status: "invisible"
        })
        
        let embed = new Discord.MessageEmbed()
        .setTitle("Successfully set status!")
        .setColor("#00FF00")
        message.channel.send({embeds: [embed]})

      }else

      if((message.author.id == "775247639083614218" || "735410155432312854" || "572987740283731969" || "692105056119554079" || "729573721735561236") && ((message.content == prefix + "set status online") || (message.content == prefix + "set status on"))){
        clients.user.setPresence({
          status: "online"
        })
        
        let embed = new Discord.MessageEmbed()
        .setTitle("Successfully set status!")
        .setColor("#00FF00")
        message.channel.send({embeds: [embed]})

      }else


      if((message.content == prefix + "list" ) || (message.content == prefix + "list 1")){
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
        let list = "\n**SCP - 12** The Steam Punk Island\n**SCP - 12 - 1** The Core\n**SCP - 12 - 2** The Iron men\n**SCP - 13** The Ancient Walls\n**SCP - 13 - 1** The Corpse of a Titan ";
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
    


    if(message.content == prefix + "ping" ){

      message.channel.send("Calculating...").then(async message => {
      await message.delete()})
      var ClientPing = `${Date.now() - message.createdTimestamp}`
      if (ClientPing<"0"){
      var ClientPing2 = "**Some Error Occured :(**"
        }else
        if(ClientPing>"0"){
          var ClientPing2 = `**${ClientPing}ms**`
        }
      let embed = new Discord.MessageEmbed()
        .setTitle("Pong! :ping_pong:")
        .setDescription("clients's latency: " + `${ClientPing2}` + "\n" + `API's Latency: **${Math.round(clients.ws.ping)}ms**`)
        .setColor('RANDOM');

        message.channel.send({embeds: [embed]})
      }else




      if (message.content == prefix + "info"){
        let info = "**types**\n<:bot_reply:890435782551162940> Shows all type/class classifications of SCP.\n**levels**\n<:bot_reply:890435782551162940> Shows all the SCP security clearances.\n**role**\n<:bot_reply:890435782551162940> Shows all the SCP roles.";
        let embed = new Discord.MessageEmbed()
          .setTitle("**SCP Foundation Information**")
          .setDescription(info)
          .setColor('RANDOM')
          
      
        
        message.channel.send({embeds: [embed]})

      }else


    if (message.author.bot) return;

    if (message.content == prefix + "dversion") {
        const DiscordJSVersion = packageJSON.dependencies["discord.js"];
        const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`Bot stats - Current Bot`)
            .addField("Discord.js version", DiscordJSVersion);
        message.channel.send({
            embeds: [embed]

         

        });

      }else



    if (message.author.id ==`775247639083614218` && message.content == prefix + "cease"){
      const embed = new Discord.MessageEmbed()
      .setColor("#00FF00")
      .setTitle(`The bot have been ceased!`)
      message.channel.send({embeds: [embed]}).then(m => {
        clients.destroy();
      
      });

    }else

    if(message.content == prefix + "info types"){
      const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`List of all the SCP Classsifications`)
      .addFields(
      {name: "Safe", value:"<:bot_reply:890435782551162940> This classicfication is given to the most least dangerous and reasource needed SCPs. Most researcher have dreamed of handling these SCPs."},
      {name: "Euclid", value:"<:bot_reply:890435782551162940> This class is given to SCPs that require much resources to contain and is usually very dangerous"},
      {name: "Keter", value: "<:bot_reply:890435782551162940> This classification is given to the most dangerous SCP and is often required the most resource to contain it."},
      {name: "Thaumil", value: "<:bot_reply:890435782551162940> The classification is given to SCPs that is specifically beinged use to contain other SCPs."},
      {name: "Neutralized", value: "<:bot_reply:890435782551162940> As the name had said this classification was given to SCPs that is either neutralized by something or someone or by the foundation for obvious purposes"},
      {name: "Appolyon", value: "<:bot_reply:890435782551162940> Appolyon-class SCPs are usually cannot be contained usually because it can breach containtment imminently or some other similar scenarios"},
      {name: "Archon", value:"<:bot_reply:890435782551162940> Archon-class SCPs are anomalies that could theoretically be contained but are best left uncontained for some reason"}
      )
      .setFooter(`sent in ${Math.round(clients.ws.ping)}ms`)
      
      message.channel.send({embeds: [embed]})

    }else

    if(message.content == prefix + "info types safe"){
      const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Safe Classification Info")
      .setDescription("Safe-class SCPs are anomalies that are easily and safely contained. This is often due to the fact that the Foundation has researched the SCP well enough that containment does not require significant resources or that the anomalies require a specific and conscious activation or trigger. Classifying an SCP as Safe, however, does not mean that handling or activating it does not pose a threat.\n \n \n" + 'For a complete list of Safe-class articles on the site, click [here!](https://scp-wiki.wikidot.com/system:page-tags/tag/safe)')
      .setThumbnail("https://i.ibb.co/pdwN6Vq/safe.gif")
      .setFooter(`sent in ${Math.round(clients.ws.ping)}ms`)
      message.channel.send({embeds: [embed]})
    }else

    if(message.content == prefix + "info types euclid"){
      const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Euclid Classification Info")
      .setDescription("Euclid-class SCPs are anomalies that require more resources to contain completely or where containment isn't always reliable. Usually this is because the SCP is insufficiently understood or inherently unpredictable. Euclid is the Object Class with the greatest scope, and it's usually a safe bet that an SCP will be this class if it doesn't easily fall into any of the other standard Object Classes.\n \nAs a note, any SCP that's autonomous, sentient and/or sapient is generally classified as Euclid, due to the inherent unpredictability of an object that can act or think on its own.\n \n \n" + 'For a complete list of Euclid-class articles on the site, click [here!](https://scp-wiki.wikidot.com/system:page-tags/tag/euclid)')
      .setThumbnail("https://i.ibb.co/fdNCM8Y/euclid.jpg")
      .setFooter(`sent in ${Math.round(clients.ws.ping)}ms`)
      message.channel.send({embeds: [embed]})

    }else

      if(message.content == prefix + "info types keter"){
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Keter Classification Info")
        .setDescription("Keter-class SCPs are anomalies that are exceedingly difficult to contain consistently or reliably, with containment procedures often being extensive and complex. The Foundation often can't contain these SCPs well due to not having a solid understanding of the anomaly, or lacking the technology to properly contain or counter it. A Keter SCP does not mean the SCP is dangerous, just that it is simply very difficult or costly to contain.\n \n \n" + 'For a complete list of Keter-class articles on the site, click [here!](https://scp-wiki.wikidot.com/system:page-tags/tag/keter)')
        .setThumbnail("https://i.ibb.co/1msZRcs/keter.jpg")
        .setFooter(`sent in ${Math.round(clients.ws.ping)}ms`)
        message.channel.send({embeds: [embed]})

      }else

      if(message.content == prefix + "info types thaumil"){
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Thaumil Classification Info")
        .setDescription("Thaumiel-class SCPs are anomalies that the Foundation specifically uses to contain other SCPs. Even the mere existence of Thaumiel-class objects is classified at the highest levels of the Foundation and their locations, functions, and current status are known to few Foundation personnel outside of the O5 Council.\n \n \n" + 'For a complete list of Thaumil-class articles on the site, click [here!](https://scp-wiki.wikidot.com/system:page-tags/tag/thaumil)')
        .setThumbnail("https://i.ibb.co/PjMSSqp/thaumil.jpg")
        .setFooter(`sent in ${Math.round(clients.ws.ping)}ms`)
        message.channel.send({embeds: [embed]})

      }else

      if(message.content == prefix + "info types neutralized"){
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Neutralized Classification Info")
        .setDescription("Neutralized SCPs are anomalies that are no longer anomalous, either through having been intentionally or accidentally destroyed, or disabled.\n \n \n" + 'For a complete list of Neutralized-class articles on the site, click [here!](https://scp-wiki.wikidot.com/system:page-tags/tag/neutralized)')
        .setThumbnail("https://i.ibb.co/Nxdvzbc/neutralized.jpg")
        .setFooter(`sent in ${Math.round(clients.ws.ping)}ms`)
        message.channel.send({embeds: [embed]})

      }else

      if(message.content == prefix + "info types appolyon"){
      const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Appolyon Classification Info")
      .setDescription("Apollyon-class SCPs are anomalies that cannot be contained, are expected to breach containment imminently, or some other similar scenario. Such anomalies are usually associated with world-ending threats or a K-Class Scenario of some kind and require a massive effort from the Foundation to deal with.\n \n \n" + 'For a complete list of Appolyon-class articles on the site, click [here!](https://scp-wiki.wikidot.com/system:page-tags/tag/appolyon)')
      .setThumbnail("https://i.ibb.co/kXqBdpS/appolyon.png")
      .setFooter(`sent in ${Math.round(clients.ws.ping)}ms`)
      message.channel.send({embeds: [embed]})

      }else

      if(message.content == prefix + "info types archon"){
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Archon Classification Info")
        .setDescription("Archon-class SCPs are anomalies that could theoretically be contained but are best left uncontained for some reason. Archon SCPs may be a part of consensus reality that is difficult to fully contain or may have adverse effects if put into containment. These SCPs are not uncontainable—the defining feature of the class is that the Foundation chooses to not put the anomaly into containment.\n \n \n" + 'For a complete list of Archon-class articles on the site, click [here!](https://scp-wiki.wikidot.com/system:page-tags/tag/archon)')
        .setThumbnail("https://i.ibb.co/1bv5rxV/archon.png")
        .setFooter(`sent in ${Math.round(clients.ws.ping)}ms`)
        message.channel.send({embeds: [embed]})

        if(message.author.id != "") return message.channel.send(`I'm sorry, I only listen to one person for this command... And you're not them.`);

      }else
      if((message.author.id !== "213250789823610880" && message.author.id !== "775247639083614218") && (message.content.startsWith(prefix + "eval"))){
        let embed = new Discord.MessageEmbed()
        .setTitle(`You don't have the permission to execute that command`)
        .setColor(`RED`)
        message.channel.send({embeds:[embed]})
      }else
      if((message.author.id == "213250789823610880" || message.author.id == "775247639083614218") && (message.content.startsWith(prefix + "eval"))){
      
          const clean = async (clients, text) => {
          if (text && text.constructor.name == "Promise") text = await text;
      
          if (typeof text !== "string") text = require("util").inspect(text, { depth: 1 });
      
          text = text
            .replace(clients.token, "You think you are smart but you can't steal my token 🙃")
            .replace(/`/g, "`" + String.fromCharCode(8203))
            .replace(/@/g, "@" + String.fromCharCode(8203));
      
          return text;
        }; //end of 'clean'
      
      
          try {
            const evaled = eval(args.join(" "));
            const cleaned = await clean(clients, evaled);
      
            message.channel.send(`\`\`\`js\n${cleaned}\n\`\`\``);
          } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${err}\n\`\`\``);
          };
        };


    

        }catch(err){
    let ch = clients.channels.cache.get('417093499167440896');
    let msg = err;
    ch.send(msg, {code:'js', split:true});
        
        }
});



clients.login(config.token);