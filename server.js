require('dotenv').config();
const http = require("http");
const port = process.env.PORT || 8080;
const host = process.env.HOST || 'localhost';
const text = process.env.TEXT;

function randomPhrase() {
    const phrases = ['La vita è per il 10% cosa ti accade e per il 90% come reagisci. (Charles R. Swindoll)',
        'Ci sono due regole nella vita: 1. Non mollare mai; 2. Non dimenticare mai la regola n° 1. (Duke Ellington)',
        'Se qualcosa non ti piace, cambiala. Se non puoi cambiarla, cambia il tuo atteggiamento. Non lamentarti. (Maya Angelou)'];
    let phrase = phrases[Math.floor(Math.random() * phrases.length)];
    return phrase;
}

http
    .createServer(function (req, res) {
        res.writeHead(200, {
            "Content-Type": "text/html;charset=utf-8" 
        });
        res.end(`<h1>${randomPhrase()}</h1>`);
    })
    .listen(port, host, () => {
        const serverUrl = `http://${host}:${port}`
        console.log(`Server avviato su ${serverUrl}`);
    });