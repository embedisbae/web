/* global process */

import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

express() // You can also use Express
    .use(
        compression({ threshold: 9 }),
        express.static('static', { dev }),
        sapper.middleware()
    )
    .listen(PORT, err => {
        if (err) console.log('error', err);
    });
