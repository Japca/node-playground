const express = require('express');
const server = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

server.get('/getData', (req, res) => {
    foo("dddd")(req, res)
});


const foo =  (data) => (req, res) =>
    res.send(data);


if(process.env.NODE_ENV !== 'procuction') {
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const webpackConfig = require('../../webpack.dev');
  server.use(webpackMiddleware(webpack(webpackConfig)))
} else {
  server.use(express.static('public'));
  server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
  })
 }

 
server.listen(PORT, () => console.log(`Garage player server stared on port: ${PORT}`))
;
