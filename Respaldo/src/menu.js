import { ESTADOS } from "./funciones.js";
export default class Menu {
  constructor(juego) {
    this.ptsJuego = juego;
    this.ptsW = this.ptsJuego.ptsW / 4;
    this.ptsH = this.ptsJuego.ptsH;
    this.ptsPosicion = {
      x: this.ptsW * 3,
      y: 0
    };
    this.ptsCentro = this.ptsW / 2;
    this.ptsFila = this.ptsH / 40;
    this.ptsTitulos = this.ptsH / 25;
    this.ptsTextos = this.ptsH / 45;
    this.ptsImagen1 = new Image();
    this.ptsImagen1.src = "../img/bg.png";
    this.ptsImagen2 = new Image();
    this.ptsImagen2.src = "../img/fondito.png";
    this.ptsImagen3 = new Image();
    this.ptsImagen3.src = "../img/teclitas.png";
    this.ptsColorNivel = "green";
  }
  cambiarColor() {
    if (this.ptsJuego.ptsScore === 20) this.ptsColorNivel = "pink";
    if (this.ptsJuego.ptsScore === 40) this.ptsColorNivel = "blue";
    if (this.ptsJuego.ptsScore === 60) this.ptsColorNivel = "yellow";
    if (this.ptsJuego.ptsScore === 100) this.ptsColorNivel = "red";
  }
  dibujar() {
    switch (this.ptsJuego.ptsEstado) {
      case ESTADOS.PAUSADO:
        this.crearMenuPausa(
          this.ptsJuego.ptsCtx,
          0,
          0,
          this.ptsJuego.ptsW,
          this.ptsJuego.ptsH
        );
        break;
      case ESTADOS.CORRIENDO:
        this.crearMenuInter(
          this.ptsJuego.ptsCtx,
          0,
          0,
          this.ptsJuego.ptsW,
          this.ptsJuego.ptsH
        );
        break;
      case ESTADOS.MENU:
        this.crearMenuInicio(
          this.ptsJuego.ptsCtx,
          0,
          0,
          this.ptsJuego.ptsW,
          this.ptsJuego.ptsH
        );
        break;
      case ESTADOS.GAMEOVER:
        this.crearMenuGameover(
          this.ptsJuego.ptsCtx,
          0,
          0,
          this.ptsJuego.ptsW,
          this.ptsJuego.ptsH
        );
        break;
      default:
        break;
    }
  }
  actualizar() {
    this.cambiarColor();
  }
  crearMenuInicio(ctx, x, y, w, h) {
    ctx.drawImage(this.ptsImagen2, x, y, w, h);
    ctx.fill();
    ctx.drawImage(this.ptsImagen3, x + 175, y + 350, w - 350, h - 350);
    ctx.font = this.ptsTitulos + "px Courier New";
    ctx.textAlign = "center";
    ctx.fillStyle = "#f4f4f4";
    ctx.fillText("Controles", w / 2, h - 140);
    ctx.font = this.ptsTitulos + 25 + "px Courier New";
    ctx.textAlign = "center";
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Snake", w / 2, h / 9);
    ctx.font = this.ptsTitulos + "px Courier New";
    ctx.textAlign = "center";
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Presiona ESC para iniciar", w / 2, h / 4);
    ctx.textAlign = "center";
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Presiona ENTER", w / 2, h / 2 - 20);
    ctx.textAlign = "center";
    ctx.fillStyle = "#ffffff";
    ctx.fillText("para ver la tabla de puntuaciones", w / 2, h / 2);
  }
  crearMenuPausa(ctx, x, y, w, h) {
    ctx.fillStyle = "#526D74";
    ctx.fillRect(x, y, w, h);
    ctx.fill();
    ctx.font = this.ptsTitulos + "px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "#D6EAEA";
    ctx.fillText("PAUSA", w / 2, h / 2);
  }
  crearMenuGameover(ctx, x, y, w, h) {
    ctx.fillStyle = "#510995";
    ctx.fillRect(x, y, w, h);
    ctx.fill();
    ctx.font = this.ptsTitulos + "px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "#E3ECED";
    ctx.fillText("GAME OVER", w / 2, h / 2);
    ctx.fillText(
      "Presiona ESC para volver a intentarlo",
      w / 2,
      (h / 4) * 3 - 100
    );
  }
  crearMenuInter(ctx, x, y, w, h) {
    ctx.drawImage(this.ptsImagen1, x, y, w, h);
    ctx.font = this.ptsTitulos + "px Arial";
    ctx.fillStyle = this.ptsColorNivel;
    ctx.fillText(this.ptsJuego.ptsScore, w / 1.52, h / 24);
    ctx.fillText(this.ptsJuego.ptsVidas, w / 2.2, h / 24);
    ctx.fillText(
      "Nivel " + this.ptsJuego.ptsNivel,
      50,
      this.ptsJuego.ptsH - 10,
      w / 2,
      h / 2
    );
  }
}
