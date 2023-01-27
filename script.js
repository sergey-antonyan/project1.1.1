const productsul = document.querySelector("#productsul"); //products-i meji ul-nery
const products = document.querySelector("#products"); // filtri meji producty
const main = document.querySelector("#main");
const basket = document.querySelector("#basket"); //gnelu knopka
const container = document.querySelector(".container"); //apranq
const buttons = document.getElementsByClassName("buttonCss");
const shoes = document.querySelector("#shoesID");
const clothes = document.querySelector("#clothesID");
const perfume = document.querySelector("#perfumeID");
const accessories = document.querySelector("#accessoriesID");
const malecheckbox = document.querySelector("#checkMale");
const femalecheckbox = document.querySelector("#checkFemale");
let maleIsChecked = (malecheckbox.checked = true);
let femaleIsChecked = (femalecheckbox.checked = true);

const allProducts = [
  {
    type: "shoes",
    gender: "female",
    image: "./Foto/shoes 1.webp",
    price: "9950 AMD (֏)",
    name: "shoes1female",
    onclick: false,
  },
  {
    type: "shoes",
    gender: "male",
    image: "./Foto/shoes2.jpeg",
    price: "12500 AMD (֏)",
    name: "shoes2male",
    onclick: false,
  },
  {
    type: "shoes",
    gender: "male",
    image: "./Foto/shoes3.jpeg",
    price: "8000 AMD (֏)",
    name: "shoes3male",
    onclick: false,
  },
  {
    type: "perfume",
    gender: "female",
    image: "./Foto/perfume 1.jpg",
    price: "22500 AMD (֏)",
    name: "parfumeFemale",
    onclick: false,
  },
  {
    type: "clothes",
    gender: "male",
    image: "./Foto/clothes 1.jpg",
    price: "4500 AMD (֏)",
    name: "clothesmale1",
    onclick: false,
  },
  {
    type: "clothes",
    gender: "male",
    image: "./Foto/clothes 2.jpeg",
    price: "6700 AMD (֏)",
    name: "clothesmale2",
    onclick: false,
  },
  {
    type: "clothes",
    gender: "male",
    image: "./Foto/clothes 3.webp",
    price: "9850 AMD (֏)",
    name: "clothesmale3",
    onclick: false,
  },
  {
    type: "accessories",
    gender: "female",
    image: "./Foto/accesories 3.jpeg",
    price: "38000 AMD (֏)",
    name: "watchesfemale1",
    onclick: false,
  },
  {
    type: "accessories",
    gender: "female",
    image: "./Foto/accessories 2.jpeg",
    price: "12000 AMD (֏)",
    name: "glassesfemale1",
    onclick: false,
  },
];

visual(allProducts);

malecheckbox.addEventListener("click", function () {
  if (this.checked) {
    maleIsChecked = true;
  } else {
    maleIsChecked = false;
  }
  console.log(maleIsChecked);
});

femalecheckbox.addEventListener("click", function () {
  if (this.checked) {
    femaleIsChecked = true;
  } else {
    femaleIsChecked = false;
  }
  console.log(femaleIsChecked);
});

products.addEventListener("click", () => vue());
basket.addEventListener("click", () => basketclick());
shoes.addEventListener("click", function () {
  typeSelector("shoes");
});
clothes.addEventListener("click", function () {
  typeSelector("clothes");
});
perfume.addEventListener("click", function () {
  typeSelector("perfume");
});
accessories.addEventListener("click", function () {
  typeSelector("accessories");
});


function buttonClicked () {
for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  button.onclick = function () {
    if (allProducts[i].onclick === false) {
      allProducts[i].onclick = true;
    } else {
      allProducts[i].onclick = false;
    }
  };
}}
buttonClicked()

function typeSelector(type) {
  // main.textContent  = "";
  let newarr3 = allProducts.filter((el) => el.type == type);
  visual(newarr3);
  basket.addEventListener(
    "click",
    () =>
      function () {
        basketclick(newarr3);
      }
  );
}

function vue() {
  visual(allProducts);
  if (productsul.style.display == "none") {
    productsul.style.display = "block";
  } else {
    productsul.style.display = "none";
  }
}

function visual(arr) {
  main.textContent = "";
  for (i = 0; i < arr.length; i++) {
    let div = document.createElement("div");
    let image = document.createElement("img"); //nkary stexcel
    let price = document.createElement("span"); // giny stexcel
    let button = document.createElement("button"); //button stexcel
    let name = document.createElement("p"); //anuny stexcel
    let pricebutton = document.createElement("div");
    pricebutton.classList.add("pricebutton"); //pricebutton-i hamar
    div.classList.add("container");
    image.classList.add("imageCss"); //css- hamar
    button.classList.add("buttonCss"); //css-i hamar
    price.classList.add("priceCss"); //css-i hamar
    name.classList.add("nameCss");
    image.src = arr[i].image;
    price.textContent = arr[i].price;
    button.textContent = "";
    name.textContent = arr[i].name;
    pricebutton.append(price, button);
    div.append(image, pricebutton, name);
    main.appendChild(div);
  }
}

function basketclick(arr) {
  main.textContent = "";
  arr = allProducts.filter((element) => element.onclick == true);
  visual(arr);
  console.log(allProducts,arr);
  buttonClicked()
}

pricebutton.addEventListener("click",aaaa)

// function aaaa () {
//   for(i=0;i<allProducts.length;i++){
//   if (allProducts[i].onclick=true) {
//     allProducts[i].name.style.color="red"
//   }}
//             }



