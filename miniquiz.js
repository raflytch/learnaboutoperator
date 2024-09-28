const x = 21;
const y = 23;

// Menghasilkan 25 dengan menambahkan variabel x dan y
const resultAdding = x + y - 19;
console.log(resultAdding);

// Ubah Jadi Nilai Falsa
// console.log(true || (10 && null));
console.log(false || (10 && null));

// urutin data disamping
const scores = [10, 8, 7, 5, 3, 2, 4, 1];
scores.sort((a, b) => {
  return a - b;
});

console.log(scores);

// Cari negara dengan nama 'Spain' dan 'Egland' dan 'Indonesia'
const countries = [
  "Albania",
  "Turkey",
  "Netherland",
  "Germany",
  "Spain",
  "Canada",
  "England",
  "Indonesia",
  "indonesia",
];

const searchCountries = ["Spain", "England", "Indonesia"].map((country) => {
  return country.toLowerCase();
});

// cari negara dengan 'Spain' dan 'Egland' dan 'Indonesia'
console.log(
  countries.filter((country) => searchCountries.includes(country.toLowerCase()))
);

const countriesTwo = [
  "Albania",
  "Turkey",
  "Netherland",
  "Germany",
  "Spain",
  "England",
  "Albania",
  "Germany",
  "Indonesia",
  "Indonesia",
  "Spain",
];

const duplicateCountries = countriesTwo.filter((country, index, array) => {
  return (
    array.indexOf(country) !== index && array.lastIndexOf(country) === index
  );
});

const uniqueDuplicateCountries = [...new Set(duplicateCountries)];

console.log(uniqueDuplicateCountries);
