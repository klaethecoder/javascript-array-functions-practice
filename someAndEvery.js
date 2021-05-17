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

//***EVERY***
//1. Does every character have blue eyes?
console.log(characters.every(char=> char.eye_color == "blue"))
//2. Does every character have mass more than 40?
console.log(characters.every(char=> char.mass > 40))
//3. Is every character shorter than 200?
console.log(characters.every(char=> char.height < 200))
//4. Is every character male?
console.log(characters.every(char=> char.gender == "male"))

//***SOME***
//1. Is there at least one male character?
console.log(characters.some(char => char.gender=="male"))
//2. Is there at least one character with blue eyes?
console.log(characters.some(char => char.eye_color=="blue"))
//3. Is there at least one character taller than 210?
console.log(characters.some(char => char.mass>210))
//4. Is there at least one character that has mass less than 50?
console.log(characters.some(char => char.mass<50))