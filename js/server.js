const express = require('express');
const server = express();

// server.use((request, response) => {
//     console.log('we got a new request');
//     console.dir(request);
//     response.send('<h1>This is the website</h1>');
// });

server.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><button>click here</button>');
});

server.get('/admin', (req, res) => {
    res.send('<h1>Admin</h1><button>click here</button>');
});

server.get('/delete', (req, res) => {
    res.send('<h1>Delete</h1><button>click here</button>');
});

server.get('/r/:players/:id', (req, res) => {
    const { players, id } = req.params;
    res.send(`<h1>This is ${players}'s page and the id is ${id} </h1>`);
});

server.get('/search', (req, res) => {
    const { q } = req.query;
    res.send(`<h1>${q}</h1>`);
});

server.get('*', (req, res)=> {
    res.send('<h1>Bro, I dont know what you are looking for. Sorry!</h1>');
});


server.listen(3000, () => {
    console.log('listening to port 3000');
});