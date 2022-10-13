const express = require('express');
const app = express();

// app.use((request, response) => {
//     console.log('we got a new request');
//     console.dir(request);
//     response.send('<h1>This is the website</h1>');
// });

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><button>click here</button>');
});

app.get('/admin', (req, res) => {
    res.send('<h1>Admin</h1><button>click here</button>');
});

app.get('/delete', (req, res) => {
    res.send('<h1>Delete</h1><button>click here</button>');
});

app.get('/r/:general', (req, res) => {
    const { general } = req.params;
    res.send(`{<h1>The name of this page is${general}</h1>}`);
});

app.get('*', (req, res)=> {
    res.send('<h1>Bro, I dont know what you are looking for. Sorry!</h1>');
});

app.listen(3000, () => {
    console.log('listening to port 3000');
});