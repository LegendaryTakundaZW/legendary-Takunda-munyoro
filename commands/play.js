// 🎵 PLAY - Music Downloader
module.exports = {
  name: "play",
  alias: ["song","mp3","music","dlmp3"],
  desc: "Download music",
  run: async (sock, from, args, config) => {
    const q = args.join(" ");
    if(!q) return await sock.sendMessage(from, {text: `🎵 *MUSIC DOWNLOADER*\n\n❌ Isa zita renziyo!\n\nExample:\n.play Jah Prayzah - Munyaradzi\n.play Winky D - Ibotso\n\n🇿🇼 Shona: Nyora zita renziyo\n🇬🇧 English: Type song name\nNdebele: Bhala ibizo lengoma`});
    
    await sock.sendMessage(from, {text: `🎵 *Searching:* ${q}\n\n⏳ Ndichitsvaga... Searching...\n👑 Legendary Takunda Munyoro\n\n_Zvichauya munguva pfupi! Music feature will connect to YouTube API soon!_\n\nFor now: https://ytmp3.cc - paste link`});
  }
}
