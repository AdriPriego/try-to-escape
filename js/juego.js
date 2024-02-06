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

    this.obstaculosArr = []
    this.gameIntervalId; 
    this.obstacleIntervalId;//
    this.obstaculeAppearFrequency = 1500//
  }

  start() {
    // altura y anchura
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;

    // ocultar la pantalla
    this.startScreen.style.display = "none";
    // enseñar la pantalla
    this.gameScreen.style.display = "block";

    this.gameIntervalId = setInterval(() => {
      this.gameLoop()
    }, this.gameLoopFrequency)

    /*this.obstacleIntervalId = setInterval(() => {
      this.createObstacle()
    }, this.obstaculeAppearFrequency);*/
    
  }


  gameLoop() {
    console.log("in the game loop");

    this.update();

    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId)
      clearInterval(this.obstacleIntervalId)//
    }
  }

  update() {
    this.player.move();
    //this.police.move()
  }
}