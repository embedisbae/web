/* global process */

import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;

express() // You can also use Express
    .use(
        compression({ threshold: 9 }),
        express.static('static'),
        sapper.middleware()
    )
    .listen(PORT, err => {
        if (err) console.log('error', err);
        console.log('ENV: ' + NODE_ENV);
    });
