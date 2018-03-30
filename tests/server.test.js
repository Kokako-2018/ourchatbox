var server = require("../server.js")
var request = require("supertest")
var cheerio = require("cheerio")

// test('Tests are working', function() {
// expect(true).toBeTruthy()

// })

test('Test / is working', function (done) {

    request(server)
    .get('/')
    .expect(200)
    .end(function (err, res){
        expect(err).toBeFalsy()
        var $ = cheerio.load(res.text)
        expect($('h1').first().text()).toEqual("Steve's Jobs")
        done()
    })
})


test('Test link is correct', () => {
    request(server)
    .get('/')
    .expect(200)
    .end(function (err, res){
        expect(err).toBeFalsy()
        var $ = cheerio.load(res.text)
        expect($('.users').find('a').first().prop('href')).toEqual("/1")
        done()
    })
})

test('Third test', () => {
    request(server)
    .get('/')
    .expect(200)
    .end(function (err, res){
        expect(err).toBeFalsy()
        var $ = cheerio.load(res.text)
        expect($(title).first().text()).toEqual("Steve's Jobs")
        done()
    })
})