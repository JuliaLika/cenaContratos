class Contratos extends Phaser.Scene {
  constructor() {
    super({ key: "Contratos" });
  }

  preload() {
    this.load.image("notebook", "assets/notebook.png");
    this.load.image("pastas", "assets/pasta.png");
    this.load.image("check", "assets/check.png");
    this.load.image("deny", "assets/deny.png");
  }

  create() {
    this.add.image(640, 300, "notebook").setScale(0.7);
    this.pastaUm = this.add.image(440, 200, "pastas").setScale(5);
    this.pastaDois = this.add.image(640, 200, "pastas").setScale(5);
    this.pastaTres = this.add.image(840, 200, "pastas").setScale(5);
    this.pastaQuatro = this.add.image(535, 325, "pastas").setScale(5);
    this.pastaCinco = this.add.image(735, 325, "pastas").setScale(5);

    this.pastaUm.setInteractive();
    this.pastaDois.setInteractive();
    this.pastaTres.setInteractive();
    this.pastaQuatro.setInteractive();
    this.pastaCinco.setInteractive();

    //quando clicar na pasta
    this.pastaUm.on ('pointerdown', () => {
      this.scene.stop('Contratos');
      this.scene.start('ContratoUm');
    })

    this.pastaDois.on ('pointerdown', () => {
      this.scene.stop('Contratos');
      this.scene.start('ContratoDois');
    })
    this.pastaTres.on ('pointerdown', () => {
      this.scene.stop('Contratos');
      this.scene.start('ContratoTres');
    })
    this.pastaQuatro.on ('pointerdown', () => {
      this.scene.stop('Contratos');
      this.scene.start('ContratoQuatro');
    })
    this.pastaCinco.on ('pointerdown', () => {
      this.scene.stop('Contratos');
      this.scene.start('ContratoCinco');
    })

  }

  update() {

  }

}
