import React from 'react'

const Error = () => {
    return (
        <>
        <div className="page-banner">
<div className="container">
<div className="row banner-content-area justify-content-center">
<div className="col-12 col-md-6  text-center wow fadeInUp" data-wow-duration="0.9s" data-wow-delay=".5s">
<h1 className="text-white pb-3">404 Error</h1>
<p>It is a long established fact that a reader will be distracted by the readable content of a
page when looking at its layout.</p>
</div>
</div>
</div>
</div>


<div className="error-container">
<div className="container pt-110 pb-80 mb-pt-60 mb-pb-25">
<div className="row">
<div className="col-lg-6 mx-auto">
<img src="assets/img/error.svg" className="w-100" alt=""/>
<div className="error-content">
<h2>Oppose Page Not Found!</h2>
<p className="error-text">This page not found you looking for may be not exist or removed.</p>
<p className="my-5"><a href="index.html" className="error-btn">Back To Home</a></p>
</div>
</div>
</div>
</div>
</div>
        </>
    )
}

export default Error
