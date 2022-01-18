import { colisionSerpienteComida } from "./funciones.js";
export default class Comida {
  constructor(x, y, w, h, juego) {
    this.ptsJuego = juego;
    this.ptsImagen = new Image();
    this.ptsImagen.src = "../img/manzana.png";
    this.ptsPosicion = {
      x: x,
      y: y
    };
    this.ptsW = w + 10;
    this.ptsH = h + 10;
    this.ptsEnergia = 1000;
  }
  dibujar() {
    this.crearComida(
      this.ptsJuego.ptsCtx,
      this.ptsPosicion.x,
      this.ptsPosicion.y,
      this.ptsW,
      this.ptsH
    );
  }
  actualizar() {
    if (colisionSerpienteComida(this, this.ptsJuego.ptsSerpiente)) {
      this.ptsEnergia = 0;
      this.ptsJuego.ptsSerpiente.ptsCola++;
      this.ptsJuego.ptsSonidoManzana.play();
    }
  }
  crearComida(ctx, x, y, w, h) {
    ctx.drawImage(this.ptsImagen, x, y, w, h);
    if (this.ptsEnergia === 1000) this.ptsEnergia = 1;
  }
}
