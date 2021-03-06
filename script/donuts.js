class Donuts {
    constructor(game) {
        this.game = game;
        this.x = 0;
        this.y = Math.floor(Math.random() * 450);
        this.width = 50;
        this.height = 50;
        this.img = new Image();
        this.points = 1;
        
        
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

    drawDonuts(){
        this.img.src = "./docs/assets/imgs/donutsup.png"
        this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        this.x += 2;
    }
}