
// 🎤 LYRICS - Find song lyrics
module.exports = {
  name: "lyrics",
  alias: ["lyric","words","mazwi","amazwi"],
  desc: "Get lyrics",
  run: async (sock, from, args) => {
    const q = args.join(" ");
    if(!q) return await sock.sendMessage(from, {text: `🎤 *LYRICS FINDER*\n\n❌ Isa zita renziyo!\n\nExample:\n.lyrics Jah Prayzah Kutonga Kwaro\n.lyrics Winky D - Happy Again`});
    
    await sock.sendMessage(from, {text: `🎤 *Searching lyrics for:* ${q}\n\n📝 *MASHOKO / LYRICS:*\n\n(Connecting to lyrics API...)\n\nFor now search on: www.azlyrics.com\n\n👑 Legendary Takunda Munyoro`});
  }
}
