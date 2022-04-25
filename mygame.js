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
        this.donutsArray = [];
        this.frames = 0;
        this.totalScore = 0;
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
        this.createDonuts();
        this.donutsArray.forEach((daDonu) => {
            daDonu.drawDonuts()
        });
        
        this.scoreByItem();
        this.drawScore();
        this.checkGameOver();
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
        if (this.frames % 300 === 0){
            this.beerArray.push(new Beer(this));
       }

    }

    createDonuts(){
        if (this.frames % 300 === 0){
            this.donutsArray.push(new Donuts(this));
       }
    }

    checkGameOver() {
        const homerSimpson = this.homer;
        const crashed = this.waterArray.some(function (daWater) {
          return homerSimpson.crashWith(daWater);
        });
        const crashed2 = this.vegetablesArray.some(function (daVeg) {
           return homerSimpson.crashWith(daVeg);
        });
        const crashed3 = this.mrBurnsArray.some(function (daBurns) {
           return homerSimpson.crashWith(daBurns);
        });
    
        if (crashed) {
          this.stop();
        } else if (crashed2){
          this.stop();
        } else if (crashed3){
          this.stop();
        }
      }

      scoreByItem(){
        const homerSimpson = this.homer;

        this.beerArray.forEach((beer, i, arr) => {
           if(homerSimpson.crashWith(beer)) {
               arr.splice(i, 1)
               this.totalScore +=2
           }
        })
       
        this.donutsArray.forEach((donuts, i, arr) => {
        if(homerSimpson.crashWith(donuts)) {
            arr.splice(i, 1)
            this.totalScore +=1
        }
        })
    }

    stop(){
        clearInterval(this.intervalId);
    }



    drawBackground() {
        this.background.src = "/docs/assets/imgs/moes.jpg";
        this.ctx.drawImage(this.background, this.x, this.y, this.width, this.height)
    }

    drawScore(){
        this.ctx.font = '32px serif';
        this.ctx.fillStyle = 'white';
        this.ctx.fillText(`Score: ${this.totalScore}`, 5, 40 );

    }

    reset(){
        this.ctx.clearRect(0, 0, this.width, this.height);
          

    }

}