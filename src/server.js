const express = require('express');
const server = express();

server.all(`/`, (req, res) => {
    res.send(`Result: [OK].`);
});

function keepAlive() {
    server.listen(parseInt(process.env.PORT, 10), () => {
        console.log(`Server is now ready! | ` + Date.now());
    });
}

module.exports = keepAlive;
