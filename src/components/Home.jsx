import React from 'react'
import resume from '../assets/vipul_kamble_new resume.pdf'

function Home() {
  let whatsapp_message= "https://wa.me/917620149721?text=I want to hire you"
  return (
    <div className='container-fluid bg-dark text-light min-vh-100 d-flex justify-content-center align-items-center'>
      <div className="abc w-50 mx-auto">
        <h1>Hello, I am <span className='text-danger display-2 fw-bold'>Vipul</span></h1>
        <p>Hello, I am a professional developer looking for the opportunity to express my knowledge. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nostrum, accusamus maiores quos itaque libero voluptatibus unde at sint officia rem corrupti tenetur error, vero voluptas aspernatur ducimus nemo debitis!</p>
        <div>
          <a href={resume} className='btn btn-outline-danger mx-3' download>Download Resume</a>
          <a href={whatsapp_message} className='btn btn-danger padding'>Connerct on whatsapp</a>
        </div>
      </div>
    </div>
  )
}

export default Home
