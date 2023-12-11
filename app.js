const express = require('express');
const app = express();
const port = 3000;

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const cors = require('cors');

const options = {
    swaggerDefinition:{
        info:{
            title: 'Final Project API',
            version: '1.0.0',
            description: 'final project API'
        },
        host: 'localhost:3000',
        basePath: '/',
    },
    apis: ['./app.js']
};

const specs = swaggerJsdoc(options);

app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

app.get('/', (req, res) => {
    res.send('Hi, my name is Ajay Shankar. Welcome to my final project.')
});


app.use(cors);


app.listen(port, () => {
    console.log("API served at localhost" + port)
});
