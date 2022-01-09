import Footer from './footer';
import Header from './header';
import Home from './pages/home';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import  About from "./pages/about"
import Tokensale from "./pages/tokensale"
import Roadmap from './pages/roadmap';
import Contactpage from './pages/contactpage';
import Member from './pages/member';
import Frequentaq from './pages/frequentaq';
import Error from './pages/error';
import Termcondition from './pages/termcondition';
import Privecy from './pages/privecy';
import Hometwo from './pages/hometwo';
import Homethree from './pages/homethree';
import Blog from './pages/blog';
import Singleblog from './pages/singleblog';
import Blogtwo from './pages/blogtwo'
function App() {
  return (
    <>
    <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/tokensale" element={<Tokensale/>}/>
      <Route path="/roadmap" element={<Roadmap/>}/>
      <Route path="/contact" element={< Contactpage/>}/>
      <Route path="/member" element={< Member/>}/>
      <Route path="/faq" element={<Frequentaq/>}/>
      <Route path="/error" element={<Error/>}/>
      <Route path="/t&c" element={<Termcondition/>}/>
      <Route path="/PrivacyPolicy" element={<Privecy/>}/>
      <Route path="/hometwo" element={<Hometwo/>}/>
      <Route path="/homethree" element={<Homethree/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/blog2" element={<Blogtwo/>}/>
      <Route path="/singleblog" element={<Singleblog/>}/>






   </Routes>
   <Footer/>
   </Router>
    </>
  );
}

export default App;
