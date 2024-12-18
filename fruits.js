let fruits = [
    { name: "Orange", image: "orange.jpg" },
    { name: "Kiwi", image: "kiwi.jpg" },
    { name: "Banane", image: "banane.jpg" },
    { name: "Peche", image: "peche.jpg" },
    { name: "Cerise", image: "cerise.jpg" },
  ];
  
  let button = document.getElementById("fruits");
  let imageContainer = document.getElementById("imageFruit");
  let SelectedImage = "";
  
  fruits.forEach((fruit) => {
    const fruitObjet = new Fruit(fruit.name, fruit.image);
    button.appendChild(fruitObjet.getHtml());
    console.log(fruitObjet);
    
  });