import { useState } from "react"
import PlayerCardStyle from "./PlayerCardStyle.module.css"



const PlayerCard = ({player}) => {
const{name, img, statistics}=player


console.log(player);

const[change, setChange]=useState(true)
const handleChange=()=>{
    setChange(!change)
    console.log(change);
}


const[search, setSearch] = useState()

  return (
    
   <div className={PlayerCardStyle["playerCard"]}>
    <div className={PlayerCardStyle["frontSide"]}>
    <img onClick={handleChange} className={change ? PlayerCardStyle["img"] : PlayerCardStyle["imgClick"]} src={img} alt="" />
    
    <div onClick={handleChange} className={PlayerCardStyle["backSide"]}>
        <p>🏀 {statistics[0]}</p>
        <p>🏀 {statistics[1]}</p>
        <p>🏀 {statistics[2]}</p>
        <p>🏀 {statistics[3]}</p>
    </div>

    </div>
    
    <p className={PlayerCardStyle["name"]}>{name}</p>
   </div>
  
  )
}

export default PlayerCard