import Serpiente from "./serpiente.js";
import Comida from "./comida.js";
import Entradas from "./entradas.js";
import { ESTADOS, sound, ESTADOSERPIENTE } from "./funciones.js";
import Menu from "./menu.js";
import Puntuacion from "./puntuacion.js";
export default class Juego {
  constructor(ctx, w, h) {
    this.ptsW = w;
    this.ptsH = h;
    this.ptsCtx = ctx;
    this.ptsSerpiente = new Serpiente(
      this.ptsW / 2 - this.ptsW / 50,
      this.ptsH / 2 - this.ptsH / 50,
      this.ptsW / 35,
      this.ptsH / 35,
      this
    );
    this.ptsComida = new Comida(
      this.ptsW / 2 - this.ptsW / 5,
      this.ptsH / 2 - this.ptsH / 5,
      this.ptsW / 50,
      this.ptsH / 50,
      this
    );
    this.entrada = new Entradas(this);
    this.ptsFondo = new sound("../sound/fondo.ogg", true);
    this.ptsSonidoManzana = new sound("../sound/Manzana.mp3", false);
    this.ptsEstado = ESTADOS.MENU;
    this.ptsMenu = new Menu(this);
    this.ptsPuntuacion = new Puntuacion(this);
    this.ptsVidas = 1;
    this.ptsScore = 0;
    this.ptsNivel = 1;
  }
  dibujar() {
    this.ptsMenu.dibujar();
    this.ptsPuntuacion.dibujar();
    if (this.ptsEstado === ESTADOS.CORRIENDO) {
      this.ptsSerpiente.dibujar();
      if (this.ptsComida.ptsEnergia > 0) this.ptsComida.dibujar();
      else {
        this.ptsComida.ptsPosicion.x = Math.floor(
          Math.random() * (this.ptsW - 50)
        );
        this.ptsComida.ptsPosicion.y = Math.floor(
          Math.random() * (this.ptsH - 50)
        );
        this.ptsComida.ptsEnergia = 1000;
        this.ptsComida.dibujar();
        this.ptsScore = this.ptsScore + 2;
        if (
          this.ptsScore === 20 ||
          this.ptsScore === 40 ||
          this.ptsScore === 60 ||
          this.ptsScore === 100
        ) {
          this.ptsSerpiente.ptsVelocidadMaxima++;
          this.ptsNivel++;
          this.ptsColorSerpiente = "blue";
        }
      }
    }
  }
  actualizar() {
    if (this.ptsEstado === ESTADOS.CORRIENDO) {
      this.ptsSerpiente.actualizar();
      this.ptsComida.actualizar();
      this.ptsMenu.actualizar();
    }
  }
  iniciar() {
    if (this.ptsEstado === ESTADOS.MENU) {
      this.ptsEstado = ESTADOS.CORRIENDO;
      this.resetGame();
      return;
    }
    if (this.ptsEstado === ESTADOS.PAUSADO) {
      this.ptsEstado = ESTADOS.CORRIENDO;
      return;
    }
    if (this.ptsEstado === ESTADOS.CORRIENDO) {
      this.ptsEstado = ESTADOS.PAUSADO;
    }
    if (this.ptsEstado === ESTADOS.GAMEOVER) {
      this.ptsEstado = ESTADOS.MENU;
    }
    if (this.ptsEstado === ESTADOS.PUNTUACIONES) {
      this.ptsEstado = ESTADOS.MENU;
      return;
    }
  }
  resetGame() {
    this.ptsFondo = new sound("../sound/fondo.ogg", true);
    this.ptsFondo.play();
    this.ptsSerpiente.ptsCola = 0;
    this.ptsSerpiente.ptsPosicion.x = this.ptsW / 2 - this.ptsW / 50;
    this.ptsSerpiente.ptsPosicion.y = this.ptsW / 2 - this.ptsW / 50;
    this.ptsComida.ptsPosicion.x = this.ptsW / 2 - this.ptsW / 5;
    this.ptsComida.ptsPosicion.y = this.ptsH / 2 - this.ptsH / 5;
    this.entrada.ptsDx = true;
    this.entrada.ptsDy = true;
    this.ptsSerpiente.ptsEstado = ESTADOSERPIENTE.REPOSO;
    this.ptsScore = 0;
    this.ptsNivel = 1;
  }
  gameOver() {
    this.ptsFondo.stop();
    this.ptsEstado = ESTADOS.GAMEOVER;
  }
  mostrarTabla() {
    this.ptsEstado = ESTADOS.PUNTUACIONES;
  }
}
