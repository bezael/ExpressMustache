# A short demo with Mustache Express adn Node.

## Mustache Express lets you use Mustache and Express (at least version 3) together, including auto-loading partials.

var mustacheExpress = require('mustache-express');

// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

## NPM
https://www.npmjs.com/package/mustache-express
