const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/admin', (req, res) => {
    res.send('<h1>Admin</h1><button>click here</button>');
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
    console.log('listening to port 3000');
});