import React, { useState } from 'react';
import './App.css'
import brand_logo from './assets/brand.png';
import logo from './assets/Logo.png';
import SimpleSlider from './components/Slider';
import pic5 from './assets/pic5.png'
import pic6 from './assets/pic6.png'
import pic7 from './assets/pic7.png'
import pic8 from './assets/pic8.png';
import pic9 from './assets/e1.png'
import pic10 from './assets/e2.png'
import pic11 from './assets/e3.png'
import pic12 from './assets/e5.png'
import cust from './assets/img2.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import "animate.css";
function App() {
  const [state, setState] = useState('event');

  var settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  };
  return (
    <>
      <div className='astrix-main'>
        <div className="astrix-left">
          <div className="astrix-logo-box">
            <img src={brand_logo} alt="" />
            <img src={logo} alt="" />
          </div>
          <div className="back-texts">
            <p>ASTR<br />IX</p>
            {
              state === "event"
                ?
                <p>EVE<br />NTS</p>
                :
                <p>COLL<br />ECTIONTA<br />BLE</p>
            }

          </div>
          <div className="slider-box">
            <SimpleSlider />
          </div>
          <div className="button-box">
            <button className={state === "event" ? "button-box-button active" : "button-box-button"} onClick={() => setState('event')}>Events</button>
            <button className={state === "collection" ? "button-box-button active" : "button-box-button"} onClick={() => setState('collection')}>Collections</button>
          </div>
         
        </div>
        <div className="astrix-right animate__animated animate__fadeInRight">
          {
            state === "event"
              ?
              <div className="right-event">
                <p className='event-right-title'>Explore Youre First Event</p>
                <p className='event-right-heading'>Event Name</p>
                <div className="date-venue-box">
                  <span className='venue'> Venue</span>
                  <span className='date'><span className="material-symbols-outlined">
                    alarm</span>
                    04/03/2024 @19.00
                  </span>
                </div>
                <p className='right-event-desc'>Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pellentesque mattis condimentum ut nulla. </p>
                <p className='event-right-title'>Artist Lineup</p>
                <div className="artist-img-box">
                  <img src={pic5} alt="" />
                  <img src={pic6} alt="" />
                  <img src={pic7} alt="" />
                </div>
                <div className="event-scan-box">
                  <img src={pic8} alt="" />
                  <button className='scan-box-btn'>Join Waitlist</button>
                </div>
              </div>
              :
              <div className="right-collection">
                <p className='event-right-title'>Explore Your First  Collectible</p>
                <p className='event-right-heading'>Meta <br /> Lives</p>
                <p className='event-right-title'>Live in Astrix</p>
                <p className='right-event-desc p-15'>Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pellentesque mattis condimentum ut nulla. </p>
                <div className="intersted-people">
                  <div className="div">
                    <img src={pic9} alt="" />
                    <img src={pic10} alt="" />
                    <img src={pic11} alt="" />
                    <img src={pic12} alt="" />
                    <img src={pic9} alt="" />
                  </div>
                  <p>22k people intersted</p>
                </div>
                <div className="collect-testimonial-box">
                  <p className='collect'>Collectibles</p>
                  <div className="testimonial">
                    <Slider {...settings}>
                      <div className="cust-review-box">
                        <div className="cust-review-title">
                          <p className='year'>2024</p>
                          <p>By Pablo</p>
                        </div>
                        <p className='cust-title'>Collectiable Name</p>
                        <div className="cust-img-box">
                          <img src={cust} alt="" />
                        </div>
                      </div>
                      <div className="cust-review-box">
                        <div className="cust-review-title">
                          <p className='year'>2024</p>
                          <p>By Pablo</p>
                        </div>
                        <p className='cust-title'>Collectiable Name</p>
                        <div className="cust-img-box">
                          <img src={cust} alt="" />
                        </div>
                      </div>
                      <div className="cust-review-box">
                        <div className="cust-review-title">
                          <p className='year'>2024</p>
                          <p>By Pablo</p>
                        </div>
                        <p className='cust-title'>Collectiable Name</p>
                        <div className="cust-img-box">
                          <img src={cust} alt="" />
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
                <div className="collection-btn">
                  <button className='scan-box-btn'>Join Waitlist</button>
                </div>

              </div>

          }

        </div>
      </div>
      <div className="astrix-divider" style={state === "event" ? { height: "780px" } : { height: "894px" }}>
        
      </div>
      <div className="scroll-bar">
        <p>Collection Live: <span> * </span> <span>J.N. Stadium Delhi * Upcoming Events</span></p>
      </div>
    </>
  )
}

export default App
