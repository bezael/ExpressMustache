const express = require('express');
const mustacheExpress = require('mustache-express');
const PORT = 4001;
const app = express();
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    res.render('index', {"title":"MustacheExpress"});
});

app.get('/user', (req,res) =>{
    res.render('user', {"name": "Dominicode"});    
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));