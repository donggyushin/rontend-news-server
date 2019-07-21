import express from 'express';
import ApiV1 from './apiv1'
import bodyParser from "body-parser"
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json('application/json'));
// test api
app.get('/', (req, res) => {
    res.json({
        ok: true
    })
})

app.use('/api', ApiV1)

export default app;

