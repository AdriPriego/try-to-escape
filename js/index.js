window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const sonidoStart = document.getElementById("sonidoStart");
  const sonidoCrash = document.getElementById("sonidoCrash");
  sonidoStart.volume = 0.1;
  sonidoCrash.volume = 0.1;
  let game;

  startButton.addEventListener("click", function () {
    startGame();
  });

  restartButton.addEventListener("click", function () {
    restartGame();
  });

  function startGame() {
    game = new Juego();

    game.start();
    game.checkColisiones()
  }

  function restartGame() {
    startGame()
  }
  function handleKeydown(event) {
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowUp",
      "ArrowDown",
    ];


    if (possibleKeystrokes.includes(key)) {
      event.preventDefault();


      switch (key) {
        case "ArrowUp":
          game.player.directionY = -1.5;
          game.police.directionY = -1.5;
          break;
        case "ArrowDown":
          game.player.directionY = 1.5;
          game.police.directionY = 1.5;
          break;
      }
    }
  }


  window.addEventListener("keydown", handleKeydown);
};
