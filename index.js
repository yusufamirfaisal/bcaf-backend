const express = require('express');
const bodyParser = require('body-parser');
const jsend = require('jsend');

const port = process.env.PORT || 4000;

const app = express();

app.use(jsend.middleware)
app.use('/', (req, res, next) => {
    res.locals.user = "admin"
    next()
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api', require('./api'))


app.listen(port, () => console.log(`TECHNICAL TEST BCA FINANCE listening on port ${port}!`));