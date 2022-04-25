class Controls {
    constructor(game){
        this.game = game;
        this.homer = this.game.homer;
    }

    keyboardEvents() {
        window.addEventListener('keydown', (e) => {
          switch (e.code) {
            case 'ArrowRight':
              if (this.homer.x + this.homer.width < 900) {
                this.homer.moveRight();
              }
              break;
            case 'ArrowLeft':
              if (this.homer.x > 10) {
                this.homer.moveLeft();
              }
              break;
            case 'ArrowDown':
              if (this.homer.y + this.homer.height < 500) {
                this.homer.moveDown();
              }
              break;  
            case 'ArrowUp':
              if (this.homer.y > 10) {
                this.homer.moveUp();
              }
              break;
              
          }
        });
    }
}