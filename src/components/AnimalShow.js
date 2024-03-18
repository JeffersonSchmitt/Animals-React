import './AnimalShow.css'
import { useState } from "react";
import bird from '../img/bird.svg'
import cat from '../img/cat.svg'
import cow from '../img/cow.svg'
import gator from '../img/gator.svg'
import heart from '../img/heart.svg'
import horse from '../img/horse.svg'
import dog from '../img/dog.svg'


const svgMap = {
  bird,
  cat,
  cow,
  gator,
  horse,
  dog
}

function AnimalShow({ type }) {

  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  }

  return <div onClick={handleClick} className="animal-show" style={{ cursor: "pointer" }}>
    <img className="animal" alt='animal' src={svgMap[type]} />
    <img className="heart" alt='heart' src={heart} style={{ width: 10 + clicks }} />
  </div>
}

export default AnimalShow;