import React from 'react'
import {AiFillInstagram,AiFillLinkedin,AiFillGithub} from 'react-icons/ai'
const Footer = () => {
  return (
 <footer>
     <div> 
        <h2>Engineer Burger Wala</h2> 
        <p>Don’t have to cook fancy masterpieces- just a good burger with fresh ingredients.</p> 
        <br/> 
        <em>We give attention to genuine feedback.</em> 
        <br/>
        <strong> All rights received at @enginnerBurgerWala </strong> 
    </div> 
    <aside> 
        <h4> Follow us </h4> 
        <a href='https://www.instagram.com/sujit_chougule_7/'><AiFillInstagram/></a> 
        <a href='https://github.com/sujitChougule'><AiFillGithub/></a> 
        <a href='https://www.linkedin.com/in/sujit-chougule-259932230/'><AiFillLinkedin/></a>
    </aside> 
</footer>
  )
}

export default Footer