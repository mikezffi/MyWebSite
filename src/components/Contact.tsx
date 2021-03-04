import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import VanillaTilt from 'vanilla-tilt';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { AiOutlineMail } from "react-icons/ai";

import styles from '../styles/components/Contact.module.css';

function Tilt(props) {
   const { options, ...rest } = props;
   const tilt = useRef(null);
 
   useEffect(() => {
     VanillaTilt.init(tilt.current, options);
   }, [options]);
 
   return <div ref={tilt} {...rest} />;
 }

export function Contact() {

         //  reverse:           false,  // reverse the tilt direction
         //  max:               35,     // max tilt rotation (degrees)
         //  perspective:       1000,   // Transform perspective, the lower the more extreme the tilt gets.
         //  scale:             1,      // 2 = 200%, 1.5 = 150%, etc..
         //  speed:             300,    // Speed of the enter/exit transition
         //  transition:        true,   // Set a transition on enter/exit.
         //  axis:              null,   // What axis should be disabled. Can be X or Y.
         //  reset:             true,   // If the tilt effect has to be reset on exit.
         //  easing:            "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
         //  glare:             false,   // if it should have a "glare" effect
         //  "max-glare":       1,      // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
         //  "glare-prerender": false   // false = VanillaTilt creates the glare elements for you, otherwise
         //                             // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself

   const options = {
      scale: 1.1,
      speed: 600,
      max: 10,
      perspective: 2000,
      glare: true,
      "max-glare": 0.3
    };

   return (
      <Tilt className={styles.contactContainer} options={options}>
         <img src="https://github.com/mikezffi.png" alt="Michael Zuffi Foto"/>

         <div className={styles.contactInfo}>
            <div className={styles.contactBio}>
               <h2>Michael Zuffi</h2>

               <h4>System developer</h4>
               <h3>São Paulo</h3>
            </div>

            <div className="styles.contactSocial">
               <ul>
                  <li><a href="mailto: michael.zuffi@gmail.com"><AiOutlineMail size="4x" /></a></li>
                  <li><a href="https://github.com/mikezffi"><FaGithub size="4x" /></a></li>
                  <li><a href="https://www.linkedin.com/in/mikezffi/"><FaLinkedinIn size="4x" /></a></li>
                  <li><a href="https://twitter.com/Michael37267673"><FaTwitter size="4x" /></a></li>
               </ul>
            </div>
         </div>
      </Tilt>
   )
}