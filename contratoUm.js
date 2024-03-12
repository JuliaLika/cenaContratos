class ContratoUm extends Phaser.Scene {
    constructor() {
      super({ key: "ContratoUm" });
    }
  
    preload() {
      this.load.image("notebook", "assets/notebook.png");
      this.load.image("pastas", "assets/pasta.png");
      this.load.image("check", "assets/check.png");
      this.load.image("deny", "assets/deny.png");
    }
  
    create() {
      this.add.image(640, 300, "notebook").setScale(0.7);
      this.check = this.add.image(700, 370, "check").setScale(6);
      this.check.setInteractive();
      this.check.on ('pointerdown', () => {
        this.scene.stop('ContratoUm');
        this.scene.start('Contratos');
      })
      this.deny = this.add.image(770, 370, "deny").setScale(6);
      this.deny.setInteractive();
      this.deny.on ('pointerdown', () => {
        this.scene.stop('ContratoUm');
        this.scene.start('Contratos');
      })
      
    }
  
    update() {
  
    }
  }