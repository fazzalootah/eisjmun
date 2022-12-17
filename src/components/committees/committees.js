import React from 'react'
import ecosoc from './img/ecologo.png'
import EU from './img/eu.png'
import g20 from './img/g20.jpg'
import ga1 from './img/ga1.png'
import ga3 from './img/ga3.png'
import hrc from './img/hrc.jpg'
import hsc from './img/hsc.png'
import interpol from './img/interpol.png'
import jcc from './img/jcc.png'
import nato from './img/nato.png'
import nsns from './img/nsns.png'
import nss from './img/nss.png'
import sc from './img/sc.png'
import unodc from './img/unodc.png'
import wef from './img/wef.png'
import who from './img/who.png'
import yc from './img/yc.png'
import './css/committees.css'

function Committees() {
  return (
      <>
      <h2 className='loc'>List of Committees in EISJMUN'23</h2>
      <div className="container">
        <div className="row">

          <div className='combo'>
          <div className='ccard'>
            <img className='img-size' src={ecosoc} alt="Ecosoc" id='ecosoc' />
            <h4 className='com-name'>Economical and Social Council</h4>
            <button className='ics'>Information coming soon.</button>
          </div>

          <div className='ccard'>
            <img className='img-size' src={EU} alt="EU" id="eu"/>
            <h4 className='com-name'>European Union</h4>
            <button className='ics'>Information coming soon.</button>
          </div>
          </div>

          <div className='combo'>
          <div className='ccard'>
            <img className='img-size' src={ga1} alt="g1" id="ga1"/>
            <h4 className='com-name'>First General Assembly</h4>
            <button className='ics'>Information coming soon.</button>
          </div>
          
          <div className='ccard'>
            <img className='img-size' src={g20} alt="g20" id='g20'/>
            <h4 className='com-name'>Group of 20</h4>
            <button className='ics'>Information coming soon.</button>
          </div>
          </div>
        

        </div>

        <div className="row">

        <div className='combo'>
        <div className='ccard'>
            <img className='img-size' src={hsc} alt="hsc" id='hsc'/>
            <h4 className='com-name'>Historic Security Council</h4>
            <button className='ics'>Information coming soon.</button>
          </div>
          <div className='ccard'>
              <img className='img-size' src={hrc} alt="hrc" id='hrc' />
              <h4 className='com-name'>Historic Rights Council</h4>
              <button className='ics'>Information coming soon.</button>
            </div>
            </div>

            <div className='combo'>
            <div className='ccard'>
              <img className='img-size' src={interpol} alt="interpol" id='interpol'/>
              <h4 className='com-name'>International Criminal Police Organisation</h4>
              <button className='ics'>Information coming soon.</button>
            </div>

            <div className='ccard'>
              <img className='img-size' src={jcc} alt="jcc" id='jcc' />
              <h4 className='com-name'>Joint Crisis Committee</h4>
              <button className='ics'>Information coming soon.</button>
            </div>
            </div>
            



        </div>

        <div className="row">

        <div className='combo'>
<div className='ccard'>
              <img className='img-size' src={nsns} alt="nsns" id='nsns'/>
              <h4 className='com-name'>Non State Nation Summit</h4>
              <button className='ics'>Information coming soon.</button>
            </div>

            <div className='ccard'>
                <img className='img-size' src={nato} alt="nato" id='nato'/>
                <h4 className='com-name'>North Atlantic Treaty Organisation</h4>
                <button className='ics'>Information coming soon.</button>
              </div>
            </div>

            <div className='combo'>
          <div className='ccard'>
                <img className='img-size' src={nss} alt="nss" id='nss'/>
                <h4 className='com-name'>Nuclear Security Summit</h4>
                <button className='ics'>Information coming soon.</button>
              </div>

              <div className='ccard'>
                <img className='img-size' src={sc} alt="sc" id='sc'/>
                <h4 className='com-name'>Security Council</h4>
                <button className='ics'>Information coming soon.</button>
              </div>
              </div>
              

          </div>

          <div className="row">

          <div className='combo'>
          <div className='ccard'>
                <img className='img-size' src={ga3} alt="ga3" id='ga3'/>
                <h4 className='com-name'>Third General Assembly</h4>
                <button className='ics'>Information coming soon.</button>
              </div>
              
              <div className='ccard'>
                <img className='img-size' src={unodc} alt="unodc" id='unodc'/>
                <h4 className='com-name'>United Nations Office on Drugs and Crime</h4>
                <button className='ics'>Information coming soon.</button>
              </div>
              </div>

              <div className='combo'>
              <div className='ccard'>
                <img className='img-size' src={wef} alt="wef" id='wef'/>
                <h4 className='com-name'>World Economic Forum</h4>
                <button className='ics'>Information coming soon.</button>
              </div>
              
            <div className='ccard'>
              <img className='img-size' src={who} alt="who" id='who'/>
              <h4 className='com-name'>World Health Organisation</h4>
              <button className='ics'>Information coming soon.</button>
            </div>
          </div>

        </div>

        <div className="row-last">
        <div className='ccard'>
              <img className='img-size' src={yc} alt="yc" id='yc' />
              <h4 className='com-name'>Youth Council</h4>
              <button className='ics'>Information coming soon.</button>
            </div>
        </div>

        </div>

      

    </>
  )
}



export default Committees