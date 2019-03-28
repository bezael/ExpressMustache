const express = require('express');
const mustacheExpress = require('mustache-express');

const app = express();
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


app.get('/', (req, res) => {
    //res.send('Hello!!');
    // Whereby the first parameter ‘hello’ refers to the hello.html file 
    // (no need to include the extension (e.g. hello.html) 
    // as it has been previously set as html.
    res.render('index', {"title":"MustacheExpress"});
});

app.get('/user', (req,res) =>{
    res.render('user', {"name": "Dominicode"});    
});

app.listen(4001, ()=> console.log(`Server running on port 4001`));