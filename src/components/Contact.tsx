import React from 'react'
import '../stylesheets/contact.css';



export const Contact = () => {
  return (
    <>
    <div className='contact-container'>
        <p className='contacto'><span className='flecha-2'>&gt;</span><span className='sobre'> Contacto.</span></p>         
        <p className='sub-contacto-texto'>¿Te gustaría ponerte en contacto o trabajar conmigo?</p>  
        <div className='contacto-texto'>
        <p>Contactame mediante email o Linkedn</p>
        <br />
        <img className='gmail' src={require('../icons/gmail-icon.png')} alt="" /><span className='email'>alanxavierlasco@gmail.com</span>

        </div>



    </div>
    </>
  )
}
