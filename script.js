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

let singers = [
    'Beyonce',
    'Usher',
    'Alicia Keys',
    'Tank',
    'Whitney Houston',
    'Jennifer Hudson',
    'Jazmin Sullivan',
    'Sade',
    'Rihanna',
    'Brick and Lace',
    'P-Square',
    'Locko',
    'R. Kelly',
    'Tyrese Gibson',
    'Chris Brown',
    'Brymo',
    'Fella A. Kuti',
    'Kotto Bass',
    'Longue Longue',
    'Angelique Kidjo',
    'Kelly Rowland',
    'Singuila',
    'Fally Ipupa',
    'Cysoul',
    'Masego',
    'Normani',
    'Coco Jones',
    'Lucky Daye',
    'Kevin Ross',
    'Victoria Monet',
    'Kehlani',
    'SiR',
    'Tiana Major9',
    'EARTHGANG'
]

let songs = [
    'Caliber',
    'Thong Songs',
    'A Long Walk',
    'Bag Lady',
    'Izzo',
    'Bootylicious',
    'Get Busy',
    'Crazy in Love',
    'What We Do',
    'Hey Ya',
    'Survivor',
    'Milkshake',
    'Drop it Like It\'s Hot',
    'Yeah!',
    'Knuck If You Buck',
    'A Woman\'s Worth',
    'Noone',
    'You Don\'t Have To Call',
    'More Than A Woman',
    'Right Here With Me',
    'No Chaser',
    'Rehab',
    'Pon De Replay',
    'Homecoming',
    'We Belong Together',
    'Yo (Excuse Me Miss)',
    'Run It',
    'Wipe Me Down',
    'crank That',
    'Say My Name',
    'Killing Me Softly With His Song',
    'Fantasy',
    'End Of The Road',
    'If I Ain\'t Got You',
    'All My Life'
]

let chorusFirstLine = [
    'I can feel your halo',
    'Billie Jean is not my lover',
    'Just beat it, beat it, beat it, beat it',
    'I look to you',
    'We\'re just ordinary people',
    'How do you heal a broken heart',
    'Girl you know I, girl you know I, I been feelin\'',
    'Listen, I am alone at a crossroads',
    'And no one, no one, no one',
    'Who you are, who you are, who you are',
    'You\'re just like poison',
    'I don\'t wanna be without you babe',
    'You had me at hello',
    'If you liked it then you should have put a ring on it',
    'I\'m scared of lonely',
    'I wish you\'d hold me in your arms',
    'What are you thinking?',
    'See baby we\'ve been too strong for too long'
]

function createIndex(arr){
    return Math.floor(Math.random() * arr.length)
}

let actorIndex = createIndex(actors)
let movieIndex = createIndex(movies)
let movieLinesindex = createIndex(famousMovieLines)
let actor = actors[actorIndex]
let movie = movies[movieIndex]
let movieLine = famousMovieLines[movieLinesindex]

console.log(`${actor} was in ${movie}, and said \"${movieLine}\"`)