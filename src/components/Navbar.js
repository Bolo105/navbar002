
import React from 'react'
import show from './images/show.jpg'
import dos from './images/dos.jpg'
import '../App.css'
import styled from 'styled-components'
import reun from './images/reun.jpg'
import logo from './images/logo.jpg'
import { FaHtml5, FaBootstrap, FaAddressCard, FaNewspaper, FaCss3Alt, FaStream,
   FaReact, FaGitAlt, FaGithub, FaShoppingCart, FaNetworkWired } from 'react-icons/fa';
import { GiFishingHook } from 'react-icons/gi';
import { BiLogoJavascript, BiRestaurant } from 'react-icons/bi';
import { SiStyledcomponents, SiReactrouter, SiRedux, SiYourtraveldottv } from 'react-icons/si';
import { MdOutlineSportsVolleyball, MdOutlineQueryStats } from 'react-icons/md';
import { BsTerminalFill } from 'react-icons/bs';
import { CgGhost } from 'react-icons/cg';
import { FcTodoList } from 'react-icons/fc';
import { TiWeatherPartlySunny } from 'react-icons/ti';

const Bod = styled.div`
   padding: 0;
   margin: 0;
`;
const Bann = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${reun});
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center center;
`;

const Img = styled.img`
   width: 100% !important;  
   border-radius: 5px;
`;
const Imag = styled.img`
    width: 50px;
`;

const Head1 = styled.h5`
    font-weight: bold;
    color: #68a0d2;
    display: inline-block;
    padding-left: 15px;
    font-family: 'Kaushan Script', cursive;
    font-size: 30px;
    vertical-align: middle;
	  letter-spacing: 1px;  
    &:hover {
      color: #96b9d8;
    }
    @media(max-width: 912px){
      font-size: 20px;
    }
`;

export const Navbar = () => {
  return (
    <Bod>
    <Bann className="banner-area">
        <div className="container">
           <div className="row">
              <div className="col-12">
                 <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
                   <div className="container-fluid">
                   <Imag  src={logo} alt='' /><Head1>myReactJs</Head1>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                           <span className="navbar-toggler-icon"></span>
                        </button>
                     <div className="collapse navbar-collapse" id="navbar">
                       <ul className="navbar-nav ml-auto nav-fill w-100 mb-2 mb-lg-0">
                          <li className="nav-item"><a className="nav-link active" aria-current="page" href="/#">Home</a></li>
                          <li className="nav-item"><a className="nav-link" href="/#">About</a></li>
                          <li className="nav-item dropdown menu-area">
                            <a className="nav-link dropdown-toggle" href="/#" id='mega-one' role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
                               <div className="dropdown-menu mega-area" aria-labelledby="mega-one">
                                  <div className="row">
                                     <div className="col-sm-6 col-lg-3 ">
                                        <h5>Designing</h5>
                                        <span className='icon-text'><FaHtml5 color='#4b7f99' size='20px'/><a href="/#" className="dropdown-item d-flex">HTML </a></span>
                                        <span className='icon-text'><FaCss3Alt color='#4b7f99' size='20px'/><a href="/#" className="dropdown-item">CSS</a></span>
                                        <span className='icon-text'><FaBootstrap color='#4b7f99' size='20px'/><a href="/#" className="dropdown-item">Bootstrap</a></span>
                                        <span className='icon-text'><SiStyledcomponents color='#4b7f99' size='20px'/><a href="/#" className="dropdown-item">styled components</a></span>
                                        <span className='icon-text'><FaAddressCard color='#4b7f99' size='20px'/><a href="/#" className="dropdown-item">UI/UX Design</a></span>
                                     </div>
                                     <div className="col-sm-6 col-lg-3">
                                        <h5>Funcionality</h5>
                                        <span className='icon-text'><BiLogoJavascript color='#4b7f99' size='20px'/><a href="/#" className="dropdown-item d-flex">Javascript</a></span>
                                        <span className='icon-text'><FaReact color='#4b7f99' size='20px'/><a href="/#" className="dropdown-item d-flex">React Js</a></span>
                                        <span className='icon-text'><GiFishingHook color='#4b7f99' size='20px'/><a href="/#" className="dropdown-item">React Hooks</a></span>
                                        <span className='icon-text'><SiReactrouter color='#4b7f99' size='20px'/><a href="/#" className="dropdown-item">React Router</a></span>
                                        <span className='icon-text'><SiRedux color='#4b7f99' size='20px'/><a href="/#" className="dropdown-item">React Redux</a></span>
                                     </div>
                                     <div className="col-sm-6 col-lg-3">
                                        <h5>Others Tools</h5>
                                        <span className='icon-text'><BsTerminalFill color='#4b7f99' size='20px'/><a href="/#" className="dropdown-item d-flex">Terminal</a></span>
                                        <span className='icon-text'><FaGitAlt color='#4b7f99' size='20px'/><a href="/#" className="dropdown-item d-flex">Git</a></span>
                                        <span className='icon-text'><FaGithub color='#4b7f99' size='20px'/><a href="/#" className="dropdown-item">GitHub</a></span>
                                        <span className='icon-text'><CgGhost color='#4b7f99' size='20px'/><a href="/#" className="dropdown-item">Hosting/Domain</a></span>
                                        
                                     </div>
                                     <div className="col-sm-6 col-lg-3">
                                        <h5>Show</h5>
                                        <Img src={show} alt = ""  />
                                     </div>
                                  </div>
                               </div>
                         </li>
                         <li className="nav-item dropdown menu-area">
                            <a className="nav-link dropdown-toggle" href="/#" id='mega-two' role="button" data-bs-toggle="dropdown" aria-expanded="false">Portfolio</a>
                               <div className="dropdown-menu mega-area" aria-labelledby="mega-two">
                                  <div className="row">
                                     <div className="col-sm-6 col-lg-3">
                                        <h5>Set</h5>
                                        <Img src={dos} alt = "" />
                                     </div>
                                     <div className="col-sm-6 col-lg-3">
                                        <h5>WebSites</h5>
                                        <span className='icon-text'><BiRestaurant color='#4b7f99' size='20px'/><a href="/#" className="dropdown-item">Restaurant</a></span>
                                        <span className='icon-text'><MdOutlineSportsVolleyball color='#4b7f99' size='20px'/><a href="/#" className="dropdown-item">Sport</a></span>
                                        <span className='icon-text'><SiYourtraveldottv color='#4b7f99' size='20px'/><a href="/#" className="dropdown-item">Travel Agency</a></span>
                                        <span className='icon-text'><FaShoppingCart color='#4b7f99' size='20px'/><a href="/#" className="dropdown-item">Ecommerce</a></span>
                                        <span className='icon-text'><FaNewspaper color='#4b7f99' size='20px'/><a href="/#" className="dropdown-item">News Agency</a></span>
                                     </div>
                                     <div className="col-sm-6 col-lg-3">
                                        <h5>Apps</h5>
                                        <span className='icon-text'><FcTodoList color='#4b7f99' size='20px'/><a href="/#" className="dropdown-item">cruds</a></span>
                                        <span className='icon-text'><TiWeatherPartlySunny color='#4b7f99' size='20px'/><a href="/#" className="dropdown-item">api</a></span>
                                        <span className='icon-text'><FaNetworkWired color='#4b7f99' size='20px'/><a href="/#" className="dropdown-item">Networks</a></span>
                                        <span className='icon-text'><FaStream color='#4b7f99' size='20px'/><a href="/#" className="dropdown-item">Streamings</a></span>
                                        <span className='icon-text'><MdOutlineQueryStats color='#4b7f99' size='20px'/><a href="/#" className="dropdown-item">dashboard</a></span>
                                     </div>
                                     <div className="col-sm-6 col-lg-3">
                                        <h5>Tags</h5>
                                        <p>
                                          <span className="badge">Web Design</span>
                                          <span className="badge">React Js</span>
                                          <span className="badge">Javascript</span><br />
                                          <span className="badge">CSS</span>
                                          <span className="badge">React Redux</span>
                                          <span className="badge">Bootstrap</span>
                                          <span className="badge">Styled Components</span>
                                          <span className="badge">React Router</span>
                                          <span className="badge">UI/UX Design</span>
                                        </p>
                                     </div>
                                  </div>
                               </div>
                         </li>
                         <li className="nav-item"><a className="nav-link" href="/#">Contact</a></li>
                       </ul>
                     </div>
                   </div>
                 </nav>
              </div>
           </div>
        </div>
    </Bann>
    </Bod>
  )
}

