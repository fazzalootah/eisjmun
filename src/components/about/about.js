import React from 'react'
import { Link } from 'react-router-dom'
import './css/about.css'
import armypic from './img/chingchong.jpg'

function About() {
  return (
<>
<div className='his-e-o'>
    <div className='his-e-o-t'>
      <h1 className='his-e-t'>EISJMUN History</h1>
      <p className='his-e-p'>EISJMUN, an annual student-led conference, was first established by our highschool seniors in 2016. Ever since, we have facilitated and hosted thousands of students from around the globe attend EISJMUN with its state-of-the-art campus and theater, THIMUN procedural debate, trained student officers, and an unforgettable Model United Nations experience for every member of our community. From providing opportunities to enhance debate and communication skills to an all-out Social with music, dancing, and great food, the Emirates International School Jumeirah’s 2023 edition of Model United Nations is sure to be bigger and better than ever before. We will see you at the conference!</p>
    </div>
</div>
<div className='ei-t'>
<div className='ei-t-tex'>
<h1 className='ei-t-ti'>EISJMUN'23 Theme</h1>
<p className='eit-th'>The international community has been introducing issues that have not occurred before. Expansionist wars, humanitarian crises, protests, climate summits, exponential advancements in technology, economic progression - we want to include it all this year in EISJMUN. This brings us to our theme, ‘Government policies, tyranny and social autonomy’. A look back at what went right and wrong, and a blueprint for how the world in which we are the leaders will combat these issues.</p>
</div>

<img src={armypic} alt='armypic' className='ching'/>
</div>
<div className='wyn'>
<h1 className='wyn-t'>What's New?</h1>
<p className='wyn-pa'>EISJMUN’23 welcomes a series of new committee’s for this year’s conference. Aside from these new committee’s we have still maintained our existing committee’s for a total of 17 different committees. </p>
<Link to='/committees' className='wyn-b'>Committees</Link>
</div>

</>
  )
}

export default About