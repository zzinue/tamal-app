import React, {useState} from 'react';
 import SaborAtole from './SaborAtole'; 

const ConAtole = ({conAtole, setConAtole}) => {
    const [sabor, setSabor] = useState('chocolate'); 
  
        const handlerNoAtole=()=>setConAtole(false)
        const handlerSiAtole=()=>setConAtole(true)


     const colorYSabor= {
        'cajeta':'rosybrown',
        'chocolate': 'brown',
        'fresa': 'pink',
    } 
    return (
        <div>

        <button
        onClick={handlerNoAtole}
        style={{backgroundColor: conAtole?'lightgray':'green'}}
        >
        No incluye Atole
        </button>
        <button
        onClick={handlerSiAtole}
        style={{backgroundColor: conAtole?colorYSabor[sabor]:'lightgray'}}
        >
        Si incluye Atole
        </button>
        {conAtole&& <SaborAtole setSabor={setSabor}/>}

        </div>
    )
}

export default ConAtole

