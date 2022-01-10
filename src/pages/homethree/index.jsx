import React from 'react'
import Aboutus from '../home/aboutus'
import Feature from '../home/feature'
import Tokenprofit from '../home/tokenprofit'
import Whycrypto from '../home/whycrypto'
import Roadmap from '../home/roadmap'
import Expert from '../home/expert'
import Faq from '../home/faq'
import Clientlogo from './clientlogo'
import Contact from '../home/contact'

const Homethree = () => {
    return (
        <>
        <div className="banner-container banner3">
<div className="container">
<div className="row banner-content-area justify-content-between">
<div className="col-12 col-md-6 col-lg-6 banner-content">
<div className="banner-cont-info text-white wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
<h5 className="text-white">Enjoy The World With Cryptu</h5>
<h1 className="text-white">Crpto currency is a digital asset to work</h1>
<p className="text-white">Fusce urna lacus, aliquam eu tortor vitae, aliquam tincidunt purus. Praesent tincidunt viverra molestie sed nec.</p>
<a className="crp-btn text-white" href="#">Learn More</a>
</div>
</div>
<div className="col-12 col-md-6 col-lg-6 mobile-pt-50 d-flex flex-wrap justify-content-lg-end banner-right">
<div className="token-sale wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.7s">
<h5 className="text-white text-center">Token Sale</h5>
<h2 className="text-white text-center">Pre Sale Ends</h2>
<div id="clock3" className="d-flex flex-wrap justify-content-center pt-20 pb-40">
<div className="clockdiv_column">
<div className="clocktimes">
<span id="days"></span>
<small>Days</small>
</div>
</div>
<div className="clockdiv_column">
<div className="clocktimes">
<span id="hours"></span>
<small>Hours</small>
</div>
</div>
<div className="clockdiv_column">
<div className="clocktimes">
<span id="mins"></span>
<small>Mins</small>
</div>
</div>
<div className="clockdiv_column">
<div className="clocktimes">
<span id="secs"></span>
<small>Secs</small>
</div>
</div>
</div>
<div className="current-bonus-area text-white d-flex flex-wrap justify-content-between pb-10">
<div className="total-token">
<small>Token Amount</small>
<strong>5,00000</strong>
</div>
<div className="current-bonus">
<small> Bonus</small>
<strong>40%</strong>
</div>
</div>
<div className="progressbar-area">
<div className=" d-flex flex-wrap justify-content-between">
<div>
<small>$2000</small>
 </div>
<div>
<small>$50,00000</small>
</div>
</div>
<div id="progressbar"></div>
</div>
<div className="current-bonus-area text-white d-flex flex-wrap justify-content-between pb-10">
<div className="total-token">
<small>15 days ends</small>
</div>
<div className="current-bonus">
<small>Max Target</small>
</div>
</div>
<a className="crp-btn text-white" href="#">Join & Buy Now</a>
</div>
</div>
</div>
</div>
</div>
<div className="service-container">
<div className="container">
<div className="row service-area pt-70">
<div className="col-12 col-md-12 col-lg-3 mb-40 service wow zoomIn" data-wow-duration="1s" data-wow-delay=".3s">
<div className="service-info">
<div className="service-icon">
<img src="assets/img/icon/1.png" alt="" width="118" height="120" />
</div>
<div className="service-cont">
<h3>Social Assistant</h3>
<p>Morbi pellentesque congue felis molestie tristique. Aenean rhoncus leo a posuere ullamcorper.</p>
<a className="more-btn" href="#">Read More</a>
</div>
</div>
</div>
<div className="col-12 col-md-12 col-lg-3 mb-40 service wow zoomIn" data-wow-duration="1s">
<div className="service-info">
<div className="service-icon">
<img src="assets/img/icon/2.png" alt="" width="118" height="120" />
</div>
<div className="service-cont">
<h3>Order Management</h3>
<p>Morbi pellentesque congue felis molestie tristique. Aenean rhoncus leo a posuere ullamcorper.</p>
<a className="more-btn" href="#">Read More</a>
</div>
</div>
</div>
<div className="col-12 col-md-12 col-lg-3 mb-40 service wow zoomIn" data-wow-duration="1s" data-wow-delay="0.5s">
<div className="service-info">
<div className="service-icon">
<img src="assets/img/icon/3.png" alt="" width="118" height="120" />
</div>
<div className="service-cont">
<h3>Price Notification</h3>
<p>Morbi pellentesque congue felis molestie tristique. Aenean rhoncus leo a posuere ullamcorper.</p>
<a className="more-btn" href="#">Read More</a>
</div>
</div>
</div>
<div className="col-12 col-md-12 col-lg-3 mb-40 service wow zoomIn" data-wow-duration="1s" data-wow-delay="0.5s">
<div className="service-info">
<div className="service-icon">
<img src="assets/img/icon/4.png" alt="" width="118" height="120" />
</div>
<div className="service-cont">
<h3>Trading Platform</h3>
<p>Morbi pellentesque congue felis molestie tristique. Aenean rhoncus leo a posuere ullamcorper.</p>
<a className="more-btn" href="#">Read More</a>
</div>
</div>
</div>
</div>
</div>
</div>
<Aboutus/>
<Whycrypto/>
<Feature/>
<Tokenprofit/>
<Roadmap/>
<Expert/>
<Faq/>
<Clientlogo/>
<Contact/>

        </>
    )
}

export default Homethree
