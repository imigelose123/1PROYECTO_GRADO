const Leap = require("leapjs");
const { SerialPort } = require('serialport');


const serialport = new SerialPort({ path: 'COM8', baudRate: 9600 });
let estado = "2"

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
  
      if (distancia < 35) {
          console.log("presionado");
        if (estado=='2') {
          serialport.write('1')
          estado = '1'
        }
  
      } else {
        console.log("apado");
        if (estado=='1') {
          serialport.write('2')
          estado = '2'
        }
      }
    }
  };
};

Leap.Controller.plugin("InterruptorInteligente", InterruptorInteligente);
Leap.loop({}).use("InterruptorInteligente");