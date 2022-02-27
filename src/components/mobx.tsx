import styles from '../styles/Home.module.css'
import {useState} from "react";
import {Animal} from "../models/mobx.example";
import {autorun} from "mobx";

interface MobxReactionProps {
  animal: Animal;
}
const MobxReaction = ({animal}: MobxReactionProps) => {
  const [energyLevel, setEnergyLevel] = useState(animal.energyLevel)
  // useEffect(() => {
  //   setEnergyLevel(giraffe.energyLevel)
  // }, [giraffe.energyLevel])
  autorun(() => {
    if (animal.energyLevel !== energyLevel) {
      setEnergyLevel(animal.energyLevel)
    }
    // setEnergyLevel(giraffe.energyLevel)
    console.log(animal.energyLevel)
  })

  return (
    <div className={styles.card}>
      <p className={styles.description}>
        Mobx
      </p>
      <p className={styles.description}>
        Energy Level: {energyLevel}
      </p>
      <button onClick={
        (event) => {
          event.preventDefault();
          animal.reduceEnergy();
          // console.log({...giraffe})
        }
      }>
        Reduce energy
      </button>
    </div>
  )
}

export default MobxReaction
