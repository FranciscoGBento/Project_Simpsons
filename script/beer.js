class Beer {
    constructor(game){
        this.game = game;
        this.x = Math.floor(Math.random() * 800);
        this.y = 0;
        this.width = 50;
        this.height = 50;
        this.img = new Image();
        this.points = 2;
    }

    left() {
        return this.x;
    }
    right() {
        return this.x + this.width;
    }
      
    top() {
        return this.y;
    }
      
    bottom() {
        return this.y + this.height;
    }

    drawBeer(){
        this.img.src = "../docs/assets/imgs/beerup.png"
        this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        this.y += 3;
    }


}