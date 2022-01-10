import React from 'react'

const Banner = () => {
    return (
      <>
          <div className="banner-container banner2">
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
<div className="col-12 col-md-6 col-lg-6">
<div className="banner-cont-img wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">
<img src="assets/img/banner/hero-banner.png" alt=""/>
</div>
</div>
</div>
</div>
</div>


<div className="live-sale-container">
<div className="container">
<div className="row live-sale-area wow zoomIn" data-wow-duration="1s">
<div className="col-12 col-md-6 col-lg-6 live-sale-col">
<div className="livesale">
<h2 className="text-center">Pre Sale Ends</h2>
<div id="clock2" className="d-flex flex-wrap justify-content-center pt-20 mb-pb-15">
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
</div>
</div>
<div className="col-12 col-md-6 col-lg-6 live-sale-col">
<div className="livesale">
<h2 className="text-center">Sale Progress</h2>
<div className="progressbar-area">
<div className=" d-flex flex-wrap justify-content-between">
<div>
<small>80%</small>
</div>
</div>
<div id="progressbar2"></div>
</div>
<div className="current-bonus-area d-flex flex-wrap justify-content-between text-center pb-10">
<div className="total-token">
<small>Minimum Target</small>
<span>$20 M</span>
</div>
<div className="total-token">
<small>Maximum Target</small>
<span>$1000 M</span>
</div>
</div>
<div className="join-btn text-center mb-10">
<a href="#">Join & Buy Now</a>
</div>
</div>
</div>
</div>
</div>
</div>
      </>
    )
}

export default Banner
