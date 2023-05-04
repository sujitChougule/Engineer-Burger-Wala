import React from 'react';
import {motion} from 'framer-motion';
import me from "../../assets/founder.png";
const Founder = () => {
    const options={
        initial:{
            x:"-100%",
            opacity:0
          },
          whileInView:{
            x:0,
            opacity:1
          }
    }
  return (

    <section className='founder'>
        <motion.div {...options}>
            <img src={me} height={"200"} width={"200"} alt='founder'/>
                <h3>
                Sujit Chougule
                </h3>
            <p>
                making burger is not a choice it's passion and we do it in best way
                <br/>
                Engineer burgerwala will serve you worlds burger ever...
            </p>
        </motion.div>
    </section>
  )
}

export default Founder