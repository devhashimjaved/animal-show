import './App.css'
import { useState } from "react";
import Animalshow from "./Animalshow";
function getRandomAnimal(){
    const animals=['bird','cat','cow','dog','gator','horse'];
    return animals[Math.floor(Math.random()*animals.length)];
}
console.log(getRandomAnimal());

function App(){
    const [animals,setanimals]=useState([]);
    const handleclick=()=>{
        setanimals([...animals,getRandomAnimal()]);
    }
    const renderedAnimals=animals.map((animal,index)=>{
        return<Animalshow type={animal} key={index}/>
    });
    return( <div className='app'>
            <button onClick={handleclick}>Add Animal</button>
            <div className='animal-list'>{renderedAnimals}</div>
            
    </div>
);
}
export default App;