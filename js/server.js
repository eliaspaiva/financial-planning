import express from 'express';
const app = express();
import path from 'path';
const __dirname = path.resolve();

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));



app.get('/', (req, res) => {
    res.render('login');
});

app.get('/singup', (req, res) => {
    res.render('singup', {
        title: 'Create Account', 
    });
});

app.get('/delete', (req, res) => {
    res.send('<h1>Delete</h1><button>click here</button>');
});

app.get('/r/:players/:id', (req, res) => {
    const { players, id } = req.params;
    res.send(`<h1>This is ${players}'s page and the id is ${id} </h1>`);
});

app.get('/search', (req, res) => {
    const { q } = req.query;
    res.send(`<h1>${q}</h1>`);
});

app.get('*', (req, res)=> {
    res.send('<h1>Bro, I dont know what you are looking for. Sorry!</h1>');
});


app.listen(3000, () => {
    console.log('listening on port 3000');
});