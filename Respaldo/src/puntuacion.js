import { ESTADOS } from "./funciones.js";

export default class Puntuacion {
  constructor(juego) {
    this.ptsJuego = juego;
    this.ptsPosicion = {
      x: 0,
      y: 0
    };
    this.ptsW = this.ptsJuego.ptsW;
    this.ptsH = this.ptsJuego.ptsH;
    this.ptsTexto = this.ptsH / 20;
  }
  dibujar() {
    if (this.ptsJuego.ptsEstado === ESTADOS.PUNTUACIONES) {
      this.crearMenuPuntuacion(
        this.ptsJuego.ptsCtx,
        this.ptsPosicion.x,
        this.ptsPosicion.y,
        this.ptsW,
        this.ptsH
      );
    }
  }
  actualizar() {}
  crearMenuPuntuacion(ctx, x, y, w, h) {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(x, y, w, h);
    ctx.fill();
    ctx.font = this.ptsTexto + "px Courier New";
    ctx.textAlign = "center";
    ctx.fillStyle = "#D6EAEA";
    ctx.fillText("PUNTUACIONES", w / 2, h / 15);
    ctx.font = this.ptsTexto - 5 + "px Courier New";
    ctx.textAlign = "center";
    ctx.fillStyle = "#D6EAEA";
    ctx.fillText("Nick", w / 4, h / 7);
    ctx.font = this.ptsTexto - 5 + "px Courier New";
    ctx.textAlign = "center";
    ctx.fillStyle = "#D6EAEA";
    ctx.fillText("Puntos", w / 1.5, h / 7);
    ctx.font = this.ptsTexto - 5 + "px Courier New";
    ctx.textAlign = "right";
    ctx.fillText("1.-", w / 9, h / 4);
    ctx.fillText("2.-", w / 9, h / 3.1);
    ctx.fillText("3.-", w / 9, h / 2.6);
    ctx.fillText("4.-", w / 9, h / 2.2);
    ctx.fillText("5.-", w / 9, h / 1.92);
    ctx.fillText("6.-", w / 9, h / 1.7);
    ctx.fillText("7.-", w / 9, h / 1.55);
    ctx.fillText("8.-", w / 9, h / 1.42);
    ctx.fillText("9.-", w / 9, h / 1.3);
    ctx.fillText("10.-", w / 9, h / 1.2);
  }
}
