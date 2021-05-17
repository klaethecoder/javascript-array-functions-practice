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

//***SORT***
//1. Sort by mass
console.log(characters.sort((a,b) => a.mass-b.mass))
//2. Sort by height
console.log(characters.sort((a,b) => a.height-b.height))
//3. Sort by name
console.log(characters.sort((a,b) => a.name < b.name ? -1 : 1))
//4. Sort by gender
console.log(characters.sort((a,b) => a.gender<b.gender ? -1 : 1))