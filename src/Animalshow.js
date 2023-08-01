import './Animal.css'
import { useState } from 'react'
import bird from './svg/bird.svg'
import cat from './svg/cat.svg'
import cow from './svg/cow.svg'
import dog from './svg/dog.svg'
import gator from './svg/gator.svg'
import heart from './svg/heart.svg'
import horse from './svg/horse.svg'

const svgmap={
    bird,
    cat,
    cow,
    dog,
    gator,
    heart,
    horse
}
function Animalshow({type}){
    const[clicks,setclicks]=useState(0);
    const handleclick=()=>{
            setclicks(clicks+1);
    }
    return <div className='animal-show' onClick={handleclick}>
        <img className='animal' src={svgmap[type]} alt="animal" />
        <img className='heart' 
        src={heart} 
        alt="heart" 
        style={{width:10+10*clicks + 'px'}}
        />

    </div>
}
export default Animalshow;