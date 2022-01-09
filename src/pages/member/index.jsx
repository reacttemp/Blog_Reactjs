import React from 'react'
import Expert from "../home/expert"
const Member = () => {
    return (
       <>
       
<div className="page-banner">
<div className="container">
<div className="row banner-content-area justify-content-center">
<div className="col-12 col-md-6  text-center wow fadeInUp" data-wow-duration="0.9s" data-wow-delay=".5s">
<h1 className="text-white pb-3">Team Members</h1>
<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
</div>
</div>
</div>
</div>
       <Expert className="bg-primery" style={{backgroundcolor:"white"}}/>
       </>
    )
}

export default Member
