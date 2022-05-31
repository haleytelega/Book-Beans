const express = require('express');
const app = express();
const port = 8080;

const handlebars = require('express-handlebars');

app.set =('view-engine', 'hbs');

app.engine('hbs', handlebars({
    layoutsDir: `${__dirname}/views/layouts`,
    extname:'hbs',
    defaultlayout: 'planB',
    partialsDir: `${__dirname}/views/layouts`
}));

app.use(express.static('public')); 

//const fakeAPI = () => 'Faker';

app.get('/', (req, res)=> {
    res.render('main', {layout: 'index',}); // inside brackets add fake api file names filename:  fakeAPI()
});

app.listen(port, ()=>{
console.log(`app listening to port ${port}`);
}); 