class Contratos extends Phaser.Scene {
  constructor() {
    super({ key: "Contratos" });
  }

  preload() {
    this.load.image("notebook", "assets/backgroundEscritorio1.png");
    this.load.image("pastas", "assets/pasta.png");
    this.load.image("check", "assets/check.png");
    this.load.image("deny", "assets/deny.png");
  }

  create() {
    this.add.image(larguraJogo / 2, alturaJogo / 2, "notebook").setScale(2);

    this.pastaUm = this.add.image(-larguraJogo / 6, -200, "pastas").setScale(8);
    this.pastaDois = this.add.image(-larguraJogo /100, -200, "pastas").setScale(8);
    this.pastaTres = this.add.image(-larguraJogo /-6, -200, "pastas").setScale(8);
    this.pastaQuatro = this.add.image(-larguraJogo/6, 30, "pastas").setScale(8);
    this.pastaCinco = this.add.image(-larguraJogo/100, 30, "pastas").setScale(8);

    this.pastaUm.setInteractive();
    this.pastaDois.setInteractive();
    this.pastaTres.setInteractive();
    this.pastaQuatro.setInteractive();
    this.pastaCinco.setInteractive();

    //quando clicar na pasta
    this.pastaUm.on("pointerdown", () => {
      this.scene.stop("Contratos");
      this.scene.start("ContratoUm");
    });

    this.pastaDois.on("pointerdown", () => {
      this.scene.stop("Contratos");
      this.scene.start("ContratoDois");
    });
    this.pastaTres.on("pointerdown", () => {
      this.scene.stop("Contratos");
      this.scene.start("ContratoTres");
    });
    this.pastaQuatro.on("pointerdown", () => {
      this.scene.stop("Contratos");
      this.scene.start("ContratoQuatro");
    });
    this.pastaCinco.on("pointerdown", () => {
      this.scene.stop("Contratos");
      this.scene.start("ContratoCinco");
    });

    let arrayPastas = [
      this.pastaUm,
      this.pastaDois,
      this.pastaTres,
      this.pastaQuatro,
      this.pastaCinco,
    ];
    // console.log(arrayPastas);

    this.add.container(larguraJogo / 2, alturaJogo / 2, arrayPastas);
  }

  update() {}
}
