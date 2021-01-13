const greetings = [
	"Hello",
	"Good Morning",
	"Good Afternoon",
	"Good Evening",
	"Good Night",
]

const express = require('express')
const expressHandlebars = require('express-handlebars')

const app = express()

//Configure Handlebards view engine
app.engine('handlebars', expressHandlebars({
	defaultLayout: 'main',
}))

app.set('view engine', 'handlebars')

const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => res.render('home'))

app.get('/about', (req, res) => {
	const randomGreeting = greetings[Math.floor(Math.random()*greetings.length)]
	res.render('about', { greeting: randomGreeting })
})

//custom 404 page
app.use((req, res) => {
	res.status(404)
	res.render('404')
})

app.use((err, req, res, next) => {
	console.error(err.message)
	res.status(500)
	res.render('500')
})

app.listen(port, () => console.log(
	`Express started on http://localhost:${port}; ` +
	`press Ctrl-C to terminate. `))
