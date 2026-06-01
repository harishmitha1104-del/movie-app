const movies = [
    ["Avatar", "Enter the world", 7.8],
    ["Titanic", "A love story", 7.9]
];

for (const m of movies) {
    console.log("Title:", m[0]);
    console.log("Tagline:", m[1]);
    console.log("Rating:", m[2] + "/10");
    console.log("----------------");
}