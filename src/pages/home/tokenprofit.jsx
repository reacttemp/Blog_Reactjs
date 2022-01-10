import React from 'react'

const Tokenprofit = () => {
    return (
       <>
       <div className="container">
<div className="row pt-110 pb-50 mb-pt-60 mb-pb-0">
<div className="col-12 big-title text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
<h3>Token Details</h3>
<h2>Token Distribution</h2>
</div>
</div>
<div className="chart-container d-flex flex-wrap pb-110 mb-pb-60 mb-pt-20">
<div className="chart-col wow zoomIn" data-wow-duration="1s" data-wow-delay="0.5s">
<div className="chart-token d-flex flex-wrap align-items-center justify-content-sm-center justify-content-lg-start mb-50">
<div className="chart-cycle">
<canvas id="chart1" width="300" height="300"></canvas>
<div className="chart-icon"></div>
</div>
<div className="chart-point">
<div>
<div className="sale-item">
<div className="sale-item-color">
<span></span>
</div>
<div className="sale-item-cont">
<strong>10%</strong>
<small>Top Cummunity</small>
</div>
</div>
<div className="sale-item">
<div className="sale-item-color color-green">
<span></span>
</div>
<div className="sale-item-cont">
<strong>08%</strong>
<small>Reserved Fund</small>
</div>
</div>
<div className="sale-item">
<div className="sale-item-color color-blue">
<span></span>
</div>
<div className="sale-item-cont">
<strong>12%</strong>
<small>Advisor Team</small>
</div>
</div>
 <div className="sale-item">
<div className="sale-item-color color-yellow">
<span></span>
</div>
<div className="sale-item-cont">
<strong>50%</strong>
<small>Sold Globaly</small>
</div>
</div>
<div className="sale-item">
<div className="sale-item-color color-burnt">
<span></span>
</div>
<div className="sale-item-cont">
<strong>20%</strong>
<small>Financial</small>
</div>
</div>
</div>
</div>
</div>
<h3>Token Distribution</h3>
</div>
<div className="chart-col wow zoomIn" data-wow-duration="1s" data-wow-delay="0.5s">
<div className="chart-token d-flex flex-wrap align-items-center order-lg-2 justify-content-lg-end justify-content-sm-center justify-content-md-center mb-pt-10 mb-50">
<div className="chart-cycle d-flex order-lg-2">
<div className="chart-cycle">
<canvas id="chart2" width="300" height="300"></canvas>
<div className="chart-icon"></div>
</div>
</div>
<div className="chart-point d-flex order-lg-1">
<div className="sale-right-text">
<div className="sale-item">
<div className="sale-item-color">
<span></span>
</div>
<div className="sale-item-cont">
<strong>20%</strong>
<small>Top Cummunity</small>
</div>
</div>
<div className="sale-item">
<div className="sale-item-color color-green">
<span></span>
</div>
<div className="sale-item-cont">
<strong>50%</strong>
<small>Reserved Fund</small>
</div>
</div>
<div className="sale-item">
<div className="sale-item-color color-blue">
<span></span>
</div>
<div className="sale-item-cont">
<strong>25%</strong>
<small>Advisor Team</small>
</div>
</div>
<div className="sale-item">
<div className="sale-item-color color-yellow">
<span></span>
</div>
<div className="sale-item-cont">
<strong>15%</strong>
<small>Sold Globaly</small>
</div>
</div>
<div className="sale-item">
<div className="sale-item-color color-burnt">
 <span></span>
</div>
<div className="sale-item-cont">
<strong>7%</strong>
<small>Financial</small>
</div>
</div>
</div>
</div>
</div>
<h3 className="text-end">Sale Contribution</h3>
</div>
</div>
</div>



       </>
    )
}

export default Tokenprofit
