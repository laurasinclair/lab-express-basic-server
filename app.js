// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require('express')
const app = express()


const morgan = require('morgan')

// CREATE EXPRESS APP
// Here you should create your Express app:

app.use(express.static('public'))
app.use(express.json())
app.use(morgan('dev'))

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests

// ROUTES
// Start defining your routes here:

app.get('/', (request, response) => {
	response.sendFile(__dirname + '/views/home.html')
})

app.get('/blog', (request, response) => {
	response.sendFile(__dirname + '/views/blog.html')
})

const projects = require('./data/projects.json')
app.get('/api/projects', (request, response) => {
	response.send(projects)
})

const articles = require('./data/articles.json')
app.get('/api/articles', (request, response) => {
	response.send(articles)
})


app.get('*', (request, response) => {
	response.sendFile(__dirname + '/views/not-found.html')
})


// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, (error) => {
	console.log('App listening on port 5005!')

	if (error) {
		console.error('Error:', error)
		return
	}
})
