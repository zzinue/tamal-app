import {useState} from 'react'


const Labels = () => {
    const [tamal, setTamal]=useState("tamales")

    const handleChangeTamal= (tamalName)=> setTamal(tamalName)
    

    return (
        <div style={{borderTop: '1px solid black'}}>
            <div>{tamal}</div>

            <button onClick={()=>handleChangeTamal('hoja de platano')}>hoja de platano</button>
            <button onClick={()=>handleChangeTamal('hoja de maiz')}>hoja de maiz</button>
            
        </div>
    )
}

export default Labels;
