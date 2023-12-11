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

/**
 * @swagger
 * /dataset:
 *      get: 
 *          description: retrieves one dataset
 *          produces:   
 *              - application/json
 *          responses:
 *              200:
 *                  description: Operation completed successfully
 *              400: 
 *                  description: The request was malformed
 *              404: 
 *                  description: The dataset with the specified name was not found
 */
app.get('/dataset', (req, res)=> {
    res.redirect('https://centraluseuap.dev.cognitive.microsoft.com/docs/services/unified-vision-apis-public-preview-2023-02-01-preview/operations/63c227a15ddd17166ce42740');
});


/**
 * @swagger
 * /datasets:
 *      get: 
 *          description: retrieves all datasets
 *          produces:   
 *              - application/json
 *          responses:
 *              200:
 *                  description: Operation completed successfully
 *              400: 
 *                  description: The request was malformed
 */
app.get('/datasets', (req, res) => {
    res.redirect('https://centraluseuap.dev.cognitive.microsoft.com/docs/services/unified-vision-apis-public-preview-2023-02-01-preview/operations/63c227a15ddd17166ce42743');
});


app.use(cors);


app.listen(port, () => {
    console.log("API served at localhost" + port)
});
