import React from 'react'
import tejal from './img/tejal.png'
import './css/messagefromsg.css'

function Messagefromsg() {
  return (
    <div className='container1'>
      <div className='col-left'>
        <img src={tejal}></img>
      </div>

      <div className='col-right'>
        <div className='titlew'>
          <h2>A Message from our SG</h2>
        </div>

        <div className='text'>
          <p>Dear delegates, chairs, core team members, faculty advisors, admins, and distinguished guests,
            On behalf of the Secretariat Team, it is my sincere pleasure and honour to welcome you to the 7th Emirates International School Jumeirah’s Model United Nations. 
            Since our very first conference, EISJMUN has grown to become one of the largest THIMUN conferences in the region. Our dedicated student officers and a shared spirit to strive for excellence have motivated this event to gather like-minded innovators and leaders of tomorrow on a global scale.
            The complications of the COVID-19 pandemic were a block on not just education, but on events like MUN. These restrictions lasted a lot longer than everybody expected – and though virtual conferences flourished, the essence of a new facility, heated debate at the committee podium, and particularly, the well-deserved social was simply not possible for three entire years. <br></br>
            It goes without saying that the UAE has been exceptional in regulating and incentivizing the prevention of the spread of COVID-19. We are all extremely grateful to be in a position in which we can host EISJMUN 2023 the way it used to be; a fresh look, new committees, and an experience that you will forever cherish.
            With a conference bigger and better than ever before, I once again cordially welcome you to EISJMUN 2023. Our team is thrilled to provide our attendees with an unforgettable Model United Nations experience; I await to see you at the conference.
            Tejal Gupta
            Secretary General, EISJMUN 2023</p>
        </div>
      </div>  

    </div>
  )
}

export default Messagefromsg