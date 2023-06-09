import React from 'react'
import {motion} from 'framer-motion';
import burger1 from '../../assets/burger1.png'


const Contact = () => {
  return (
    <section className='contact'>
        <motion.form
          initial={{
            x:"-100vw",
            opacity:0
          }}
          animate={{
            x:0,
            opacity:1
          }}
          transition={{
            delay:0.5
            
          }}
        >
          <h2>Contact us</h2>
          <input type='text' placeholder='Enter your Name'/>
          <input type='email' placeholder='Enter your Email'/>
          <textarea placeholder='Message' cols='30' rows='10'></textarea>
          <button type='submit'>Send</button>

        </motion.form>
        <motion.div className='formBorder'
         initial={{
          x:"-100vw",
          opacity:0
        }}
        animate={{
          x:0,
          opacity:1
        }}
        transition={{
          delay:0.5
          
        }}
        >
          <motion.div
             initial={{
              y:"-100vh",
              x:"50%",
              opacity:0
            }}
            animate={{
              y:"-50%",
              x:"50%",
              opacity:1
            }}
            transition={{
              delay:1
              
            }}

          >
            <img src={burger1} alt='burger'/>
          </motion.div>
        </motion.div>
    </section>
  ) 
}

export default Contact