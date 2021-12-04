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
app.get('/portfolio/proposals', (req, res) => {
    res.render('./portfolio/proposals')
})
app.get('/portfolio/families', (req, res) => {
    res.render('./portfolio/families')
})
app.get('/portfolio/models', (req, res) => {
    res.render('./portfolio/models')
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
app.get('/portfolio/english-weddings/christina-kyle', (req, res) => {
    res.render('././portfolio/english-weddings/christina-kyle')
})
app.get('/portfolio/english-weddings/danielle-nikole', (req, res) => {
    res.render('././portfolio/english-weddings/danielle-nikole')
})
app.get('/portfolio/english-weddings/denika-david', (req, res) => {
    res.render('././portfolio/english-weddings/denika-david')
})
app.get('/portfolio/english-weddings/dianne-terry', (req, res) => {
    res.render('././portfolio/english-weddings/dianne-terry')
})
app.get('/portfolio/english-weddings/kristen-james', (req, res) => {
    res.render('././portfolio/english-weddings/kristen-james')
})
app.get('/portfolio/english-weddings/megan-lee', (req, res) => {
    res.render('././portfolio/english-weddings/megan-lee')
})
app.get('/portfolio/english-weddings/rebecca-alvaro', (req, res) => {
    res.render('././portfolio/english-weddings/rebecca-alvaro')
})
app.get('/portfolio/english-weddings/rhian-sean', (req, res) => {
    res.render('././portfolio/english-weddings/rhian-sean')
})
app.get('/portfolio/english-weddings/sophie-jack', (req, res) => {
    res.render('././portfolio/english-weddings/sophie-jack')
})
app.get('/portfolio/english-weddings/2019', (req, res) => {
    res.render('././portfolio/english-weddings/2019')
})
//wedding-stories
app.get('/portfolio/wedding-stories/amy-daniel', (req, res) => {
    res.render('././portfolio/wedding-stories/amy-daniel')
})
app.get('/portfolio/wedding-stories/beth-david', (req, res) => {
    res.render('././portfolio/wedding-stories/beth-david')
})
app.get('/portfolio/wedding-stories/farrah-matthew', (req, res) => {
    res.render('././portfolio/wedding-stories/farrah-matthew')
})
app.get('/portfolio/wedding-stories/gemma-kane', (req, res) => {
    res.render('././portfolio/wedding-stories/gemma-kane')
})
app.get('/portfolio/wedding-stories/jade-craig', (req, res) => {
    res.render('././portfolio/wedding-stories/jade-craig')
})
app.get('/portfolio/wedding-stories/jemma-carl', (req, res) => {
    res.render('././portfolio/wedding-stories/jemma-carl')
})
app.get('/portfolio/wedding-stories/katrina-scott', (req, res) => {
    res.render('././portfolio/wedding-stories/katrina-scott')
})
app.get('/portfolio/wedding-stories/laura-leigh', (req, res) => {
    res.render('././portfolio/wedding-stories/laura-leigh')
})
app.get('/portfolio/wedding-stories/laura-robert', (req, res) => {
    res.render('././portfolio/wedding-stories/laura-robert')
})
app.get('/portfolio/wedding-stories/lauren-ben', (req, res) => {
    res.render('././portfolio/wedding-stories/lauren-ben')
})
app.get('/portfolio/wedding-stories/lauren-simon', (req, res) => {
    res.render('././portfolio/wedding-stories/lauren-simon')
})
app.get('/portfolio/wedding-stories/lisa-darren', (req, res) => {
    res.render('././portfolio/wedding-stories/lisa-darren')
})
app.get('/portfolio/wedding-stories/stacey-aaron', (req, res) => {
    res.render('././portfolio/wedding-stories/stacey-aaron')
})
//proposals
app.get('/portfolio/proposals/andreas-athina', (req, res) => {
    res.render('././portfolio/proposals/andreas-athina')
})
app.get('/portfolio/proposals/chirag-priyanka', (req, res) => {
    res.render('././portfolio/proposals/chirag-priyanka')
})
//families
app.get('/portfolio/families/alex-gianna', (req, res) => {
    res.render('././portfolio/families/alex-gianna')
})
app.get('/portfolio/families/alex-xenia', (req, res) => {
    res.render('././portfolio/families/alex-xenia')
})
app.get('/portfolio/families/alexander-yiana', (req, res) => {
    res.render('././portfolio/families/alexander-yiana')
})
app.get('/portfolio/families/angelika-misha', (req, res) => {
    res.render('././portfolio/families/angelika-misha')
})
    app.get('/portfolio/families/baskhkim-shkourte', (req, res) => {
    res.render('././portfolio/families/baskhkim-shkourte')
})
    app.get('/portfolio/families/filippos-emanouela', (req, res) => {
    res.render('././portfolio/families/filippos-emanouela')
})
    app.get('/portfolio/families/galina-lionid', (req, res) => {
    res.render('././portfolio/families/galina-lionid')
})
    app.get('/portfolio/families/ioulia-alexey', (req, res) => {
    res.render('././portfolio/families/ioulia-alexey')
})
    app.get('/portfolio/families/julia-sofia', (req, res) => {
    res.render('././portfolio/families/julia-sofia')
})
    app.get('/portfolio/families/maria-natalie', (req, res) => {
    res.render('././portfolio/families/maria-natalie')
})
    app.get('/portfolio/families/rianna-ralf', (req, res) => {
    res.render('././portfolio/families/rianna-ralf')
})
    app.get('/portfolio/families/rouslan-irina', (req, res) => {
    res.render('././portfolio/families/rouslan-irina')
})
    app.get('/portfolio/families/sofie-ioulia', (req, res) => {
    res.render('././portfolio/families/sofie-ioulia')
})
//models
app.get('/portfolio/models/anna', (req, res) => {
    res.render('././portfolio/models/anna')
})
app.get('/portfolio/models/d-and-d', (req, res) => {
    res.render('././portfolio/models/d-and-d')
})
app.get('/portfolio/models/elena', (req, res) => {
    res.render('././portfolio/models/elena')
})
app.get('/portfolio/models/johanna', (req, res) => {
    res.render('././portfolio/models/johanna')
})
app.get('/portfolio/models/karlin', (req, res) => {
    res.render('././portfolio/models/karlin')
})
app.get('/portfolio/models/natalie', (req, res) => {
    res.render('././portfolio/models/natalie')
})
app.get('/portfolio/models/olga', (req, res) => {
    res.render('././portfolio/models/olga')
})
app.get('/portfolio/models/sveta', (req, res) => {
    res.render('././portfolio/models/sveta')
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serving port ${port}`)
})