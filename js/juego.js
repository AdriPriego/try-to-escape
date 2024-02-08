class Juego {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.player = new Moto(
      this.gameScreen,
      500,
      630,
      150,
      150,
      "./img/motoRepartidor.gif"
    );
    this.police = new Police(
      this.gameScreen,
      0,
      570,
      400,
      300,
      "./img/cochepolicia.gif"
    );
    this.height = 800;
    this.width = 1500;
    this.obstacles = [];
    this.score = 0;
    this.gameIsOver = false;
    this.gameIntervalId;
    this.gameLoopFrequency = Math.round(1000 / 60);
    this.obstaculeAppearFrequency = 1500//
  }


  checkColisiones() {
    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i]

      if(
        this.player.left < obstacle.left + obstacle.width &&
        this.player.left + this.player.width > obstacle.left &&
        this.player.top < obstacle.top + obstacle.height &&
        this.player.top + this.player.height > obstacle.top
      ) {
        console.log("toque")
      }
    }
  }


  aparicionObstaculos() {
    setInterval(() => {
      this.obstacles.push(new Obstaculo(this.gameScreen)); //agrega un elemento nuevo al final
    }, 3000)
  }

  aparicionObstaculos2() {
    setTimeout(() => {
      setInterval(() => {
        this.obstacles.push(new Obstaculo(this.gameScreen)); 
      }, 2000)
    }, 5000);
  }

  start() {
    // altura y anchura
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;

    // ocultar la pantalla
    this.startScreen.style.display = "none";
    // enseñar la pantalla
    this.gameScreen.style.display = "block";

    this.aparicionObstaculos();
    this.checkColisiones()
    this.aparicionObstaculos2()

    this.gameIntervalId = setInterval(() => {
      this.gameLoop()
    }, this.gameLoopFrequency)
  }

  gameLoop() {
    console.log("in the game loop");

    this.update();
    this.checkColisiones();

    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId)
    }
  }

  update() {
    this.player.move();
    //this.police.move()

    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];
      obstacle.move();
    }
    if (Math.random() > 0.98 && this.obstacles.length < 1) {
      this.obstacles.push(new Obstaculo(this.gameScreen));
    }
  }
}