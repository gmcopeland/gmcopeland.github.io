import '../App.css'
import React from 'react';

function About(){
    return (
        <div>
        <h3 className = "pageTitle"> About Me </h3>
        <p className='description'> I am a graduating Computer Science Student with a focus on Cyber Security!
        This portfolio will contain both individual and academic projects I have worked on
        the last couple years. Some may be complete, some may be starters that I haven't had the time
        to finish. Regardless, please enjoy your stay and check back often!
        </p>

        <h3 className = "pageTitle"> Current Studies</h3>
        <ul>
          <li> Studying for CompTia Sec+ Certificate</li>
          <li> Building "CyberDeck" with RbPi 4</li>
        </ul>
        <h3 className = "pageTitle"> Planned Projects</h3>
        <ul>
          <li> Spammer Honeypot </li>
          <p> A small network with an exposed website consisting of 
            bait Email addresses to identify and track Spam networks
            based on collected data from HTML Header information
          </p>
          <li> "Magic Mirror" with RbPi</li>
          <p> A Raspberry Pi connected to an old monitor and microphone 
              will be mounted behind a mirror and act as a IoT appliance.
              Adding Smart-Home capability to a mirror.
          </p>
        </ul>
        </div>
    )
}

export default About;