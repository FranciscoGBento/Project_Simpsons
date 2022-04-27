class Controls {
    constructor(game){
        this.game = game;
        this.homer = this.game.homer;
    }

    keyboardEvents() {
        window.addEventListener('keydown', (e) => {
          switch (e.code) {
            case 'KeyD':
              if (this.homer.x + this.homer.width < 900) {
                this.homer.moveRight();
              }
              break;
            case 'KeyA':
              if (this.homer.x > 10) {
                this.homer.moveLeft();
              }
              break;
            case 'KeyS':
              if (this.homer.y + this.homer.height < 500) {
                this.homer.moveDown();
              }
              break;  
            case 'KeyW':
              if (this.homer.y > 10) {
                this.homer.moveUp();
              }
              break;
              
          }
        });
    }
}