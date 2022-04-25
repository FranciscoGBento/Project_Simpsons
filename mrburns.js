class mrBurns {
    constructor(game){
        this.game = game;
        this.x = Math.floor(Math.random() * 800);
        this.y = 0;
        this.width = 25;
        this.height = 50;
        this.img = new Image();
        

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

    drawMrBurns() {
        this.img.src = "/docs/assets/imgs/mr burns.png"
        this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        this.y += 2
    }
}