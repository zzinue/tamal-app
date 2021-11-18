import React from "react"; 
import styles from "./TamalTypeSelector.module.scss";


const TamalTypeSelector= ({hojaPlatano,setHojaPlatano})=> {

  const handleClicMaiz=()=> setHojaPlatano(false);
  const handleClicPlatano=()=> setHojaPlatano(true) ;

  return (
      <div className={`${hojaPlatano ? styles.fondoBlue:''}`}>
      <button
      onClick={handleClicMaiz}
      style= {{backgroundColor: hojaPlatano ? 'lightgray': 'green'}}
      >
      Hoja de maíz
      </button>

      <button
      onClick={handleClicPlatano}
      style= {{backgroundColor: hojaPlatano? 'green':'lightgray'}}
      >
      Hoja de plátano
      </button>
      </div>

  )
}

export default TamalTypeSelector;