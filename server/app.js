const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const { connectDB } = require('./src/configs/mongodb')
require('dotenv').config()

const app = express()
connectDB()

app.use(morgan('dev'))
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(
	fileUpload({
		useTempFiles: true,
	})
)

const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`Listening: http://localhost:${port}`)
})
