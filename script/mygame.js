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
        this.countdownTimer = 60;
        const nelson = new Image();
        nelson.addEventListener("load", () => {
            this.nelson = nelson
        });
        nelson.src = "./docs/assets/imgs/nelson1.png"
        this.soundNelson = new Audio('./docs/assets/sounds/aHaHnelson.mp3');
        this.donutsSound = new Audio('./docs/assets/sounds/donutsSound.mp3');
        this.beerSound = new Audio('./docs/assets/sounds/beerSound.wav');
        this.waterSound = new Audio('./docs/assets/sounds/dohHomer.WAV');
        this.lsStore = null;
        this.highscore = 0;


    }

    start(){
        this.homer = new Player(this, 400, 200, 60, 100)
        /* this.homer.img.src = "./docs/assets/imgs/homerightup.png"; */ 
        this.controls = new Controls(this);
        this.controls.keyboardEvents();
        this.checkHighScore();
        this.intervalId = setInterval(() => {
            this.update();
          }, 1000 / 60);
        

    }

    update(){
        this.ctx.clearRect(0, 0, this.width, this.height)
        this.countdownTimer = 60 - Math.floor(this.frames / 60);
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
        this.createTimer();
        this.checkGameOver();
        this.createHighScore();

    }



    createBadWater(){
        if (this.frames % 240 === 0){
             this.waterArray.push(new Water(this));
        }
    }

    createTimer(){
        
        this.ctx.font = '32px serif';
        this.ctx.fillStyle = 'white';
        this.ctx.fillText(`TIMER: ${this.countdownTimer}`, 730, 40 );

    }
    
    createBadVeg(){
        if (this.frames % 240 === 0){
             this.vegetablesArray.push(new Vegetables(this));
        }
    }

    createMrBurns(){
        if (this.frames % 240 === 0){
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
        const crashed2 = this.vegetablesArray.some(function (daVeg) {
           return homerSimpson.crashWith(daVeg);
        });
        const crashed3 = this.mrBurnsArray.some(function (daBurns) {
           return homerSimpson.crashWith(daBurns);
        });

        if (this.countdownTimer === 0){
            this.stop()
        }
    
        if (crashed2){
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
           if(homerSimpson.crashWith(beer)) {
            this.beerSound.play()
            
        }
        })

        this.waterArray.forEach((daWater, i, arr) => {
            if(homerSimpson.crashWith(daWater)) {
                arr.splice(i, 1)
                this.totalScore -=1;
            }
            if(homerSimpson.crashWith(daWater)) {
                this.waterSound.play();
            }

        })
       
        this.donutsArray.forEach((donuts, i, arr) => {
            if(homerSimpson.crashWith(donuts)) {
               arr.splice(i, 1)
               this.totalScore +=1
            }
            if(homerSimpson.crashWith(donuts)) {
                this.donutsSound.play()
                
            }
        })
    }

    stop(){
        clearInterval(this.intervalId);
        this.soundNelson.play()
        
        this.ctx.drawImage(this.nelson, this.x, this.y, this.width, this.height)
    }



    drawBackground() {
        this.background.src = "./docs/assets/imgs/moes.jpg";
        this.ctx.drawImage(this.background, this.x, this.y, this.width, this.height)
    }

    drawScore(){
        this.ctx.font = '32px serif';
        this.ctx.fillStyle = 'white';
        this.ctx.fillText(`SCORE: ${this.totalScore}`, 5, 40 );

    }





    createHighScore(){
        this.ctx.font = '32px serif';
        this.ctx.fillStyle = 'white';
        
        if  (this.highscore < this.totalScore){
            this.highscore = this.totalScore
            localStorage.setItem('highscore', this.highscore)
            document.getElementsByClassName('highscore')[0].innerHTML = `HIGHSCORE: ${this.highscore}`
        }
        
    } 

    checkHighScore(){
        this.lsStore = localStorage.getItem("highscore");
        if(this.lsStore){
            this.highscore = this.lsStore;

        }
        document.getElementsByClassName('highscore')[0].innerHTML = `HIGHSCORE: ${this.highscore}`
        
    }


}