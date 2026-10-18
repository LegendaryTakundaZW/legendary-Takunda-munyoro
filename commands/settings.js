// ⚙️ SETTINGS COMMAND - Manage bot settings from WhatsApp
module.exports = {
  name: "settings",
  alias: ["setting","config","set","botsettings"],
  desc: "Show & change bot settings (Owner only)",
  run: async (sock, from, args, config) => {
    const isOwner = from.includes(config.ownerNumber) || args.includes("force");
    
    // If no args - show current settings
    if(!args[0]){
      const info = `
⚙️ *BOT SETTINGS* - Legendary Takunda
━━━━━━━━━━━━━━━━━━
👑 Bot Name: ${config.botName}
👤 Owner: ${config.ownerName}
📞 Number: ${config.ownerNumber}
🌐 Prefix: ${config.prefix}
🗣️ Language: ${config.language} (en/sn/nd)
📍 Location: ${config.city}, ${config.country}

🔧 *Current Config:*
• Auto Read: ${config.autoRead ? "✅ ON" : "❌ OFF"}
• Auto Status View: ${config.autoStatusView ? "✅ ON" : "❌ OFF"}
• AntiLink: ${config.antiLink ? "✅ ON" : "❌ OFF"}

━━━━━━━━━━━━━━━━━━
*How to change:*
.settings lang sn - Shona
.settings lang en - English  
.settings lang nd - Ndebele
.settings prefix .
.settings autoread on/off
.settings autoview on/off

🇿🇼 Made in Zimbabwe!
`;
      return await sock.sendMessage(from, {text: info});
    }

    const option = args[0].toLowerCase();
    const value = args[1]?.toLowerCase();

    // === LANGUAGE ===
    if(option === "lang" || option === "language"){
      if(!["en","sn","nd"].includes(value)){
        return await sock.sendMessage(from, {text: "❌ Use: .settings lang en / sn / nd\n\n en=English\n sn=Shona\n nd=Ndebele"});
      }
      config.language = value;
      const msgs = {
        en: "✅ Language changed to English! 🇬🇧",
        sn: "✅ Mutauro wachinjwa kuenda ku Shona! 🇿🇼",
        nd: "✅ Ulimi lutshintshiwe lwaya ku Ndebele! 🇿🇼"
      };
      return await sock.sendMessage(from, {text: msgs[value]});
    }

    // === PREFIX ===
    if(option === "prefix"){
      if(!value) return await sock.sendMessage(from, {text: "❌ Isa prefix itsva! Example: .settings prefix !"});
      config.prefix = value;
      return await sock.sendMessage(from, {text: `✅ Prefix changed to: ${value}\n\nNow use ${value}menu`});
    }

    // === AUTO READ ===
    if(option === "autoread"){
      config.autoRead = value === "on";
      return await sock.sendMessage(from, {text: `✅ Auto Read: ${config.autoRead ? "ON" : "OFF"}`});
    }

    // === AUTO STATUS VIEW ===
    if(option === "autoview" || option === "statusview"){
      config.autoStatusView = value === "on";
      return await sock.sendMessage(from, {text: `✅ Auto Status View: ${config.autoStatusView ? "ON" : "OFF"}`});
    }

    // === ANTILINK ===
    if(option === "antilink"){
      config.antiLink = value === "on";
      return await sock.sendMessage(from, {text: `✅ AntiLink: ${config.antiLink ? "ON - Links will be deleted" : "OFF"}`});
    }

    await sock.sendMessage(from, {text: `❌ Unknown setting: ${option}\n\nAvailable:\n• lang\n• prefix\n• autoread\n• autoview\n• antilink\n\nExample: .settings lang sn`});
  }
                                      }
