if (process.env.NODE_ENV !=="production") {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const path = require('path');
const helmet = require("helmet");
const cloudinary = require('cloudinary').v2;

cloudinary.config ({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

app.use(express.static(path.join(__dirname, '/public')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(helmet({contentSecurityPolicy: false,}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('index')
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serving port ${port}`)
})