class ContratoUm extends Phaser.Scene {
  constructor() {
    super({ key: "ContratoUm" });
  }

  preload() {
    this.load.image("notebook", "assets/notebook.png");
    this.load.image("pastas", "assets/pasta.png");
    this.load.image("check", "assets/check.png");
    this.load.image("deny", "assets/deny.png");
    this.load.image(
      "fornecedor1",
      "assets/fornecedores/fornecedorSprite_1.png"
    );
  }

  create() {
    this.add.image(larguraJogo / 2, alturaJogo / 2, "notebook").setScale(2);

    const retanguloContrato = this.add.rectangle(640, 230, 240, 260, 0xffffff);
    const retanguloFoto = this.add.rectangle(570, 210, 50, 50, 0xffffff).setScale(1.5);
    retanguloFoto.setStrokeStyle(0.5, 0x000000);

    const fornecedor1 = this.add.image(570, 200, "fornecedor1").setScale(2);

    this.check = this.add.image(675, 410, "check").setScale(6);
    this.check.setInteractive();
    this.check.on("pointerdown", () => {
      this.scene.stop("ContratoUm");
      this.scene.start("Contratos");
    });

    this.deny = this.add.image(600, 410, "deny").setScale(6);
    this.deny.setInteractive();
    this.deny.on("pointerdown", () => {
      this.scene.stop("ContratoUm");
      this.scene.start("Contratos");
    });

    const text = this.add.text(590, 110, "Contrato", { fontSize: "20px", color: "#000000" });

    let arrayContrato1 = [retanguloContrato, retanguloFoto, text, fornecedor1, this.check, this.deny];
    this.add.container(larguraJogo / 6, alturaJogo / 10, arrayContrato1);

  }

  passarDeCena() {
    this.scene.stop("ContratoUm");
      this.scene.start("Contratos");
  }

  update() {}
}
