const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8000
const essays = require('./apis')

app.use(cors());
app.use(express.urlencoded());
app.use(express.json())
app.use('/essays', essays);


app.listen(PORT, console.log(`Server started on port ${PORT}`));