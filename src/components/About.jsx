import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import { BiDownload } from 'react-icons/bi';
import { BsCheckCircle } from 'react-icons/bs';
import photo from '../assets/images/Photo.jpg';
import resume from '../assets/Barack Mukelenga Resume.pdf';
import { Link } from 'react-scroll';

export default class About extends Component {
  render() {
    return (
      <div className='about-page-main-container' id='about' name='about'>
        <div className='right-area-main-container'>
          <div className='home-hello-wrapper ' data-aos='fade-up'>
            <div className='hello-line'></div>
            <h3 className='hero-hello'>About me</h3>
          </div>
          <h2 className='slogan' data-aos='fade-up'>
            Hi,
            {/* <br /> To help your next project */}
          </h2>

          <p className='about-work' data-aos='fade-up'>
          I am Akshad Swaroop Nayakwadi, Completed B.Tech degree in Information Technology from Government College Of Engineering Karad, India.
          </p>

          <p className='about-work' data-aos='fade-up'>Currently Working as <b className='slogan1'>Graduate Trainee Engineer - Technology at Digit Insurance.</b></p>

          <p className='about-work' data-aos='fade-up'>
   

I'am  Front-End Web and Java development Enthusiast. Feel free to contact. Cheers !!
          </p>
          <h3 className='languages-title' data-aos='fade-up'>
            Languages and <span>Frameworks</span>
          </h3>
          <div className='about-work-details-wrapper'>
            <div className='work-about-item-wrapper' data-aos='fade-up-right'>
              <div className='check-icon'>
                <IconContext.Provider value={{ className: 'check-list-icon' }}>
                  <BsCheckCircle />
                </IconContext.Provider>
              </div>
              <h3>C++</h3>
            </div>
            <div className='work-about-item-wrapper' data-aos='fade-up-left'>
              <div className='check-icon'>
                <IconContext.Provider value={{ className: 'check-list-icon' }}>
                  <BsCheckCircle />
                </IconContext.Provider>
              </div>
              <h3>Javascript</h3>
            </div>
            <div className='work-about-item-wrapper' data-aos='fade-up-left'>
              <div className='check-icon'>
                <IconContext.Provider value={{ className: 'check-list-icon' }}>
                  <BsCheckCircle />
                </IconContext.Provider>
              </div>
              <h3>Core , Advance Java</h3>
            </div>
            <div className='work-about-item-wrapper' data-aos='fade-up-left'>
              <div className='check-icon'>
                <IconContext.Provider value={{ className: 'check-list-icon' }}>
                  <BsCheckCircle />
                </IconContext.Provider>
              </div>
              <h3>Servlets</h3>
            </div>
            <div className='work-about-item-wrapper' data-aos='fade-up-left'>
              <div className='check-icon'>
                <IconContext.Provider value={{ className: 'check-list-icon' }}>
                  <BsCheckCircle />
                </IconContext.Provider>
              </div>
              <h3>Spring MVC</h3>
            </div>
            <div className='work-about-item-wrapper' data-aos='fade-up-left'>
              <div className='check-icon'>
                <IconContext.Provider value={{ className: 'check-list-icon' }}>
                  <BsCheckCircle />
                </IconContext.Provider>
              </div>
              <h3>SpringBoot</h3>
            </div>
            <div className='work-about-item-wrapper' data-aos='fade-up-left'>
              <div className='check-icon'>
                <IconContext.Provider value={{ className: 'check-list-icon' }}>
                  <BsCheckCircle />
                </IconContext.Provider>
              </div>
              <h3>Hibernate</h3>
            </div>
            <div className='work-about-item-wrapper' data-aos='fade-up-left'>
              <div className='check-icon'>
                <IconContext.Provider value={{ className: 'check-list-icon' }}>
                  <BsCheckCircle />
                </IconContext.Provider>
              </div>
              <h3> JavaServer Pages (JSP)</h3>
            </div>
            <div className='work-about-item-wrapper' data-aos='fade-up-right'>
              <div className='check-icon'>
                <IconContext.Provider value={{ className: 'check-list-icon' }}>
                  <BsCheckCircle />
                </IconContext.Provider>
              </div>
              <h3>MySQL</h3>
            </div>
            <div className='work-about-item-wrapper' data-aos='fade-up-left'>
              <div className='check-icon'>
                <IconContext.Provider value={{ className: 'check-list-icon' }}>
                  <BsCheckCircle />
                </IconContext.Provider>
              </div>
              <h3>HTML5</h3>
            </div>
            <div className='work-about-item-wrapper' data-aos='fade-up-right'>
              <div className='check-icon'>
                <IconContext.Provider value={{ className: 'check-list-icon' }}>
                  <BsCheckCircle />
                </IconContext.Provider>
              </div>
              <h3>CSS3</h3>
            </div>
            <div className='work-about-item-wrapper' data-aos='fade-up-left'>
              <div className='check-icon'>
                <IconContext.Provider value={{ className: 'check-list-icon' }}>
                  <BsCheckCircle />
                </IconContext.Provider>
              </div>
              <h3>ReactJs</h3>
            </div>
            <div className='work-about-item-wrapper' data-aos='fade-up-right'>
              <div className='check-icon'>
                <IconContext.Provider value={{ className: 'check-list-icon' }}>
                  <BsCheckCircle />
                </IconContext.Provider>
              </div>
              <h3>firebase</h3>
            </div>
            <div className='work-about-item-wrapper' data-aos='fade-up-right'>
              <div className='check-icon'>
                <IconContext.Provider value={{ className: 'check-list-icon' }}>
                  <BsCheckCircle />
                </IconContext.Provider>
              </div>
              <h3>Github</h3>
            </div>
            <div className='work-about-item-wrapper' data-aos='fade-up-right'>
              <div className='check-icon'>
                <IconContext.Provider value={{ className: 'check-list-icon' }}>
                  <BsCheckCircle />
                </IconContext.Provider>
              </div>
              <h3>Data Structures And Algorithms</h3>
            </div>
           
            <div className='work-about-item-wrapper' data-aos='fade-up-right'>
              <div className='check-icon'>
                <IconContext.Provider value={{ className: 'check-list-icon' }}>
                  <BsCheckCircle />
                </IconContext.Provider>
              </div>
              <h3>Database Management System</h3>
            </div>
            <div className='work-about-item-wrapper' data-aos='fade-up-right'>
              <div className='check-icon'>
                <IconContext.Provider value={{ className: 'check-list-icon' }}>
                  <BsCheckCircle />
                </IconContext.Provider>
              </div>
              <h3>Operating System</h3>
            </div>
          </div>
          <div className='btn-wrapper about' data-aos='fade-up'>
            <a href="https://drive.google.com/file/d/1L3BzuXnUCjBc8Q2d1TGOhAm-jl4IKKBf/view?usp=sharing">
            <button
            
              spy={true}
              smooth={true}
              duration={500}
              className='hire-me-btn'
            >
              Resume
            </button>
            </a>
            {/* <a href="" className='download-cv-btn'>
              Resume
              <IconContext.Provider value={{ className: 'download-icon' }}>
                <BiDownload />
              </IconContext.Provider>
            </a> */}
          </div>
          <h3 className='languages-title' data-aos='fade-up'>
            Competitive <span>Programming Profiles</span>
          </h3>
          <div className='about-work-details-wrapper'>
          <div className='work-about-item-wrapper' data-aos='fade-up-right'>
              <div className='check-icon'>
                <IconContext.Provider value={{ className: 'check-list-icon' }}>
                  <BsCheckCircle />
                </IconContext.Provider>
              </div>
              <a               href="https://www.codechef.com/users/asn7829">
              <h3 >Codechef  (asn7829)</h3>
              </a>
            </div>
          <div className='work-about-item-wrapper' data-aos='fade-up-right'>
              <div className='check-icon'>
                <IconContext.Provider value={{ className: 'check-list-icon' }}>
                  <BsCheckCircle />
                </IconContext.Provider>
              </div>
              <a               href="https://codeforces.com/profile/Akshad0103">
              <h3>Codeforces  (Akshad0103)</h3>
              </a>
            </div>
            <div className='work-about-item-wrapper' data-aos='fade-up-right'>
              <div className='check-icon'>
                <IconContext.Provider value={{ className: 'check-list-icon' }}>
                  <BsCheckCircle />
                </IconContext.Provider>
              </div>
              <a               href="https://leetcode.com/akshadsn03/">
              <h3>Leetcode  (akshadsn03)</h3>
              </a>
            </div>
            <div className='work-about-item-wrapper' data-aos='fade-up-right'>
              <div className='check-icon'>
                <IconContext.Provider value={{ className: 'check-list-icon' }}>
                  <BsCheckCircle />
                </IconContext.Provider>
              </div>
              <a               href="https://www.hackerrank.com/akshadsn03">
              <h3>Hackerrank  (akshadsn03)</h3>
              </a>
            </div>
      
       
         
          </div>
        </div>
        
        <div className='right-about-page-area' data-aos='fade-up-left'>
          <div className='image-container'>
            <img src={photo} alt='project' className='project-about-img' />
           
            <svg
              version='1.0'
              className='dots-svg about'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 1280.000000 1280.000000'
              preserveAspectRatio='xMidYMid meet'
            >
              <metadata></metadata>
              <g
                transform='translate(0.000000,1280.000000) scale(0.100000,-0.100000)'
                fill='#000000'
                stroke='none'
              >
                <path
                  d='M500 12647 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M1780 12647 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M3060 12647 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M4340 12647 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M5620 12647 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M6900 12647 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M8180 12647 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M9460 12647 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M10740 12647 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 249 -73 535 101 615 373 46 158 -8 345 -139 476 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M12020 12647 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 249 -73 535 101 615 373 46 158 -8 345 -139 476 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M500 11367 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M1780 11367 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M3060 11367 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M4340 11367 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M5620 11367 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M6900 11367 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M8180 11367 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M9460 11367 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M10740 11367 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 249 -73 535 101 615 373 46 158 -8 345 -139 476 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M12020 11367 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 249 -73 535 101 615 373 46 158 -8 345 -139 476 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M500 10087 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M1780 10087 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M3060 10087 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M4340 10087 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M5620 10087 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M6900 10087 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M8180 10087 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M9460 10087 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M10740 10087 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 219 0 428 165 494 389 73 249 -101 535 -373 615 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M12020 10087 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 219 0 428 165 494 389 73 249 -101 535 -373 615 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M500 8807 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494 -631
266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M1780 8807 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M3060 8807 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M4340 8807 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M5620 8807 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M6900 8807 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M8180 8807 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M9460 8807 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M10740 8807 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 219 0 428 165 494 389 73 249 -101 535 -373 615 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M12020 8807 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 219 0 428 165 494 389 73 249 -101 535 -373 615 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M500 7527 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494 -631
266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M1780 7527 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M3060 7527 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M4340 7527 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M5620 7527 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M6900 7527 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M8180 7527 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M9460 7527 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M10740 7527 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 219 0 428 165 494 389 73 249 -101 535 -373 615 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M12020 7527 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 219 0 428 165 494 389 73 249 -101 535 -373 615 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M500 6247 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494 -631
266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M1780 6247 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M3060 6247 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M4340 6247 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M5620 6247 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M6900 6247 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M8180 6247 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M9460 6247 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M10740 6247 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 219 0 428 165 494 389 73 249 -101 535 -373 615 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M12020 6247 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 219 0 428 165 494 389 73 249 -101 535 -373 615 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M500 4967 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494 -631
266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M1780 4967 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M3060 4967 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M4340 4967 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M5620 4967 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M6900 4967 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M8180 4967 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M9460 4967 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M10740 4967 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M12020 4967 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M500 3687 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494 -631
266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M1780 3687 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M3060 3687 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M4340 3687 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M5620 3687 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M6900 3687 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M8180 3687 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M9460 3687 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M10740 3687 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M12020 3687 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M500 2407 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494 -631
266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495 132z'
                />
                <path
                  d='M1780 2407 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M3060 2407 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M4340 2407 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M5620 2407 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M6900 2407 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M8180 2407 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M9460 2407 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M10740 2407 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M12020 2407 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M500 1127 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494 -631
266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M1780 1127 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M3060 1127 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 249 -73 535 101 615 373 73 249 -101 535 -373 615 -78 23 -182 20 -261
-7z'
                />
                <path
                  d='M4340 1127 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 249 -73 535 101 615 373 73 249 -101 535 -373 615 -78 23 -182 20 -261
-7z'
                />
                <path
                  d='M5620 1127 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M6900 1127 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M8180 1127 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M9460 1127 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M10740 1127 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M12020 1127 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
}
