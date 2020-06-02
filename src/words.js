const words_list = [
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
];

const randomWord = () => {
    return words_list[Math.floor(Math.random() * words_list.length)];
};

const randomWord1 = () => {
    return words_list[Math.floor(Math.random() * words_list.length)];
};

export { randomWord, randomWord1 };
