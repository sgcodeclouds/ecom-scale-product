const express = require('express')
const cors = require('cors') 
const os = require('os');
const categoryRouter = require('./routes/categoryRoutes');
const productRouter = require('./routes/productRoutes');
const dotenv = require('dotenv');
const { authenticateToken } = require('./utils/authUtil');
require('./db/conn')

dotenv.config();
// Set up the express app
const app = express()
const port = process.env.PORT || 10000

// Allows us to accept the data in JSON format
app.use(cors());
app.use(express.json());

app.use('/',authenticateToken,productRouter);
app.use('/categories',authenticateToken,categoryRouter);



app.get('/test', (req, res) => {
    res.send('hello world')
})

app.post('/check', (req, res) => {
    //console.log(`Request handled by ${os.hostname()}`);
    res.send(req.body)
})

app.get('/check-host', (req, res) => {
    //console.log(`Request handled by ${os.hostname()}`);
    res.send(`Request handled by ${os.hostname()}`)
})


try {
    // Start the web server on the specified port.
    app.listen(port, () => {
       console.log(`Server is running at: http://localhost:${port}`);
    });
} catch (error) {
    console.error("Unable to connect to the database:", error.original);
}