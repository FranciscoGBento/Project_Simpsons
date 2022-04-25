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
        this.homer = null;
        this.waterArray = [];
        this.vegetablesArray = [];
        this.mrBurnsArray = [];
        this.beerArray = [];
        this.frames = 0;
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
        this.ctx.clearRect(0, 0, this.width, this.height)
        this.frames++;
        this.drawBackground();
        this.homer.drawHomer();
        this.createBadWater();
        /*this.mrburns.drawMrBurns(); */
        this.waterArray.forEach((daWater) => {
            daWater.drawWaterAbove();
        });
        this.createBadVeg();
        this.vegetablesArray.forEach((daVeg) => {
            daVeg.drawVegetables();
        });
        this.createMrBurns();
        this.mrBurnsArray.forEach((daBurns) => {
            daBurns.drawMrBurns();
        });
        this.createBeer();
        this.beerArray.forEach((daBeer) => {
            daBeer.drawBeer();
        });
    }



    createBadWater(){
        if (this.frames % 300 === 0){
             this.waterArray.push(new Water(this));
        }
    }
    
    createBadVeg(){
        if (this.frames % 300 === 0){
             this.vegetablesArray.push(new Vegetables(this));
        }
    }

    createMrBurns(){
        if (this.frames % 300 === 0){
            this.mrBurnsArray.push(new mrBurns(this));
       }   
    }

    createBeer(){
        if (this.frames % 200 === 0){
            this.beerArray.push(new Beer(this));
       }

    }



    drawBackground() {
        this.background.src = "/docs/assets/imgs/moes.jpg";
        this.ctx.drawImage(this.background, this.x, this.y, this.width, this.height)
    }
}