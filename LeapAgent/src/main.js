const Leap = require("leapjs");

const miguel = (frame) => {
  return {
    frame: (frame) => {
      if (frame.hands.length > 0) {
        //  this.emit("handFound");
        //console.log("Hand found");
      }
    },
  };
};

Leap.Controller.plugin("miguel", miguel);

Leap.loop({
  hand: function (hand) {
    const pulgar = hand.fingers[0];
    const indice = hand.fingers[1];
    const medio = hand.fingers[2];
    const anular = hand.fingers[3];
    const menique = hand.fingers[4];

    // console.log(dedo5.positions);
    //console.log(pulgar.dipPosition);

    //const distancia = Leap.vec3.distance(
    //pulgar.dipPosition,
    //indice.dipPosition
    //);

    //if (distancia < 30) {
    //console.log("precionado");
    //} else {
    //console.log("apagado");
    //}
    const distancia2 = Leap.vec3.distance(
      pulgar.dipPosition,
      indice.dipPosition
    );
    if (distancia2 < 35) {
      console.log("presionado");
    } else {
      console.log("apado");
    }
  },
}).use("miguel");
