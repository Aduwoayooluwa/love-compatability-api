import { Response, Request } from "express";

const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
// 'Content-Type': aplication/json/x-www-form-url-encoded
app.use(express.urlencoded({ extended: false }))

//  built in middleware for json
app.use(express.json());

// routing
app.use('/love', require('./routes/love'))

app.get('/', (req: Request, res: Response) => {
    res.json({"message": "It is fetched"})
})
app.get('*', (req: Request, res: Response) => {
    res.json({"message": "You have entered the unknown. find your way back", "title": "Your are Lost"})
})


app.listen(PORT, (req: Request, res: Response) => {
    console.log(`App Started on Port ${PORT}`)
})