import path from 'path';
import express from 'express';

const BUILD_PATH = path.join('../build');

const app = express();

app.use('/static', express.static(BUILD_PATH));

function startServer() {}
