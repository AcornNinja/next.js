const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();

        server.get('/s/:id', (req, res) => {
            const actualSerial = '/serial';
            const queryParams = {id: req.params.id};
            app.render(req,res,actualSerial,queryParams)
            });

        server.get('*', (req, res) => {
            return handle(req, res)
        });
        server.listen(4000, (err) => {
            if (err) throw err;
            console.log('> Ready on http://localhost:4000')
        })
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1)
    });