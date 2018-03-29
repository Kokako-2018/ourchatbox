var express = require('express')
var hbs = require('express-handlebars')
//var bodyParser = require('body-parser')


var server = express()

// Middleware
server.engine('hbs', hbs({
    defaultLayout: 'main',
    extname: 'hbs'
  }))
  server.set('view engine', 'hbs')
  server.use(express.static('public'))
  //server.use(bodyParser.urlencoded({ extended: false }))
  

  server.get('/', function(req, res){
      res.send('HEllo world!')
  })

  module.exports = server
  