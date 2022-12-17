import React from 'react'
import logo from './img/logo.png'
import './css/main-d.css'
import './css/countdown.css'
import { useState, useEffect } from "react";
import './css/sgmessage.css'
import tejalpic from './img/tejalpic.png'
import './css/wim.css'
import './css/igposts.css'
import { IGEmbed } from 'react-ig-embed';


function Home() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2023-05-04T00:00:00+00:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(difference / (1000 * 60 * 60) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });  
  return (
    <div>      
    <div className='maindiv'>
    <div className='mainchild'>
        <img src={logo} alt="logo" className="logo-m" />
        <h2 className='main-h2 futuramed'>Emirates International School - Jumeirah MUN</h2>
        <h3 className='futurasub mainsub'>May 4th - 7th, 2023</h3>
    </div>
    <button className='regbtn' onClick={event =>  window.location.href='register'}>Register</button>

  </div>
  <div className='countdown'>
            <h2 className="title futuratitle">Time Until EISJMUN'23 Starts</h2>
        {timeLeft.days || timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
        <div className="cdntmr">
        <p className="futuracdn countdown-timer">
        {timeLeft.days} DAYS  
        </p>
        <p className="futuracdn countdown-timer">
        {timeLeft.hours} HOURS
        </p>
        <p className="futuracdn countdown-timer">
        {timeLeft.minutes} MINUTES
        </p>
        <p className="futuracdn countdown-timer">
        {timeLeft.seconds} SECONDS
        </p>
        </div>
      ) : (
        <p>EISJMUN'23 has started</p>
      )}
      </div>
      <div className='sg-parent'>
        <img src={tejalpic} alt='Picture of the Secretary General' className='sg-pic'/>
        <div className='sg-child'>
              <h1 className='sg-header'>A Message from the Secretary General</h1>
              <p className='sg-text'>Greetings! My name is Tejal Gupta, Secretary General of the seventh Emirates International School - Jumeirah’s Model United Nations, 2023. Our skilled Secretariat team, executive team, and faculty directors at EISJ are working eagerly to organise the spectacle that is the upcoming conference. Get to know more about the event and ourselves here, and I hope to see you at EISJMUN!</p>
              <br></br>
              <p className='sg-text'> - Tejal Gupta, Secretary General</p>
              <br></br>
              <button className='read-more sg-btn'>Read More</button>
        </div>    
    </div>
    <div className='parent'>
        <div className='child'>
            <h1 className='wim'>WHAT IS MUN?</h1>
            <p className='waffle'>
            The abbreviation "MUN" refers to "Model United Nations" conferences. Although, a well-rounded view of the United Nations is essential to grasp the spirit of MUN. Most of the world's nations are members of the United Nations, an international organization. Keeping everyone's best interests in mind, this worldwide group was formed to debate, cooperate, and solve the most pressing issues related to the violation of sovereignty, social autonomy, the danger of tyranny, and the eradication of oppression. The model United Nations (MUN) is an offshoot of the original United Nations. Instead of countries addressing issues, you do it at the Model United Nations.
            </p>
        </div>
    </div>
    <div className='igp'>
        <h4 className='header'>CHECK OUT LATEST UPDATES FROM INSTAGRAM</h4>
        <div className='igpost1'>
        <IGEmbed url='https://www.instagram.com/p/CmAE3UoBRuO/?utm_source=ig_web_copy_link' />
        <IGEmbed url='https://www.instagram.com/p/CmEtHGwJgOO/?utm_source=ig_web_copy_link' />
        <IGEmbed url="https://www.instagram.com/reel/CmGeFXxgpiE/?utm_source=ig_web_copy_link" />
        </div>
    </div>
    <div className='parent'>
        <div className='child'>
            <h1 className='wim'>WHY EISJMUN?</h1>
            <p className='waffle'>
            Emirates International School - Jumeirah's Model United Nations (EISJMUN) is the perfect place to discuss global issues. Segmenting committees helps confine conversations, but you may use your creativity, enthusiasm, and zeal to address socio-environmental concerns like nuclear power, human rights abuses in the Horn of Africa, and global economic recessions. With a talented secretariat team, a resilient executive team and a dedicated admin team, the only element missing from EISJMUN 2023 is your distinct participation. We are proud to have over a dozen committees, from the General Assemblies to our own NSNS. However, many external circumstances impact whether a Model UN meeting is excellent. We are delighted to present a spectacular social venue for all attendees to come during our conference to make it unforgettable!
            </p>
        </div>
    </div>
  </div>
  
  )
}

export default Home