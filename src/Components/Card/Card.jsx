/* import CardTitle from './CardTitle/CardTitle';
import CardImage from './CardImage'; 
import CardBody from './CardBody'; */
import React, { useState } from "react";
import ConAtole from "./ConAtole";
 import TamalTypeSelector from "../TamalTypeSelector/TamalTypeSelector";
 
const Card = ({ title, body, price }) => {

  const [hojaPlatano, setHojaPlatano] = useState(false); //propiedades del state
  const [conAtole, setConAtole] = useState(false);

  const typePrice = hojaPlatano ? 10 : 0;
  const atolePrice = ConAtole ? 15 : 0;
  const totalPrice = price + typePrice + atolePrice;

  return (
    <div style={{ border: "2px solid black", margin: "1rem" }}>
      <h2>{title}</h2>
      <div>
        <p>{body}</p>
        <span>{totalPrice}</span>
      </div>

       <TamalTypeSelector
        hojaPlatano={hojaPlatano}
        setHojaPlatano={setHojaPlatano}
      />
       <ConAtole conAtole={conAtole} setConAtole={setConAtole} /> 
    </div>
  );
};

export default Card;
