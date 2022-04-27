class Player {
    constructor(game, x, y, width, height) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img = new Image();
        
    }

    drawHomer(){ 
      this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    moveLeft() {
      this.img.src = "/docs/assets/imgs/homerleftup.png"
      this.x -= 10;
    }
    moveRight() {
      this.img.src = "/docs/assets/imgs/homerightup.png"
      this.x += 10;
    }
    moveUp() {
      this.img.src = "/docs/assets/imgs/homerup.png"
      this.y -= 10;
    }
    moveDown() {
      this.img.src = "/docs/assets/imgs/homergdown.png"
      this.y += 10;
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


    crashWith(obstacle) {
      return !(
        this.bottom() < obstacle.top() ||
        this.top() > obstacle.bottom() ||
        this.right() < obstacle.left() ||
        this.left() > obstacle.right()
      );
    }
}

