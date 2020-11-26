const express = require('express'); //
const bodyParser = require('body-parser');
const songsRoutes = require('./routes/songs');
const mongoose = require('mongoose');
const path = require('path');


const MONGODB_URI = 'mongodb://localhost:27017/cluj';
var port = 3000;

const app = express();


app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

// app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, '../client/build')));

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/', songsRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.use((err, req, res, next) => {
    res.status(500).json({message: err.message})
});

mongoose.connect(MONGODB_URI).then(result => {

    app.listen(port, function() {
        console.log('Server started at ' + port);

        //cron.runAll();
    });
}).catch(err => {
    console.log(123);
});

