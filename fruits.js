let fruits = [  
                { name: "Orange", image: "orange.jpg" }, 
                { name: "Kiwi", image: "kiwi.jpg" }, 
                { name: "Banane", image: "banane.jpg" }, 
                { name: "Peche", image: "peche.jpg" }, 
                { name: "Cerise", image: "cerise.jpg" }
            ];

let buttonFruit = document.getElementById('fruits');
let imageFruit = document.getElementById('imageFruit');
let activeFruit = null;


fruits.forEach(fruit => {
    let button = document.createElement('div');
    button.innerText = fruit.name;
    button.classList.add('boutonFruits');
    buttonFruit.appendChild(button);

    button.addEventListener('click', () => {
        imageFruit.style.backgroundImage = 'url(' + fruit.image + ')';

    });
    button.addEventListener('mouseover', ()=>{
        if (activeFruit!==fruit){
        imageFruit.style.backgroundImage = 'url(' +fruit.image +')';
        }
    });
    button.addEventListener('mouseout', ()=>{
        if (activeFruit) {
            imageFruit.style.backgroundImage = 'url(' + activeFruit.image + ')';
        } else {
        imageFruit.style.backgroundImage =  'url(all-fruits.jpg)'; 
        }
    });
    let div =document.getElementById ('imageFruit');
    div.style.height= '100vh';
    div.style.width = '100vh';
    button.style.height= '20%';
    button.style.width='100%';
});
    


