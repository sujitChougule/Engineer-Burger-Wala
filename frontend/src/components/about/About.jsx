import React from 'react'
import {Link} from 'react-router-dom';
import {RiFindReplaceLine} from "react-icons/ri"
import me from '../../assets/founder.png'
const About = () => {
  return (
    <section className='about'>
        <main>
            <h1>About Us</h1>
            <article>
                <h4>Engineer Burger Wala</h4>
                <p>Our picture perfect burgers taste exactly how you imagine it to: delicious!</p>
                <p>Explore more types of Burger. Click below button to see our menu.</p>
                <Link to='/'><RiFindReplaceLine/></Link>
            </article>
            <div>
                <h2>Founder</h2>
                <article>
                    <div>
                        <img src={me} alt='founder'/>
                        <h3>Sujit Chougule</h3>
                    </div>
                    <p>
                    “Man who invented the hamburger was smart; man who invented the cheeseburger was a genius.”
                    <p>
                    Taking The Burger Business Seriously.
                    </p>
                    </p>
                </article>
            </div>
        </main>
    </section>
  )
}

export default About