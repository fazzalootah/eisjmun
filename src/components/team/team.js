import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import alex from './img/alex.png'
import rosha from './img/rosha.png'
import arjun from './img/arjun.png'
import amani from './img/amani.png'
import tejal from './img/tejal.png'
import './css/team.css'
import { useNavigate } from 'react-router-dom'

function Team() {
  const navigate = useNavigate();

  const sgredirect = () => {
    navigate('/sg-message')
  }

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  
  const handleOpen = () => {
    setShow(!show); // Toggle accordion
  };

  const handleOpen1 = () => {
    setShow2(!show2); // Toggle accordion
  };
  const handleOpen2 = () => {
    setShow3(!show3); // Toggle accordion
  };
  const handleOpen3 = () => {
    setShow4(!show4); // Toggle accordion
  };

  return (
    <>
    <div className='parent-div'>
      <h2 className='sg-h2'>Secretariat Team</h2>
      <div className='team-div'>
        <div className='tmpo'>
        <div className='team-member-parent'>
          <div className='team-member-child'>
          <img src={tejal} alt='Tejal' />
          <div className='text-parent'>
          <h3 className='name'>Tejal Gupta</h3>
          <p className='role'>Secretary General</p>
          </div>
          <div className="accordian">
        <div className="accordian-header" onClick={sgredirect}>
          <div>Read More</div>
        </div>
   
        </div>
          </div>
        </div>

        <div className='team-member-parent'>
          <div className='team-member-child'>
          <img src={arjun} alt='arjun' />
          <div className='text-parent'>
          <h3 className='name'>Arjun Gaitonde</h3>
          <p className='role'>Deputy Secretary General</p>
          </div>
          <div className="accordian">
        <div className="accordian-header" onClick={handleOpen}>
          <div>Read More</div>
        </div>
        {show && (
          <div className="accordian-body">Greetings, esteemed guests. I’m Arjun, this year’s Deputy Secretary General. What drove me to be part of the Secretariat team was my adore for debate. Seeing a conference from an attendee’s viewpoint is an enjoyable experience and taught me a lot; with being part of the organizing team, I like to remind myself that the conference we welcome you to should leave each student with the same learnings and memories as I would expect as a delegate. I'm grateful for the opportunity to help organize EISJMUN 2023 this year and to meet you all.
          </div>
        )}
        </div>
          </div>
        </div>
        </div>


        <div className='tmpo2'>
        <div className='team-member-parent'>
          <div className='team-member-child'>
          <img src={alex} alt='alex' />
          <div className='text-parent'>
          <h3 className='name'>Alex Weidlich</h3>
          <p className='role'>Deputy Secretary General</p>
          </div>
          <div className="accordian">
        <div className="accordian-header" onClick={handleOpen1}>
          <div>Read More</div>
        </div>
        {show2 && (
          <div className="accordian-body">Greetings, esteemed guests. I’m Alex, this year’s Deputy Secretary General. With more complex and pressing issues in the past year that dictate much of the political, social, economic and environmental landscape that young adults will be living in, Model United Nations is becoming more realistic as well as relevant. Watching the past conferences has been exciting, with variations in committees and themes that have adhered to the state of the world each edition. I’m eager to take upon this role and I look forward to it.
          </div>
        )}
        </div>
          </div>
        </div>

        
        <div className='team-member-parent'>
          <div className='team-member-child'>
          <img src={rosha} alt='Rosha' />
          <div className='text-parent'>
          <h3 className='name'>Rosha Afsharian</h3>
          <p className='role'>Chief of Staff</p>
          </div>
          <div className="accordian">
        <div className="accordian-header" onClick={handleOpen2}>
          <div>Read More</div>
        </div>
        {show3 && (
          <div className="accordian-body">Greetings, esteemed guests. My name is Rosha, and I'm thrilled to serve as EISJMUN's Chief of Staff this year. Since this is EISJ's biggest student-run event, the Secretariat and Executive team are working hard to ensure that it is the best it can be. We represent a school which has led the UAE in terms of providing a relatively new and international curriculum, and the same spirit has been put into our Model United Nations since the very first edition. With that, I look forward to meeting with you during the conference!
          </div>
        )}
        </div>
          </div>
        </div>       
        </div>

        <div className='team-member-parent'>
          <div className='team-member-child'>
          <img src={amani} alt='amani' />
          <div className='text-parent'>
          <h3 className='name'>Amani Al Neaimi</h3>
          <p className='role'>Director General</p>
          </div>
          <div className="accordian">
        <div className="accordian-header" onClick={handleOpen3}>
          <div>Read More</div>
        </div>
        {show4 && (
          <div className="accordian-body">Greetings, esteemed guests. My name is Amani and I am serving as the Director General of this year’s edition of EISJMUN. I am honored to be a part of this journey to make this year’s MUN the most memorable one yet, from the socialization experience to innovative decision-making situations that delegates meet with. We at EISJ value the significance of multifaceted solutions in the contemporary world, and aim to bring this into our seventh edition of the event. I hope to see you all engage in constructive debate and enjoy every part of EISJMUN 2023!
          </div>
        )}
        </div>
          </div>
        </div>
        </div>

        </div>
        <h2 className='oet'>Our Executive Team is in the Works!</h2>
</>
  )
}

export default Team