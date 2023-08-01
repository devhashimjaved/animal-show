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
    const renderedAnimals=animals.concat.map((animal,index)=>{
        return<Animalshow type={animal} key={index}/>
    })
    return( <div>
            <button onClick={handleclick}>Add Animal</button>
            <div>{renderedAnimals}</div>
            
    </div>
);
}
export default App;