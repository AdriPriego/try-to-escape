class Juego {
    constructor() {
      this.startScreen = document.getElementById("game-intro");
      this.gameScreen = document.getElementById("game-screen");
      this.gameEndScreen = document.getElementById("game-end");
      this.player = new Moto(
        this.gameScreen,
        200,
        170,
        100,
        150,
        "./img/motoRepartidor.gif"
      );
      this.height = 330;
      this.width = 1200;
      this.obstacles = [];
      this.score = 0;
      this.gameIsOver = false;
      this.gameIntervalId;
      this.gameLoopFrequency = Math.round(1000/60); 
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
    }
  
    gameLoop() {
      console.log("in the game loop");
  
      this.update();
      
      if (this.gameIsOver) {
        clearInterval(this.gameIntervalId)
      }
    }
  
    update() {
      this.player.move();
  }
  }