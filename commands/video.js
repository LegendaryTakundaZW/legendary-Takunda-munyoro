// 🎬 VIDEO - Video Downloader
module.exports = {
  name: "video",
  alias: ["mp4","ytmp4","yt","tiktok","fb","ig"],
  desc: "Download video",
  run: async (sock, from, args) => {
    const url = args[0];
    if(!url) return await sock.sendMessage(from, {text: `🎬 *VIDEO DOWNLOADER*\n\n❌ Isa link!\n\nExample:\n.video https://youtube.com/...\n.video https://tiktok.com/...\n\nSupports:\n• YouTube • TikTok • Facebook • Instagram`});
    
    await sock.sendMessage(from, {text: `🎬 *Downloading video...*\n🔗 ${url}\n⏳ Please wait...\n👑 Legendary Takunda Munyoro\n\n_Feature connecting soon!_`});
  }
}
