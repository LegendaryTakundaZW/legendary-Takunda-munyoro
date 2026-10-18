// 🙏 PRAYER - Munamato / Umthandazo
module.exports = {
  name: "prayer",
  alias: ["munamato","umthandazo","bible","verse"],
  desc: "Prayers & Bible verses",
  run: async (sock, from) => {
    const prayers = [
      "🙏 *Shona Munamato:* Ishe Mwari, ndichengetei nhasi, nditungamirirei munzira yenyu. Amen.\n*English:* Lord, protect me today, guide me in your way. Amen.",
      "🙏 *Ndebele Umthandazo:* Nkosi, ngigcine lamuhla, ngiholele endleleni yakho. Amen.",
      "📖 *Psalm 23:1* - Ishe ndiye mufudzi wangu, hapana chandichashaya.\n*Ndebele:* INkosi ingumalusi wami, angisweli lutho.\n*English:* The Lord is my shepherd, I shall not want.",
      "📖 *Jeremiah 29:11* - Ndinoziva urongwa hwandinahwo pamusoro penyu - Ndizvo zvinotaura Ishe.\nFor I know the plans I have for you - says the Lord.",
      "🙏 *Morning Prayer:* Mangwanani akanaka Ishe, ndinokutendai nekundimutsirira nhasi. Amen.\n*Ndebele:* Uvuko oluhle Nkosi, ngiyabonga ngokungivusa lamuhla.",
      "🌙 *Night Prayer:* Ishe, ndichengetei husiku huno, ngirozi dzenyu ngadzindichengetedze. Amen."
    ];
    await sock.sendMessage(from, {text: prayers[Math.floor(Math.random()*prayers.length)] + "\n\n👑 Legendary Takunda - God Bless You! 🇿🇼"});
  }
}
