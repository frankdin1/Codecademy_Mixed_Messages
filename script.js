// let numArr = [1, 2, 3, 4, 5]
// let index = Math.floor(Math.random() * numArr.length)
// console.log("The program chose the number " + numArr[index])
// const prompt = require('prompt-sync')()
// const name = prompt("Whats's your name")
// console.log(`Your name is ${name}`)

let actors = [
'Denzel Washington', 
'Viola Davis', 
'Forest Whitaker', 
'Micheal B. Jordan',
'Chadwick Boseman',
'Monique',
'Will Smith',
'Jamie Foxx',
'Eddie Murphy',
'Morgan Freeman',
'Sidney Poitier',
'Samuel L. Jackson',
'Cuba Gooding Jr.',
'Laurence Fishburne',
'Wesley Snipes',
'Cicely Tyson',
'Hattie McDaniel',
'Halle Berry',
'Regina King',
'Kerry Washington',
'Octavia Spencer',
'Taraji P. Henson',
'Angela Bassett',
'Keke Palmer',
'Alfre Woodard',
'Pam Grier',
'Nia Long'
]

let movies = [
    'The Lord of The Rings',
    'Batman Begins',
    'Superfly',
    'Starsky and Hutch',
    'The Woman King',
    'The Dark Knight Rises',
    'Man of Steel',
    'The Winter Soldier',
    'Die Hard',
    'Kill Bill',
    'The Avengers',
    'The Spook Who Sat by The Door',
    'Avatar',
    'Titanic',
    'The Pale Blue Eye',
    'Knives Out',
    'Devotion',
    'The Shawshank Redemption',
    'The Godfather',
    'Schindler\'s List',
    '12 Angry Men',
    'Pulp Fiction',
    'Fight Club',
    'Forrest Gump',
    'The Good, the Bad, the Ugly',
    'Inception',
    'The Matrix',
    'Star Wars'
]

let famousMovieLines = [
    'May the Force be with you.',
    'There\'s no place like home.',
    "I\'m the king of the world!",
    'Carpe diem. Seize the day, boys. Make your lives extraordinary.',
    'Elementary, my dear Watson.',
    'It\'s alive! It\'s alive!',
    'My mama always said life was like a box of chocolates. You never know what you\'re gonna get.',
    'I\'ll be back.',
    'You\'re gonna need a bigger boat.',
    'Here\'s looking at you, kid.',
    'My precious',
    'Houston, we have a problem.',
    'There\'s no crying in baseball.',
    'E.T phone home.',
    'You can\'t handle the truth!',
    'A martini. Shaken not stirred.',
    'Life is a banquet, and most poor suckers are starving to death!',
    'If you build it, he will come.',
    'The stuff dreams are made of.',
    'Magic Mirror on the wall, who is the fairest one of all?',
    'Keep your friends close, but your enemies closer.',
    'I am your father.',
    'Just keep swimming.',
    'Today, I consider myself the luckiest man on the face of the earth.',
    'You is kind. You is smart. You is important.',
    'What we\'ve got here is failure to communicate.',
    'hasta la Vista, baby.',
    'You don\'t understand! I coulda had class. I coulda been a contender. I could\'ve been somebody, instead of a bum, which is what I am.',
    'Bond, James Bond.',
    'It was beauty that killed the beast.'
]

let actorIndex = Math.floor(Math.random() * actors.length)
let movieIndex = Math.floor(Math.random() * movies.length)
let movieLinesindex = Math.floor(Math.random() * famousMovieLines.length)
let actor = actors[actorIndex]
let movie = movies[movieIndex]
let movieLine = famousMovieLines[movieLinesindex]

console.log(`${actor} was in ${movie}, and said \"${movieLine}\"`)