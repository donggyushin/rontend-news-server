import express from 'express';
import ApiV1 from './apiv1'
const app = express()


// test api
app.get('/', (req, res) => {
    res.json({
        ok: true
    })
})

app.use('/api', ApiV1)

export default app;

