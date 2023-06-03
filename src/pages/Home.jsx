import React from 'react'
import MainBanner from '../common/MainBanner';
import web from "../images/hero-img.png";


function Home() {
  return (
    <MainBanner
    name="Grow your business with"
    imgsrc={web}
    visit="/home"
    btnname="Get Started"
    link = "/contact"
  />
  )
}

export default Home;