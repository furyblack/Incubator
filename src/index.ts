import express from 'express'
export const app = express();
const port=3000


app.listen(port, () =>
{
    console.log(`App start on port ${port}`)
})
