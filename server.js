var express = require('express')
var hbs = require('express-handlebars')
var bodyParser = require('body-parser')


var server = express()

var tempUsers = [
    {
    id: 1,
    name: 'Maddy',
    text: 'thing',
    // imageurl:  
}, 
{
    id: 2,
    name: 'Laura',
    text: ''
}
]

// Middleware
server.engine('hbs', hbs({
    //defaultLayout: 'main',
    extname: 'hbs'
  }))
  server.set('view engine', 'hbs')
  server.use(express.static('public'))
  server.use(bodyParser.urlencoded({ extended: false }))
  

  server.get('/:id', function(req, res){
    var onePerson = tempUsers.find(function(user){
        return user.id == req.params.id
    })
      res.render('chatInput', onePerson) // need to link to user data file 
  })

  server.post('/:id', function (req, res) {
    console.log(req.body, req.params.id)
    var message = req.body.message
    var onePerson = tempUsers.find(function(onePerson){
        return onePerson.id == req.params.id
    }) 
    onePerson.text = message
    res.redirect('/' + req.params.id)
  })

  module.exports = server
  