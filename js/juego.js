class Juego {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.gameContainer = document.getElementById("game-container");
    this.player = new Moto(
      this.gameScreen,
      500,
      710,
      100,
      80,
      "./img/kart.gif"
    );
    this.police = new Police(
      this.gameScreen,
      0,
      620,
      350,
      250,
      "./img/cochepolicia.gif"
    );
    this.height = 800;
    this.width = 1500;
    this.obstacles = [];
    this.score = 0;
    this.gameIsOver = false;
    this.gameIntervalId;
    this.obstacleIntervalId
    this.gameLoopFrequency = Math.round(1000 / 60);
    this.obstaculeAppearFrequency = 1500
    this.timer = 0
  }

  //COLISIONES
  checkColisiones() {
    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i]

      if (
        this.player.left < obstacle.left + obstacle.width &&
        this.player.left + this.player.width > obstacle.left &&
        this.player.top + 45 < obstacle.top + obstacle.height &&
        this.player.top + this.player.height > obstacle.top
      ) {
        console.log("toque")
        this.endGame()
      }
    }
  }

  // OBSTACULOS
  aparicionObstaculos() {
    setInterval(() => {
      this.obstacles.push(new Obstaculo(this.gameScreen));
    }, 2000)
  }

  aparicionObstaculos2() {
    setTimeout(() => {
      setInterval(() => {
        this.obstacles.push(new Obstaculo(this.gameScreen));
      }, 2600)
    }, 32555);
  }
  //CONTADOR DE TEMPO
  startTimer() {
    this.timerIntervalId = setInterval(() => {
      this.timer++;
      this.updateTimerDisplay();
    }, 1000);
  }

  updateTimerDisplay() {
    const timerDisplay = document.getElementById("timer-display");
    timerDisplay.textContent = `Recorrido: ${this.timer} Metros`;
  }
  // FUNCUION DE EMPEZAR
  start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;



    this.startScreen.style.display = "none";

    this.gameScreen.style.display = "block";

    this.gameEndScreen.style.display = "none";

    this.aparicionObstaculos();
    this.checkColisiones()
    this.aparicionObstaculos2()
    this.startTimer()

    clearInterval(this.obstacleIntervalId)
    this.gameIntervalId = setInterval(() => {
      this.gameLoop()
    }, this.gameLoopFrequency)
  }
  // BUCLE DEL JUEGO
  gameLoop() {
    this.update();
    this.checkColisiones();
    this.updateTimerDisplay()

    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId)
      clearInterval(this.obstacleIntervalId)
    }
  }

  update() {
    this.player.move();

    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];
      obstacle.move();
    }
    if (Math.random() > 0.98 && this.obstacles.length < 1) {
      this.obstacles.push(new Obstaculo(this.gameScreen));
    }
  }
  // FINAL DE PARTIDA
  endGame() {
    this.gameScreen.style.display = "none";

    this.gameEndScreen.style.display = "flex";


    this.obstacles.forEach(function (obstacle) {
      obstacle.element.remove();
    });

    this.obstacles = [];

    this.player.element.remove()
    this.gameIsOver = true;

    clearInterval(this.gameIntervalId)
    clearInterval(this.obstacleIntervalId)
    clearInterval(this.timerIntervalId);
  }
}