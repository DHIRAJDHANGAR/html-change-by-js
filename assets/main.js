//print card by id-method

let list = document.getElementById("list");
let productListObjArray = [
    {
        Image: "./img.webp",
        name: "Mens",
        prize: 400,
        brand: "google",
    },
    {
        Image: "./img.webp",
        name: "Mens",
        prize: 450,
        brand: "Apple",
    },{
        Image: "./img.webp",
        name: "Mens",
        prize: 500,
        brand: "redmi",
    }
];
for (let i = 0; i < productListObjArray.length; i++){
    var card = document.createElement("div");
    card.className = "card-page";
    card.innerHTML = 
    "<img class='card-image' src=" +
    productListObjArray[i].Image +
    "><div class='card-name'>" +
    productListObjArray[i].name +
    "</div><div class='card-prize'>" +
    productListObjArray[i].prize +
    "</div><div class='card-brand'>" +
    productListObjArray[i].brand +
    "</div>";
    list.appendChild(card);
}
console.log(list);


//print card 

let grid = document.getElementById("list");
let card = document.createElement("div");
  card.className = "card";
  card.innerHTML = 
  "<div><div class='card-name'>" +
   "dhirajkumar" +
   "</div><div class='card-prize'>" +
   "$450" +
   "</div></div>"
    grid.appendChild(card);
  console.log(card);

