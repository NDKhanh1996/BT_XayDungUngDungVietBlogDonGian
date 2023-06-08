const express = require('express');
const app = new express();
const bodyParser = require('body-parser');

const port = 8080;

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('blog');
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req, res) => {
    if (req.body.Title && req.body.Content) {
        const user = {
            title: req.body.Title,
            content: req.body.Content
        }
        res.render('view', { user: user})
    } else {
        res.render('error')
    }
})

app.listen(port, () => {
    console.log(`server is running at ${port}`);
});