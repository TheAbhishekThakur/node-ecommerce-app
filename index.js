const express = require('express')
const app = express();
const port = 6000;
const cors = require('cors');
const bodyParser = require('body-parser');

// Routes
const userRoute = require('./Routes/UserRoute');


// Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type,Accept,Authorization,access-control-allow-origin"
    )
    if (req.method === 'OPTIONS') {
        res.header("Access-Control-Allow-Methods", 'PUT,POST,GET,PATCH,DELETE')
        return res.status(200).json({});
    }
    next()
});

// Routes Mapping
app.use('/api/user', userRoute);


app.listen(port, () => {
    console.log(`Listening on port ` + port)
});