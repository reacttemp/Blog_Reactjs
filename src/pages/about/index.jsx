import React from 'react'
import Contact from '../home/contact'
import Partner from './partner'

const About = () => {
    return (
        <>
        <div className="page-banner">
<div className="container">
<div className="row banner-content-area justify-content-center">
<div className="col-12 col-md-6  text-center wow fadeInUp" data-wow-duration="0.9s" data-wow-delay=".5s">
<h1 className="text-white pb-3">About Us</h1>
<p>It is a long established fact that a reader will be distracted by the readable content of a
page when looking at its layout.</p>
</div>
</div>
</div>
</div>


<div id="section0" className="invented-container overflow-hidden">
<div className="container">
<div className="row invented-area pt-70 pb-40 mb-pt-45 justify-content-between">
<div className="col-12 col-md-6 col-lg-6">
<div className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
<img src="assets/img/about/about.png" alt="" className="w-100" />
</div>
</div>
<div className="col-12 col-md-6 col-lg-6 invented-cont wow fadeInUp" data-wow-duration="1s" data-wow-delay=".7s">
<h3>About Us</h3>
<h2>We complete every project with extra care for you</h2>
<p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
egestas. Suspendisse eu accumsan libero. Nullam vulputate arcu tellus, ut placerat libero
convallis hendrerit.</p>
<p>Praesent dui leo, rhoncus non interdum sit amet, lobortis eu elit. Vivamus eu libero vitae
purus eleifend rhoncus. Nullam vel tempus nulla. Donec bibendum bibendum ipsum id maximus.
</p>
<a className="crp-btn text-white" href="#">Learn More</a>
</div>
</div>
</div>
</div>
<Partner/>
<Contact/>
        </>
    )
}

export default About
