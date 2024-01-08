// Create web server with express
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const { randomBytes } = require('crypto');
const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Comments data
const commentsByPostId = {