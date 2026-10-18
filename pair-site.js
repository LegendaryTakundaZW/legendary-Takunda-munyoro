hereconst express = require('express');
const { default: makeWASocket, useMultiFileAuthState, fetchLatestBaileysVersion, makeCacheableSignalKeyStore } = require('@whiskeysockets/baileys');
const pino = require('pino');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send(`
  <html>
  <head><title>Legendary Takunda Munyoro - Pair</title>
  <style>
    body{font-family:Arial;background:#111;color:gold;text-align:center;padding:40px}
    .box{background:#222;padding:30px;border-radius:15px;max-width:400px;margin:auto;border:2px solid gold}
    input{padding:12px;width:80%;border-radius:8px;border:none;margin:10px}
    button{padding:12px 25px;background:gold;color:black;border:none;border-radius:8px;font-weight:bold;cursor:pointer}
  </style>
  </head>
  <body>
    <div class="box">
      <h1>👑 Legendary Takunda Munyoro</h1>
      <p>Enter WhatsApp Number with Country Code</p>
      <input id="num" placeholder="2637XXXXXXX" />
      <br/>
      <button onclick="getCode()">Get Pair Code</button>
      <h2 id="code" style="margin-top:20px;color:white"></h2>
      <p style="font-size:12px;color:#aaa">Created by Takunda Charles | Zimbabwe 🇿🇼</p>
    </div>
    <script>
      async function getCode(){
        const n=document.getElementById('num').value;
        if(!n) return alert('Enter number');
        document.getElementById('code').innerText='Generating...';
        const res=await fetch('/code?number='+n);
        const data=await res.json();
        document.getElementById('code').innerText=data.code || data.error;
      }
    </script>
  </body>
  </html>
  `);
});

app.get('/code', async (req, res) => {
  try {
    let num = req.query.number.replace(/[^0-9]/g, '');
    if (!num) return res.json({ error: 'Enter valid number' });
    const { state, saveCreds } = await useMultiFileAuthState('./auth');
    const { version } = await fetchLatestBaileysVersion();
    const sock = makeWASocket({
      version,
      logger: pino({ level: 'silent' }),
      auth: { creds: state.creds, keys: makeCacheableSignalKeyStore(state.keys, pino({ level: 'silent' })) },
      printQRInTerminal: false,
      browser: ['Legendary Bot', 'Chrome', '1.0']
    });
    sock.ev.on('creds.update', saveCreds);
    if (!sock.authState.creds.registered) {
      await new Promise(r => setTimeout(r, 2000));
      let code = await sock.requestPairingCode(num);
      res.json({ code: code });
    }
  } catch (e) {
    res.json({ error: 'Failed: ' + e.message });
  }
});

app.listen(3000, () => console.log('Legendary Pair Site Running on 3000'));
