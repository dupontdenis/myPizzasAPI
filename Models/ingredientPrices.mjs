// Ingredient price list
// Exported as an ES module default Map so it can be imported via dynamic import() in CommonJS
// Prices are example values in generic currency units

const ingredientPrices = new Map([
  ["🍅", 0.5], // tomato
  ["🧀", 1.0], // cheese
  ["🍄", 0.8], // mushrooms
  ["🐷", 1.2], // ham/pork
  ["🐑", 1.3], // lamb
  ["🌶", 0.4], // chili
  ["🌵", 0.2], // cactus (fun topping)
  ["🥷", 2.5], // special
  ["👿", 2.0], // extra spicy
]);

export default ingredientPrices;
