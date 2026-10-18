// 🎤 INTRO - Voice Introduction
module.exports = {
  name: "intro",
  alias: ["voiceintro","about","legendary","takunda"],
  desc: "Bot introduction",
  run: async (sock, from, args, config) => {
    const text = `
👑 *LEGENDARY TAKUNDA MUNYORO*
━━━━━━━━━━━━━━━━━━
🇿🇼 *Made in Zimbabwe*
👤 *Creator:* Takunda Charles Munyoro
📍 *City:* Harare, Zimbabwe
🗣️ *Languages:* Shona | English | Ndebele

🎤 *VOICE INTRO:*
"Ndini Legendary Takunda Munyoro,
Bot rakagadzirwa mu Zimbabwe ne mwana we Zimbabwe!
Ndinotaura Shona, Ndebele ne English!
Ndiri pano kukubatsira!

I am Legendary Takunda Munyoro,
A bot made in Zimbabwe by a Zimbabwean child!
I speak Shona, Ndebele and English!
I am here to help you!

Ngingu Legendary Takunda Munyoro,
I bot eyenziwe e Zimbabwe!
Ngikhuluma isiShona, isiNdebele lesiNgisi!"

━━━━━━━━━━━━━━━━━━
📞 Owner: ${config.ownerNumber}
🔗 Pair Site: ${config.pairSite}
⚡ Version: 1.0.0

Type .menu to start! 👑
`;
    await sock.sendMessage(from, {text});
    
    // Voice note intro (optional) - sends text as voice style
    await sock.sendMessage(from, {text: "🔊 *Voice Note Intro Coming Soon!* - Will send real voice note with my voice!"});
  }
}
