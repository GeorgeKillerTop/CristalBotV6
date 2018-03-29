const Discord = require ("discord.js");
const YTDL = require("ytdl-core");

const prefix = "%";

function play(connection, message) {
    var server = servers[message.guild.id];

    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));

    server.queue.shift();

    server.dispatcher.on("end", function() {
        if (server.queue[0]) play(connection, message);
        else connection.disconnect();
    });
}

var bot = new Discord.Client();

var servers = {};

bot.on("ready", function() {
    console.log("Ready");
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "gay":  
            var T1 = new Discord.RichEmbed()
            .setColor("#15f153")
            .addField("Sanse", message.author + " este gay in proportie de " + r1[Math.floor(Math.random() * r1.length)]);
            message.channel.sendMessage(T1); 
            break;     
          case "info":
            var T2 = new Discord.RichEmbed()
            .setAuthor("CristalVic", "")
            .setColor("#15f153")
            .addField("Youtube", '>https://www.youtube.com/channel/UCxWqxdwd91CQlS_sCRhsFiQ')
            .addField("Ce PC am?", '>i5 , gtx 1050 TI , Windows 10 ,8GB Ram')
            .addField("Pagina de Facebook", '>https://www.facebook.com/CristalVic/')
            .addField("Unde stau?", '>Stau in Iasi')
            .addField("Cati ani am?", '>Am 14 ani')
            .addField("Cu cine colaborez?", "%colaborari")
            message.channel.sendMessage(T2);
            break;
          case "colaborari":
            var C1 = new Discord.RichEmbed()
            .setAuthor("CristalVic", "")
            .setColor("#15f153")
            .addField("💪qSeBBy_ :", '> https://www.youtube.com/channel/UCMqe9y5rby5XYfjSDYlMKvg')
            .addField("💪Andy", '> https://www.youtube.com/channel/UCarVqPUSoQPOsRv5ITSXecw')
            .addField("⭐️TheTNT", '> https://www.youtube.com/channel/UC4aJBvJdAHeHeY94UmFzXUA')
            .addField("⭐️GOPE", '> https://www.youtube.com/channel/UC4MMDHNHPGyRYPuDyqAhKuA')
            message.channel.sendMessage(C1);
            break;
        case "play":
            if (!args[1]) {
                var M1 = new Discord.RichEmbed()
            .setColor("#15f153")
            .addField("Erroare","Trebuie sa pui un link");
            message.channel.sendMessage(M1); 
                return;
            }

            if (!message.member.voiceChannel) {
                var M2 = new Discord.RichEmbed()
            .setColor("#15f153")
            .addField("Erroare","Trebuie sa intri pe un voice channel");
            message.channel.sendMessage(M2); 
                return;
            }

            if(!servers[message.guild.id]) servers[message.guild.id] = {
                queue: []
            };

            var server = servers[message.guild.id];

            server.queue.push(args[1]);

            if(!message.guild.voiceConnection) message.member.voiceChannel.join(). then(function(connection) {
               play(connection, message);
                var M3 = new Discord.RichEmbed()
            .setColor("#15f153")
            .addField("Plaing the song",":white_check_mark:");
            message.channel.sendMessage(M3); 
            });
            break;
        case "skip" :
            var server = servers[message.guild.id];

            if (server.dispatcher) server.dispatcher.end();
            break;
        case "stop" :
            var server = servers[message.guild.id];

            if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
                var M4 = new Discord.RichEmbed()
            .setColor("#15f153")
            .addField("CristalVic s-a deconectat",":x:");
            message.channel.sendMessage(M4); 
            break;
        case "help" :
             var H2 = new Discord.RichEmbed()
            .setAuthor("CristalVic-Help", "")
            .setColor("#15f153")
            .addField("%help-music", '> detalii despre partea legata de muzica')
            .addField("%help-divertisment", '> detalii despre partea legata de divertisment')
            .addField("%info", '> Informatii despre CristalVic')
            .addField("Add CristalVic on your server", '> https://discordapp.com/api/oauth2/authorize?client_id=422080381299326986&permissions=0&scope=bot')
            message.channel.sendMessage(H2);
            break;
        case "help-music" :
             var H2 = new Discord.RichEmbed()
            .setAuthor("CristalVic-Help", "")
            .setColor("#15f153")
            .addField("%play [URL]", '> Comanda pentru a asculta muzica')
            .addField("%skip", '> Comanda pentru a da skip la urmatoarea pesa din playlist')
            .addField("%stop", '> Opreste Muzica')
            message.channel.sendMessage(H2);
            break;
        case "help-divertisment" :
             var H2 = new Discord.RichEmbed()
            .setAuthor("CristalVic-Help", "")
            .setColor("#15f153")
            .addField("%gay", '> Iti arata cat de gay esti')
            .addField("%emilut", '> Poze faine cu Emilut')
            .addField("%meme", '> BEST meme-uri cu CristalVic') 
            message.channel.sendMessage(H2);
            break;
        case "emilut" :
            return message.channel.send( r2[Math.floor(Math.random() * r2.length)] );
            break;
        case "meme":
            return message.channel.send( r3[Math.floor(Math.random() * r3.length)] );
            break;
        default:
        var T = new Discord.RichEmbed()
        .setColor("#15f153")
        .addField("Comanda invalida",'Incearca %help');
        message.channel.sendMessage(T); 
    }
});

var  r1 = [
    "0% => ii plac femeile",
    "1%",
    "2%",
    "3%",
    "4%",
    "5%",
    "6%",
    "7%",
    "8%",
    "9%",
    "10%",
    "11%",
    "12%",
    "13%",
    "14%",
    "15%",
    "16%",
    "17%",
    "18%",
    "19%",
    "20%",
    "21%",
    "22%",
    "23%",
    "24%",
    "25%",
    "26%",
    "27%",
    "28%",
    "29%",
    "30%",
    "31%",
    "32%",
    "33%",
    "34%",
    "35%",
    "36%",
    "37%",
    "38%",
    "39%",
    "40%",
    "41%",
    "42%",
    "43%",
    "44%",
    "45%",
    "46%",
    "47%",
    "48%",
    "49%",
    "50%",
    "51%",
    "52%",
    "53%",
    "54%",
    "55%",
    "56%",
    "57%",
    "58%",
    "59%",
    "60%",
    "61%",
    "62%",
    "63%",
    "64%",
    "65%",
    "66%",
    "67%",
    "68%",
    "69%",
    "70%",
    "71%",
    "72%",
    "73%",
    "74%",
    "75%",
    "76%",
    "77%",
    "78%",
    "79%",
    "80%",
    "81%",
    "82%",
    "83%",
    "84%",
    "85%",
    "86%",
    "87%",
    "88%",
    "89%",
    "90%",
    "91%",
    "92%",
    "93%",
    "94%",
    "95%",
    "96%",
    "97%",
    "98%",
    "99%",
    "100%"
  ]
var  r2 = [
  "https://imgur.com/a/3xIG8",
  "https://imgur.com/a/pjZro",
  "https://imgur.com/a/sY3aE",
  "https://imgur.com/a/QRjLf"
]
var r3 = [
   "https://imgur.com/vmpzDtf",
   "https://imgur.com/7tC1MM6",
   "https://imgur.com/XiWmj56",
   "https://imgur.com/pCxvnl8",
   "https://imgur.com/FYno1Lp",
   "https://imgur.com/CWeeruD",
   "https://imgur.com/dMO3Kdw",
   "https://imgur.com/LaQ9waz",
   "https://imgur.com/q2jrVlA",
   "https://imgur.com/kxqyOOS",
   "https://imgur.com/KKGF50i",
   "https://imgur.com/K2nBM1h",
   "https://imgur.com/TRAN6hf",
   "https://imgur.com/h8Ek4TR",
   "https://imgur.com/hWRsL29",
   "https://imgur.com/20js0PC",
   "https://imgur.com/7F7cfgP",
   "https://imgur.com/452j4UZ"
]

bot.login(process.env.BOT_TOKEN);
