const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HQ2BMGy8mg5bsSgZ7zQ8nn2WvOLxEElROAVScUlRE2a3nkVwixfy5dk4SZCFDN2cvvRzMqM7jSI0vIXaE3L6r2K005SaWnWcY');

//API

//app config
const app= express();

//middleware 
// app.use(cors({origin: true}));
app.use(cors({origin:'https://challenge-c052e.web.app/'}))
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('Hello World'))

app.post('/payments/create', async (request, response) =>{
    const total = request.query.total;

    console.log('Payment request receiven Boom!!!  for this amount >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits
        currency: "ars",
   
    })

    //ok-created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})


//listen command
exports.api = functions.https.onRequest(app)
//example endpoint
//(http://localhost:5001/challenge-c052e/us-central1/api)