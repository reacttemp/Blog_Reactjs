import React from 'react'

const Contact = () => {
    return (
       <>
       <div className="contact-container pt-40">
<div className="contact-content">
<div className="container">
<div className="row justify-content-between mb-2 pt-70 pb-90 mb-pt-20 mb-pb-30 contact-content-area">
<div className="col-12 col-md-5 contact-info wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
<div className="contact-us">
<h3>Contact us</h3>
<h2>Get In Touch</h2>
<p>Curabitur dictum id neque sit amet aliquam. Integer vitae nibh quis sapien consequat condimentum.</p>
<ul className="contact-social">
<li>
<div className="social-row">
<a href="#"><span><i className="far fa-phone"></i></span>
<p>(+1) 123 456 7894</p></a>
</div>
</li>
<li>
<div className="social-row">
<a href="#"><span><i className="far fa-envelope"></i></span>
<p><span className="__cf_email__" data-cfemail="89e0e7efe6c9ecf1e8e4f9e5eca7eae6e4">[email&#160;protected]</span></p></a>
</div>
</li>
<li>
<div className="social-row">
<span><a href="#"><i className="far fa-map-marker-alt"></i></a></span>
<p>24103 Loving Acres Road, <br />New York, USA</p>
</div>
</li>
</ul>
</div>
</div>
<div className="col-12 col-md-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
<form className="contact-form" action="#">
<div className="d-flex flex-wrap form-col">
<div className="form-group">
<input className="form-control" type="text" name="fname" placeholder="Your name" required />
<span className="alert-error"></span>
</div>
 <div className="form-group">
<input className="form-control" type="email" name="email" placeholder="Your email" required />
<span className="alert-error"></span>
</div>
</div>
<div className="form-group">
<input className="form-control" type="text" name="subject" placeholder="Subject" required />
<span className="alert-error"></span>
</div>
<div className="form-group">
<textarea className="form-control" name="message" rows="7" cols="7" placeholder="Your message here" required></textarea>
<span className="alert-error"></span>
</div>
<div className="submit-col">
<button type="submit">Send Message</button>
</div>
</form>
</div>
</div>
{/* <div className="g-map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.34194156103!2d-74.03927096447748!3d40.759040329405195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4a01c8df6fb3cb8!2sSolomon%20R.%20Guggenheim%20Museum!5e0!3m2!1sen!2sbd!4v1619410634508!5m2!1sen!2sbd" className="w-100" height="450" style="border:0;" allowFullscreen="" loading="lazy"></iframe>
</div> */}
</div>
</div>
</div>


{/* <div className="container">
<div className="row">
<div className="newsletter-content wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
<h2>Subscribe to Our Newsletter</h2>
<div className="form-group newsletter-field">
<form action="#" method="post">
<input className="form-control" type="email" name="EMAIL" placeholder="Your email" />
<button type="submit"> <i className="far fa-paper-plane"></i> </button>
</form>
</div>
</div>
</div>
</div> */}

       </>
    )
}

export default Contact
