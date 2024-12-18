class Fruit {
    constructor(nom, image) {
      this.nom = nom;
      this.image = image;
      this.html = this.CreationHtml();
    }
  
    CreationHtml() {
      let div = document.createElement("div");
      div.textContent = this.nom;
      div.classList.add("boutonFruits");
      const buttonHeight = `${100 / fruits.length}vh`
      div.style.height = buttonHeight;
      div.addEventListener("click", () => {
        let allButtons = document.querySelectorAll(".boutonFruits");
        allButtons.forEach((btn) => {
          btn.style.backgroundColor = "gray";
        });
        div.style.backgroundColor = "red";
        SelectedImage = `url(${this.image})`;
        imageContainer.style.backgroundImage = SelectedImage;
      });
      div.addEventListener("mouseout", () => {
        imageContainer.style.backgroundImage = SelectedImage;
      });
      div.addEventListener("mouseover", () => {
        imageContainer.style.backgroundImage = `url(${this.image})`;
      });
  
      return div;
    }
  
    getHtml() {
      return this.html;
    }
  }