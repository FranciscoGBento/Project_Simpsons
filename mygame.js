class Game {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.background = new Image();
        this.x = 0;
        this.y = 0;
        this.width = 900;
        this.height = 500;
        this.intervalId = null;
    }

    start(){
        this.homer = new Player(this, 400, 200, 75, 100)
        this.controls = new Controls(this);
        this.controls.keyboardEvents();
        this.intervalId = setInterval(() => {
            this.update();
          }, 1000 / 60);

    }

    update(){
        this.drawBackground();
        this.homer.drawHomer();

    }



    drawBackground() {
        this.background.src = "/docs/assets/imgs/moes.jpg";
        this.ctx.drawImage(this.background, this.x, this.y, this.width, this.height)
    }
}