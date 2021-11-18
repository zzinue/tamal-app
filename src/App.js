import { useState } from 'react';
import "./App.css";
import Card from "./Components/Card/Card";
//import fetchItems from "./services/fetchItems";
//import Labels from './Labels';
//import Counter from './Components/Counter';


const initializeItems= [
  {title:'Tamal Verde', body: 'Tamal en hoja Verde', price:20},
  {title:'Tamal Rojo', body: 'Tamal en hoja Rojo', price:20},
  {title:'Tamal Mole', body: 'Tamal en hoja Mole', price:20},
  {title:'Tamal Rajas', body: 'Tamal en hoja Rajas', price:20},
  {title:'Tamal Dulce', body: 'Tamal en hoja Dulce', price:20},
];

function App() {
  const [items]=useState(initializeItems);

  return (
    <div className="App">
        {items.map(({ title, body,price}) => (
          <Card
            key={title}
            title={title}
            body={body}
            price={price}
            
          />

        ))}
         
      
    </div>
  );
}

export default App;