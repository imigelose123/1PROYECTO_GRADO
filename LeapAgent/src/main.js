const Leap = require("leapjs");
const { SerialPort } = require("serialport");

const serialport = new SerialPort({ path: "COM8", baudRate: 9600 });
let estado = "2";

function escribirPuertoSerial(valor, inicial) {
  if (estado == inicial) {
    serialport.write(valor);
    estado = valor;
  }
}

const InterruptorInteligente = (frame) => {
  return {
    hand: function (hand) {
      const pulgar = hand.fingers[0];
      const indice = hand.fingers[1];
      const medio = hand.fingers[2];
      const anular = hand.fingers[3];
      const menique = hand.fingers[4];

      const distancia = Leap.vec3.distance(
        pulgar.dipPosition,
        indice.dipPosition
      );

      if (distancia > 0 && distancia < 35) {
        console.log("presionado", distancia);
        escribirPuertoSerial("1", "2");
      }

      if (distancia > 70 && distancia < 120) {
        console.log("apado", distancia);
        escribirPuertoSerial("2", "1");
      }
    },
  };
};

Leap.Controller.plugin("InterruptorInteligente", InterruptorInteligente);
Leap.loop({}).use("InterruptorInteligente");
