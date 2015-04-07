'use strict'

import connect from 'connect';
import http from 'http';
import bodyParser from 'body-parser';
import render from './lib/render';
import get from './lib/get';
import post from './lib/post';

let app = connect()
    .use(bodyParser.urlencoded({
        extended: false
    }))
    .use(render)
    .use(get)
    .use(post)

//create node.js http server and listen on port
http.createServer(app).listen(process.env.PORT || 3000)
