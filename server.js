const express   = require('express');
const path      = require('path');
const app       = express();
const port      = 8000;

app.use(express.json());
app.use(express.static('assets'));
app.use('/', function(req, res) {
    // res.send('Hello World!')
    res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(port, () => {
    console.log(`app is running on Port ${port}`)
})