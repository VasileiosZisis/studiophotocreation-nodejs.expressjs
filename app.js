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

//views
app.get('/', (req, res) => {
    res.render('index')
})
app.get('/contact', (req, res) => {
    res.render('contact')
})
app.get('/portfolio', (req, res) => {
    res.render('portfolio')
})
//portfolio
app.get('/portfolio/christenings', (req, res) => {
    res.render('./portfolio/christenings')
})
app.get('/portfolio/cypriot-weddings', (req, res) => {
    res.render('./portfolio/cypriot-weddings')
})
app.get('/portfolio/english-weddings', (req, res) => {
    res.render('./portfolio/english-weddings')
})
app.get('/portfolio/wedding-stories', (req, res) => {
    res.render('./portfolio/wedding-stories')
})
//christenings
app.get('/portfolio/christenings/agapi', (req, res) => {
    res.render('././portfolio/christenings/agapi')
})
app.get('/portfolio/christenings/ioanna', (req, res) => {
    res.render('././portfolio/christenings/ioanna')
})
app.get('/portfolio/christenings/maria', (req, res) => {
    res.render('././portfolio/christenings/maria')
})
app.get('/portfolio/christenings/marilia', (req, res) => {
    res.render('././portfolio/christenings/marilia')
})
app.get('/portfolio/christenings/stylianos', (req, res) => {
    res.render('././portfolio/christenings/stylianos')
})
app.get('/portfolio/christenings/victoria', (req, res) => {
    res.render('././portfolio/christenings/victoria')
})
app.get('/portfolio/christenings/xara', (req, res) => {
    res.render('././portfolio/christenings/xara')
})
//cypriot-weddings
app.get('/portfolio/cypriot-weddings/christina-andreas', (req, res) => {
    res.render('././portfolio/cypriot-weddings/christina-andreas')
})
app.get('/portfolio/cypriot-weddings/jennifer-xaris', (req, res) => {
    res.render('././portfolio/cypriot-weddings/jennifer-xaris')
})
app.get('/portfolio/cypriot-weddings/kata-andreas', (req, res) => {
    res.render('././portfolio/cypriot-weddings/kata-andreas')
})
app.get('/portfolio/cypriot-weddings/kristia-alexis', (req, res) => {
    res.render('././portfolio/cypriot-weddings/kristia-alexis')
})
app.get('/portfolio/cypriot-weddings/maria-andreas', (req, res) => {
    res.render('././portfolio/cypriot-weddings/maria-andreas')
})
app.get('/portfolio/cypriot-weddings/maria-lampros', (req, res) => {
    res.render('././portfolio/cypriot-weddings/maria-lampros')
})
//english-weddings
app.get('/portfolio/english-weddings/2019', (req, res) => {
    res.render('././portfolio/english-weddings/2019')
})
app.get('/portfolio/english-weddings/kristen-james', (req, res) => {
    res.render('././portfolio/english-weddings/kristen-james')
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serving port ${port}`)
})