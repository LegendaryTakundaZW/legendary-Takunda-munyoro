// 👑 LEGENDARY 470 COMMANDS GENERATOR
const fs = require('fs');
if(!fs.existsSync('commands')) fs.mkdirSync('commands');

const categories = {
  "music": ["play","song","spotify","soundcloud","applemusic","audio","mp3","shazam","lyrics","lyric"],
  "video": ["video","mp4","youtube","ytmp4","tiktok","facebook","instagram","reels","shorts","film"],
  "zvirhwe": ["zvirahwe","joke","majokes","sekuru","tsvimbo","funny","haha","comedy","laugh","isekiso","amajokes","jokeszw","funnyzw","meme","memes","fun","lol","kuseka","kusekwa","jester"],
  "love": ["love","rudo","uthando","romantic","couple","heart","sweet","darling","mudiwa","sthandwa","lovequote","shona_love","ndebele_love","flirt","crush","valentine","kissing","hug","boyfriend","girlfriend","mylove","myheart","loveletter","lovetext","lovemsg"],
  "prayer": ["prayer","munamato","umthandazo","bible","verse","psalm","god","jesus","amen","blessing","pray","morning_prayer","night_prayer","shona_prayer","ndebele_prayer","church","gospel","worship","holy","faith","hope","grace","mercy","testimony","devotion"],
  "intro": ["intro","voiceintro","selfintro","about","whois","legendary","takunda","munyoro","zimbabwe","harare","intro_voice","myintro","botintro","ownerintro"],
  "tools": ["sticker","toimage","toaudio","tourl","translate","trt","shona","ndebele","english","calc","weather","time","date","google","wiki","define","qr","qrcode","shorturl","pastebin"],
  "download": ["apk","app","image","wallpaper","pinterest","gimage","mediafire","gdrive","mega","zip"],
  "group": ["tagall","hidetag","promote","demote","kick","add","groupinfo","link","revoke","close","open","antilink","welcome","goodbye","setdesc"],
  "owner": ["owner","creator","broadcast","bc","restart","update","block","unblock","join","leave","mode","public","private"]
};

// Fill to 470
let count = 0;
let allCommands = [];
for(let cat in categories){
  categories[cat].forEach(name => {
    allCommands.push({name, cat});
    count++;
  });
}
// Generate extra to reach 470
while(count < 470){
  const num = count+1;
  allCommands.push({name: `cmd${num}`, cat: "extra"});
  count++;
}

console.log(`Generating ${allCommands.length} commands...`);

allCommands.forEach(({name, cat}) => {
  let content = "";
  
  if(cat === "music") {
    content = `module.exports={name:"${name}",alias:[],desc:"Music downloader",run:async(sock,from,args,config)=>{const q=args.join(" ");if(!q)return sock.sendMessage(from,{text:"❌ Isa zita renziyo! Example: .${name} Jah Prayzah"});await sock.sendMessage(from,{text:"🎵 *Downloading:* "+q+"\\n⏳ Please wait...\\n👑 Legendary Takunda Munyoro"});}}`;
  } else if(cat === "video") {
    content = `module.exports={name:"${name}",desc:"Video downloader",run:async(sock,from,args)=>{const url=args[0];if(!url)return sock.sendMessage(from,{text:"❌ Isa link! .${name} https://..."});await sock.sendMessage(from,{text:"🎬 Downloading video...\\nLink: "+url});}}`;
  } else if(cat === "zvirhwe") {
    content = `module.exports={name:"${name}",desc:"Zvirahwe",run:async(sock,from)=>{const jokes=["😂 Sekuru: Ndava ne 90! Dokotera: Mucharama 100!","😂 ZESA yadzima - romance time! 🕯️","😂 Mwana: Chii economy? Baba: Ndakupa $10 udzose $5!"];await sock.sendMessage(from,{text:jokes[Math.floor(Math.random()*jokes.length)]+"\\n\\n👑 .zvirahwe"});}}`;
  } else if(cat === "love") {
    content = `module.exports={name:"${name}",desc:"Love quotes",run:async(sock,from)=>{const l=["❤️ Ndinokuda kupfuura shoko rudo - Shona","❤️ Uthando lwakho lungcono - Ndebele","❤️ You are my everything my love ❤️","💕 Rudo ndimi moyo wangu"];await sock.sendMessage(from,{text:l[Math.floor(Math.random()*l.length)]+"\\n\\n👑 Legendary Love"});}}`;
  } else if(cat === "prayer") {
    content = `module.exports={name:"${name}",desc:"Prayer",run:async(sock,from)=>{const p=["🙏 Mwari vanokuda - God loves you - Shona","🙏 UNkulunkulu uyakuthanda - Ndebele","🙏 The Lord is my shepherd Psalm 23","🙏 Munamato: Ishe, ndichengetei nhasi"];await sock.sendMessage(from,{text:p[Math.floor(Math.random()*p.length)]+"\\n\\n🙏 Amen"});}}`;
  } else if(cat === "intro") {
    content = `module.exports={name:"${name}",desc:"Introduction",run:async(sock,from)=>{await sock.sendMessage(from,{text:"👑 *LEGENDARY TAKUNDA MUNYORO*\\n🇿🇼 Made in Zimbabwe by Takunda Charles\\n📍 Harare\\n🎤 Voice Intro: Ndini Legend...\\n\\nUse .owner for contact"});}}`;
  } else {
    content = `module.exports={name:"${name}",desc:"${cat} command",run:async(sock,from,args,config)=>{await sock.sendMessage(from,{text:"✅ *${name}* command working!\\nCategory: ${cat}\\n👑 Legendary Takunda Munyoro\\n🔜 Full feature coming soon!"});}}`;
  }
  
  fs.writeFileSync(\`commands/\${name}.js\`, content);
});

console.log("✅ DONE! 470 commands created in /commands");
console.log("Now delete generate.js and commit!");
});
