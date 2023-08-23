const express = require('express');

const app = express();

// app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>minha lista de tarefas</h1>');
});

app.get('/json', (req, res) =>{
    res.json({title: 'tarefa X', done: true});
});

app.listen(3000, () => {
    console.log('servidor foi iniciado!');
});
