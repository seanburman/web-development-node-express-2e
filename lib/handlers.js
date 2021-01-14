const greeting = require('./greeting')

exports.home = (req, res) => res.render('home')

exports.about = (req, res) =>
    res.render('about', { greeting: greeting.getGreeting() })

exports.notFound = (req, res) => res.render('404')

exports.serverError = (err, req, res, next) => res.render('500')