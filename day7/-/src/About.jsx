import React from 'react'
import s1 from '../assets/s1.jpg';
import './Home.css'



const Home = () => {
  return (
    <div class="home">
         <img src={s1} alt="Scrapbook" />
         <div id="home">
        <p>Welcome To Digital ScarpBook Your Ultimate Scarpbook Starter</p>
        <button>Create Your New Scarpbook</button>
        </div>
    </div>
  )
}

export default Home