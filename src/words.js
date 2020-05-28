var words_list = [
    "matematik",
    "ljud",
    "rullstol",
    "vattenmetare",
    "munstycke",
    "middagsmenu",
    "allemanskost",
    "västragötaland",
    "södermalland",
    "koaxialkabel",
    "dubbelhäftande",
    "impertient",
    "epistomologi",
    "perplex",
    "flegmatisk",
    "extemponera",
    "transversal",
    "aberration",
    "agglofantisk"
]

function randomWord() {
    return words_list[Math.floor(Math.random() * words_list.length)]
}

export {
    randomWord
}
