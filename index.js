const express = require('express')
const handlebars = require('express-handlebars')

const app = express();
const port = 8080 || process.env.PORT;

app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        defaultLayout: 'index.hbs',
        layoutsDir: __dirname + '/views/layouts',
        //partialsDir: __dirname + '/views/partials'
    })
)

app.set('view engine', 'hbs');
app.set('views', './views');


const fakeApi = () => {[
    {name: 'gabriel', lane:'midlaner'},
    {name: 'gabriel2', lane:'toplaner'},
    {name: 'gabriel3', lane:'midlaner'},
    {name: 'gabriel4', lane:'toplaner'},
    {name: 'gabriel5', lane:'midlaner'},
]}

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('main', {listExist: true, list: fakeApi()});
})




app.listen(8080, err => {
    if(err) throw new Error (`Error on server: ${err}`);
    console.log(`Server is running on port: ${port}`);
})
