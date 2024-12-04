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
let activeButton = null;


fruits.forEach(fruit => {
    let button = document.createElement('div');
    button.innerText = fruit.name;
    button.classList.add('boutonFruits');
    buttonFruit.appendChild(button);

    button.addEventListener('click', () => {
        if (activeFruit === fruit) {
            // Si le fruit est déjà sélectionné, on désélectionne et on remet l'image par défaut
            activeFruit = null;
            imageFruit.style.backgroundImage = 'url(all-fruits.jpg)';
            
            // Retirer la couleur du bouton
            button.style.backgroundColor = ''; 
            // Retirer la couleur de texte du bouton
            button.style.color = ''; 
        } else {
            // Sinon, on sélectionne le fruit et on met à jour l'image
            activeFruit = fruit;
            imageFruit.style.backgroundImage = 'url(' + fruit.image + ')';

            // Si un autre bouton était actif, on enlève la couleur active
            if (activeButton) {
                activeButton.style.backgroundColor = '';
                activeButton.style.color = ''; 
            }

            // Appliquer la couleur active au bouton sélectionné
            button.style.backgroundColor = 'darkorange'; 
            button.style.color = 'blue'; 

            // Mettre à jour le bouton actif
            activeButton = button;
        }
    });

    /*changement de l'image du fruit en passant la souris sur le bouton */
    button.addEventListener('mouseover', () => {
        if (activeFruit !== fruit) {
            imageFruit.style.backgroundImage = 'url(' + fruit.image + ')';
        }
    });

    /*mouvement de la souris*/
    button.addEventListener('mouseout', () => {
        if (activeFruit) {
            imageFruit.style.backgroundImage = 'url(' + activeFruit.image + ')';
        } else {
            imageFruit.style.backgroundImage = 'url(all-fruits.jpg)';
        }
    });

    imageFruit.style.height = '100vh';
    imageFruit.style.width = '100vh';
    button.style.height = '20%';
    button.style.width = '100%';
});

