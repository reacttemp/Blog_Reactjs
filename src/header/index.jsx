import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
       <>
       <div className="preloader">
<div className="loader"></div>
</div>


<div id="wrapper" className="overflow-hidden">
<div className="fat-nav"></div>

<header className="header-container position-absolute">
<div className="container">
<div className="header-area d-flex flex-wrap justify-content-between">
<div className="logo">
<a href="index.html"><img src="assets/img/logo.png" alt="" width="216" height="39" /></a>
</div>
<div className="menu-area d-flex flex-wrap">
<nav className="main-menu">
<ul className="nav">
<li className="current-menu-item menu-item-has-children"><NavLink to="/">Home</NavLink>
<ul>
<li><NavLink to="/">Home One</NavLink></li>
<li><NavLink to="/hometwo">Home Two</NavLink></li>
<li><NavLink to="/homethree">Home Three</NavLink></li>
</ul>
</li>
<li><NavLink to="/about">About</NavLink></li>
<li><NavLink to="/tokensale">Token Sale</NavLink></li>
<li className="menu-item-has-children"><a href="#">Pages</a>
<ul>
<li><NavLink to="/about">About Us</NavLink></li>
<li><NavLink to="/member">Team Members</NavLink></li>
<li><NavLink to="/tokensale">Token Sale</NavLink></li>
<li><NavLink to="/faq">Faq</NavLink></li>
<li><NavLink to="/roadmap">Road Map</NavLink></li>
<li><NavLink to="/error">404 Error</NavLink></li>
<li><NavLink to="/t&c">Terms & Conditions</NavLink></li>
<li><NavLink to="/PrivacyPolicy">Privacy Policy</NavLink></li>
</ul>
</li>
<li><NavLink to="/roadmap">Road Map</NavLink></li>
<li className="menu-item-has-children"><a href="#">Blog</a>
<ul>
<li><NavLink to="/blog">Blog One</NavLink></li>
<li><NavLink to="/blog2">Blog Two</NavLink></li>
<li><NavLink to="/singleblog">Blog single</NavLink></li>
</ul>
</li>
<li><NavLink to="/contact">Contact</NavLink></li>
</ul>
</nav>
</div>
<div className="header-right">
<ul className="header-social d-flex flex-wrap">
<li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
<li><a href="#"><i className="fab fa-twitter"></i></a></li>
<li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
<li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
</ul>
</div>
</div>
</div>
</header>
</div>
       </>
    )
}

export default Header
