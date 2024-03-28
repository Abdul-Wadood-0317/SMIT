//array par hant saaf krna hai malik:

const marvel_heroes = ["Thor","Hulk","Ironman"]
const dc_heroes = ["Superman","Spiderman","Batman"]

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][0]);

// const all_heroes =  marvel_heroes.concat(dc_heroes)
// console.log(all_heroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_new_heroes);

