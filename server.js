/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-var-requires */
const { createServer } = require('http');

// eslint-disable-next-line n/no-deprecated-api
const { parse } = require('url');

const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    createServer((req, res) => {
        const parsedUrl = parse(req.url, true);
        handle(req, res, parsedUrl);
    }).listen(3000, err => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000');
    });
});

// TODO: complex
// /* eslint-disable import/order */
// /* eslint-disable @typescript-eslint/no-var-requires */
// 'use strict';

// const isStrict = (function () {
//     return !this;
// })();

// // eslint-disable-next-line n/no-deprecated-api
// const { parse } = require('url');

// const isDevelopment = process.env.ENVIRONMENT === 'staging';

// const fs = require('fs');

// const chalk = require('chalk');
// const next = require('next');

// const { createServer } = require(isDevelopment ? 'https' : 'http');
// const port = isDevelopment ? 443 : parseInt(process.env.PORT, 10) || 3000;

// const app = next({ dev: isDevelopment, hostname: 'localhost', port });
// const handle = app.getRequestHandler();

// const url = 'https://elections.usatoday.com';

// const options = {
//     key: fs.readFileSync('certs/elections.usatoday.com.key'),
//     cert: fs.readFileSync('certs/elections.usatoday.com.crt')
// };

// app.prepare().then(() => {
//     createServer(isDevelopment ? options : {}, (req, res) => {
//         return handle(req, res, parse(req.url, true));
//     }).listen(port, err => {
//         if (err) throw err;

//         console.log(
//             chalk.red(
//                 `\n> Ready on (Strict Mode: ${isStrict ? 'Enabled' : 'Disabled'}): ${
//                     isDevelopment ? `${url}/elections` : `localhost:${port}`
//                 }\n Please make sure your local hosts entry points to it otherwise add it as \n 127.0.0.1 elections.usatoday.com`
//             )
//         );
//     });
// });
