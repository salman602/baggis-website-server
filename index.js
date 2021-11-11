
const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000;


const { MongoClient } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.v2tgv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });



async function run() {
    try {
        await client.connect();
        console.log('database is connected successfully')
    }
    finally {
        // await client.close();
    }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('Hello Baggies World!')
})

app.listen(port, () => {
    console.log(`Baggies is listening at ${port}`)
})