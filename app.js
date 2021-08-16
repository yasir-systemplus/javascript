const group1 = ["Bilal", "Farhan", "Aqib"];
const group2 = ["Jameel", "Adill", "Nouman"];

const [first, second, ...all] = group2;
console.log(first, second, all);

console.log(group1.includes("Bilal"));
