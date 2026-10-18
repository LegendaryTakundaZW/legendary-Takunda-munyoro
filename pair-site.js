// 🔗 PAIR SITE FOR RENDER
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
    <head><title>Legendary Takunda Munyoro</title></head>
    <body style="background:#000;color:#fff;text-align:center;font-family:Arial;padding:50px">
      <h1>👑 LEGENDARY TAKUNDA MUNYORO</h1>
      <h2>🇿🇼 Made in Zimbabwe by Takunda Charles</h2>
      <p>Bot is Running! ✅</p>
      <p>Pair Site: https://legendary-takunda-munyoro.onrender.com</p>
      <p>Commands: .menu .zvirahwe .play .love .prayer</p>
      <hr>
      <p>Go to /pair to get pair code</p>
    </body>
    </html>
  `);
});

app.get('/pair', (req, res) => {
  res.send('<h1>Pair Code coming soon - Bot starting...</h1>');
});

app.listen(PORT, () => console.log(`✅ Pair site running on ${PORT}`));
