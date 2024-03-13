class ContratoQuatro extends Phaser.Scene {
    constructor() {
      super({ key: "ContratoQuatro" });
    }
  
    preload() {
      this.load.image("notebook", "assets/notebook.png");
      this.load.image("pastas", "assets/pasta.png");
      this.load.image("check", "assets/check.png");
      this.load.image("deny", "assets/deny.png");
    }
  
    create() {
      this.add.image(640, 300, "notebook").setScale(0.7);
      
    }
  
    update() {
  
    }
  }