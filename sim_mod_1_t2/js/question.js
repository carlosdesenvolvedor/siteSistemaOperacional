const fs = require('fs')

fs.readFile('perguntas.txt', 'utf8', (err, data) => {
    if (err) {
        throw err
    }
    
    const perguntas = data.split('\n')
    setAvailableQuestions(perguntas)
})