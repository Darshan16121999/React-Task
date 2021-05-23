var express = require('express')
var app = express()
app.listen(5000, (err) => { console.log(err || 'Listen') })

// respond with "hello world" using GET
app.get('/', function (req, res) {
    console.log('Got it get');
    res.send('hello world using GET')
    res.end()

})

// respond with "hello world" using post
app.post('/', function (req, res) {
    console.log('Got it post');
    res.send('hello world using post')
    res.end()
})


// respond with "hello world" using put
app.put('/', function (req, res) {
    console.log('Got it put');
    res.send('hello world using put')
    res.end()
})

// respond with "hello world" using delete
app.delete('/', function (req, res) {
    console.log('Got it delete');
    res.send('hello world using delete')
    res.end()
})




