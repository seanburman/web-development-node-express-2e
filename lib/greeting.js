const greetings = [
	"Hello",
	"Good Morning",
	"Good Afternoon",
	"Good Evening",
	"Good Night",
]

exports.getGreeting = () => {
    const idx = Math.floor(Math.random()*greetings.length)
    return greetings[idx]
}