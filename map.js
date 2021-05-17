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

//***MAP***
//1. Get array of all names
console.log(characters.map(item => item.name))
//2. Get array of all heights
console.log(characters.map(item => item.height))
//3. Get array of objects with just name and height properties
console.log(characters.map(item => `${item.name} is ${item.height} in tall`))
//4. Get array of all first names
console.log(characters.map(item => item.name.split(' ')[0]))