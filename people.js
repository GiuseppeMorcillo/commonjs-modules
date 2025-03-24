const createName = require('./names');
const createHobbies = require('./hobbies');

function createPerson() {
    const fullName = createName('Mario', 'Rossi');
    const hobbies = createHobbies('Calcio', 'Lettura', 'Videogiochi');
    
    return {
        fullName,
        hobbies
    };
}
console.log(createPerson());
