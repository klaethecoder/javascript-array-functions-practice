const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***REDUCE***
//1. Get total mass of all characters
console.log(characters.reduce((total, chars) => chars.mass + total,0))
//2. Get total height of all characters
console.log(characters.reduce((total, chars) => chars.height + total,0))
//3. Get total number of characters by eye color
console.log(characters.reduce((obj, chars) => {
    const color = chars.eye_color
    obj[color] ? obj[color]++ : obj[color] = 1
    // if(obj[color]){
    //     obj[color] ++;
    // } else{
    //     obj[color] = 1
    // }
    return obj
},{}))
//4. Get total number of characters in all the character names
console.log(characters.reduce((total, cv)=> cv.name.length + total, 0))