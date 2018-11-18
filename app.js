const port = process.env.PORT || 3000
const service_name = process.env.SERVICE_NAME || 'paas-helloword'

const util = require('util')
const express = require('express')
const app = express()
// const request = require('request-promise-native')

function getEnv() {
 return "";
 return util.inspect(process.env);
}

app.get('/hc', (req, res) => {
    res.end("OK");
})

app.get('/', (req, res) => {

    res.end(service_name+" - helloworld");

})

app.listen(port, () => {
    console.log(service_name+" listening on port "+port)
})

// console.log("ENV: "+getEnv());
