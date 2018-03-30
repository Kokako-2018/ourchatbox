var express = require('express')
var hbs = require('express-handlebars')
var bodyParser = require('body-parser')


var server = express()

var data = require('./data.js')

var tempUsers = [
    {
    id: 1,
    name: 'Maddy',
    text: [{user: 'Maddy', 
            message: 'Steve should mop the floor'}],
    // imageurl:  
    }, 
    {
        id: 2,
        name: 'Laura',
        text: [{user: 'Laura', 
                message: "great idea. also he should dance for us!"}]
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
  console.log("data:", data)

  server.get('/', function(req,res){
    res.render('userPage', data)
    
  })


  server.get('/:id', function(req, res){
    var userOne = tempUsers.find(function(user){
        return user.id == req.params.id
    })
    var userTwo = tempUsers.find(function(user) {
        return user.id != req.params.id
    })
    res.render('chatInput', {userOne, userTwo}) // need to link to user data file 
  })

  server.post('/:id', function (req, res) {
    console.log(req.body, req.params.id)
    var message = req.body.message
    var onePerson = tempUsers.find(function(onePerson){
        return onePerson.id == req.params.id
    }) 
    onePerson.text.push({user: onePerson.name, message})
    console.log(onePerson.text)
    res.redirect('/' + req.params.id)
  })
  



  module.exports = server
  