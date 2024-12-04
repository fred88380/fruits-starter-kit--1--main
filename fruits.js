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
    /*changement de l'image du fruit en passant la souris sur le bouton */
    button.addEventListener('mouseover', ()=>{
        if (activeFruit!==fruit){
        imageFruit.style.backgroundImage = 'url(' +fruit.image +')';
        }
    });
    /*mouvement de la souris*/
    button.addEventListener('mouseout', ()=>{
        if (activeFruit) {
            imageFruit.style.backgroundImage = 'url(' + activeFruit.image + ')';
        } else {
        imageFruit.style.backgroundImage =  'url(all-fruits.jpg)'; 
        }
    });
    
    imageFruit.style.height= '100vh';
    imageFruit.style.width = '100vh';
    button.style.height= '20%';
    button.style.width='100%';
});
    


