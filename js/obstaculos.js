class Obstaculo {

  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.left = Math.floor(Math.random() * 1000 + 200);
    this.top = 730;
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

    this.x = gameScreen.offsetWidth;
    this.speed = 1
  }

  automaticMovement() {

    this.x -= this.speed
    this.node.style.left = `${this.x}px`

  }
}