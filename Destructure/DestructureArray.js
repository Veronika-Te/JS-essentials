const products = [
    ["Laptop", 1000],
    ["Phone", 500],
    ["Tablet", 700]
];
// Destructure the second product's name and price from the array
const phone = products[1]
const [secondProductName, secondProductPrice]=phone
console.log(`Second product: ${secondProductName}`);
console.log(`Second product price: ${secondProductPrice}`);

//Destructure object
const review = {
    title: "Amazing Product",
    description: "This product exceeded my expectations.",
    author: "John Doe",
    timePosted: "2024-11-24"
};

// Destructure properties from the review object
const { author, title, timePosted } =review
// Destructure the author, title, and timePosted properties from the review object
console.log(`${author} posted a review titled, ${title} at ${timePosted}.`);
