import React from 'react';
import One from "./assets/die_face_1.png";
import Two from "./assets/die_face_2.png";
import Three from "./assets/die_face_3.png";
import Four from "./assets/die_face_4.png";
import Five from "./assets/die_face_5.png";
import Six from "./assets/die_face_6.png";

  const DiceImage = ({ roll }) => {
  if (roll === 1) {
    return <img className="dice-image" src={One} alt="1" />;
  } else if (roll === 2) {
    return <img className="dice-image" src={Two} alt="2" />;
  } else if (roll === 3) {
    return <img className="dice-image" src={Three} alt="3" />;
  } else if (roll === 4) {
    return <img className="dice-image" src={Four} alt="4" />;
  } else if (roll === 5) {
    return <img className="dice-image" src={Five} alt="5" />;
  } else if (roll === 6) {
    return <img className="dice-image" src={Six} alt="6" />;
  }
};


export default DiceImage;
