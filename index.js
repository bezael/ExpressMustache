const express = require('express');
const mustacheExpress = require('mustache-express');

const app = express();
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + 'src/views');


app.get('/', (req, res) => {
    res.send('Hello!!');
});

app.listen(4001, ()=> console.log(`Server running on port 4001`));