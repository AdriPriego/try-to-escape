class Obstaculo {

  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.left = 1700;
    this.top = Math.floor(Math.random() * 101 + 700);
    this.width = 22;
    this.height = 22;
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