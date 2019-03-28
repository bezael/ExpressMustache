const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello!!');
});

app.listen(4001, ()=> console.log(`Server running on port 4001`));