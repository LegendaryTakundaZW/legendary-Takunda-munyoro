// 👑 OWNER INFO
module.exports = {
  name: "owner",
  alias: ["creator","takunda","munyoro"],
  desc: "Owner info",
  run: async (sock, from, args, config) => {
    await sock.sendMessage(from, {
      text: `👑 *OWNER INFO*\n\n👤 Name: ${config.ownerName}\n📍 Location: ${config.city}, ${config.country}\n📞 Number: ${config.ownerNumber}\n🤖 Bot: ${config.botName}\n\n🇿🇼 *Mwana we Zimbabwe!*\n\nChat with owner? Type .owner`,
      // This will show contact card
    });
  }
}
