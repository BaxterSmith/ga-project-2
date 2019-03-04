const express = require('express');
const app = express();
const methodOverride = require('method-override');
const routes = require('./routes/index.js');

app.use(methodOverride('_method'));

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');

app.use('/', routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`);
});