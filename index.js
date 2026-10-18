// 👑 LEGENDARY TAKUNDA MUNYORO - MAIN BOT
// Made in Zimbabwe 🇿🇼 by Takunda Charles

const { default: makeWASocket, useMultiFileAuthState, DisconnectReason } = require('@whiskeysockets/baileys');
const P = require('pino');
const config = require('./settings');

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState('session');

  const sock = makeWASocket({
    auth: state,
    logger: P({ level: 'silent' }),
    browser: ["Legendary Takunda", "Chrome", "1.0"],
  });

  sock.ev.on('creds.update', saveCreds);

  // Language helper
  const getMsg = (lang, key) => {
    return config.mess[lang][key] || config.mess['en'][key];
  };

  sock.ev.on('connection.update', async (update) => {
    const { connection, lastDisconnect } = update;
    if (connection === 'close') {
      const reason = lastDisconnect?.error?.output?.statusCode;
      if (reason !== DisconnectReason.loggedOut) startBot();
    } else if (connection === 'open') {
      console.log(getMsg(config.language, 'connected'));
      console.log(`👑 ${config.botName} is online! 🇿🇼`);
    }
  });

  sock.ev.on('messages.upsert', async ({ messages }) => {
    const m = messages[0];
    if (!m.message || m.key.fromMe) return;
    
    const from = m.key.remoteJid;
    const body = m.message.conversation || m.message.extendedTextMessage?.text || "";
    if (!body.startsWith(config.prefix)) return;

    const args = body.slice(1).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    const lang = config.language; // You can make this per-user later

    // === MENU ===
    if (command === 'menu' || command === 'help') {
      const menuText = `
👑 *${config.botName}*
🇿🇼 Made in ${config.country}

*${getMsg(lang, 'welcome')}*

┌─「 *COMMANDS* 」
│ • ${config.prefix}menu - Show this menu
│ • ${config.prefix}ping - Bot speed
│ • ${config.prefix}lang en/sn/nd - Change language
│ • ${config.prefix}owner - Owner info
└─

*Languages:*
EN - English | SN - Shona | ND - Ndebele

Creator: ${config.creator}
City: ${config.city}
`;
      await sock.sendMessage(from, { text: menuText });
    }

    // === PING ===
    if (command === 'ping') {
      await sock.sendMessage(from, { text: `⚡ Pong! ${Date.now() - m.messageTimestamp * 1000}ms\n👑 Legendary Takunda Munyoro` });
    }

    // === LANG SWITCH ===
    if (command === 'lang') {
      const newLang = args[0];
      if (['en','sn','nd'].includes(newLang)) {
        config.language = newLang;
        await sock.sendMessage(from, { text: getMsg(newLang, 'success') + ` Language: ${newLang}` });
      } else {
        await sock.sendMessage(from, { text: "Use: .lang en / sn / nd" });
      }
    }

    // === OWNER ===
    if (command === 'owner') {
      await sock.sendMessage(from, { text: `👑 *Owner:* ${config.ownerName}\n📍 ${config.city}, ${config.country}\n📞 ${config.ownerNumber}` });
    }
  });
}

startBot();
console.log("👑 Starting Legendary Takunda Munyoro...");
