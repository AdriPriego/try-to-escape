class Obstaculo {
  
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.left = 1300;
    this.top = Math.floor(Math.random() * 101 + 700); //entre 700 y 800
    this.width = 40;
    this.height = 40;
    this.element = document.createElement("img");

    this.element.src = "./img/obstacle.png";
    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;

    this.gameScreen.appendChild(this.element);

    this.speed = 3
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`
    this.element.style.top = `${this.top}px`
  }

 move() {
  this.left -= this.speed;
  this.updatePosition()
 }
}