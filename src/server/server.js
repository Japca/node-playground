const express = require('express');
const app = express();
const path = require('path');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('../../webpack.dev');
const compiler = webpack(config);


app.get('/getData', (req, res) => {
    foo("dddd")(req, res)
});


const foo = (data) => (req, res) =>
    res.send(data);


if (process.env.NODE_ENV !== 'production') {
    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath
    }));
} else {
    app.use(express.static('dist'));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'dist/index.html'))
    })
}


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Garage player server stared on port: ${PORT}`));

