import React from 'react'

import web from "../images/img1.svg";
import MainBanner from '../common/MainBanner';




function About() {
  return (
    <MainBanner
    name="Grow your business with"
    imgsrc={web}
    visit="/home"
    link = "/contact"
    btnname="Contact Now"
  />
  )
}

export default About