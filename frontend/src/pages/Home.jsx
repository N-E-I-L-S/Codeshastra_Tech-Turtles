import React from 'react'
import Navbar from '../components/Navbar';
import mySvg from '../assets/blurry-gradient-haikei.svg';
import myImg from '../assets/bg_img.jpg';
import WaveSvg from '../assets/wave.svg';
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
import img7 from '../assets/img7.jpg'
import img8 from '../assets/img8.jpg'
import img9 from '../assets/img9.jpg'
import img10 from '../assets/img10.jpg'
import bgimg from '../assets/bg.svg'
import vid1 from '../assets/hame_page_vid.mp4'
import vid2 from '../assets/screen_capture.webm'
import Three1 from './Three1';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>


      <div className="container p-8 mx-auto text-center ">
        <div className="text-area font-nun font-black text-[#3329e0]">
          <h2 className="text-3xl md:text-5xl pb-5">
            Unleash Your Creativity and See Your Vision Come to Life
          </h2>
          <div className="mx-1 p-0 lg:mx-14 py-0 md:px-14 mb:py-2">
            <p className="text-md md:text-xl text-gray-800 font-light mx-auto">
              Our innovative system allows homeowners to visualize how their homes would look with a new coat of paint, without actually having to lift a brush or make a mess. With just a few clicks, you can customize your home to reflect your personal style, all while avoiding the traditional mess and stress of painting.
            </p>
          </div>
        </div>



      </div>

      <div
        className="container flex flex-col-reverse md:flex-row justify-center items-center w-full my-12 mx-auto font-nun p-8">
        <div className="left w-full md:w-1/2 text-center md:text-left" data-aos="fade-right">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#3329e0]">
            Tired of going through countless colors to match your vibe ?
          </h1>
          <p className="my-6">
            Try out and experiment with different colors and styles to see how they look on your home, without even lifting the brush.
            Just upload a picture of your room and give us your favourite color,  our AI powered system will do the rest.

          </p>
          <Link to={"./upload"} className="bg-[#3329e0] hover:bg-[#ccc9ff] ease-in transition-all duration-300 hover:text-[#3329e0] shadow-lg text-white px-8 py-4 rounded-full mt-4">
            Give me some shades !
          </Link>


        </div>
        <div>

          <video src={vid1} width="600" height="300" controls="controls" autoplay="true" loop="true" muted="true" className='rounded-lg' />
        </div>

      </div>


      <section
        className="container flex flex-col-reverse md:flex-row justify-center items-center w-full my-20 mx-auto font-nun p-8">
        <div className=''>
          <div className='grid grid-cols-2 gap-5 mr-10 '>
            <img src={img1} alt="" className="w-60  rounded-lg" />
            <img src={img5} alt="" className="w-60  rounded-lg" />

          </div>
        </div>
        <div className="left w-full md:w-1/2 text-left md:text-left" data-aos="zoom-in-left">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#3329e0]">
            Confused about what color to choose for your home ? <br /> We got you covered !
          </h1>
          <p className="my-6">
            Easily find the perfect color for your home with our AI powered color recommending system. Get the most accurate color recommendations for your home based on the furniture and other objects in your room.
          </p>
          <Link to={"./recommend"} className="bg-[#3329e0] shadow-lg text-white px-8 py-4 rounded-full mt-12 hover:bg-[#ccc9ff] ease-in transition-all duration-300 hover:text-[#3329e0]">
            Let's go !
          </Link>
        </div>
      </section>

      <section
        className="container flex flex-col-reverse md:flex-row justify-center items-center w-full my-12 mx-auto font-nun p-8" data-aos="zoom-in-up">
        <div className="left w-full md:w-1/2 text-left md:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#3329e0]">
            Save countless hours of decorating your home with VR
          </h1>
          <p className="my-6">
            Smart Decor features a wide range of home decor products that you can easily add to your home.
            It provides you with a 3d model of your own room with the products you choose. So you can renovate your house without even getting up from your seat.
          </p>
          <p className="my-6">
            You can easily edit these furniture models and add them to your room. You can also change the color of the furniture to match your room. And with out AI powered color recommendation system, you can easily find the perfect color for your furniture.
          </p>
          <Link to={"./virtualhouse"} className="bg-[#3329e0] shadow-lg text-white px-8 py-4 rounded-full mt-12 hover:bg-[#ccc9ff] ease-in transition-all duration-300 hover:text-[#3329e0]">
            Let's go !
          </Link>
        </div>
        <div>

          <video src={vid2} width="600" height="300" controls="controls" autoplay="true" loop="true" muted="true" className='rounded-lg' />
        </div>

      </section>



      {/* <div className='w-screen border border-red-800 h-screen'>
          <Three1 />
        </div> */}

      <section
        className="container flex flex-col-reverse md:flex-row justify-center items-center w-full my-20 mx-auto font-nun p-8">
        <div className=''>
          <div className='grid grid-cols-2 gap-5 mr-10 '>
            <img src={img1} alt="" className="w-60  rounded-lg" />
            <img src={img5} alt="" className="w-60  rounded-lg" />
            <img src={img6} alt="" className="w-60  rounded-lg" />
            <img src={img4} alt="" className="w-60  rounded-lg" />
          </div>
        </div>
        <div className="left w-full md:w-1/2 text-left md:text-left" data-aos="zoom-in-left">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#3329e0]">
            Want to take your creativity to the next level ?
          </h1>
          <p className="my-6">
            Just tell us what your dream room will look like and our AI will give you the most accurate visualisation of you imagination.
            <span>Imagination is the only limit !</span>
          </p>
          <Link to={"./visualize"} className="bg-[#3329e0] hover:bg-[#ccc9ff] ease-in transition-all duration-300 hover:text-[#3329e0] shadow-lg text-white px-8 py-4 rounded-full mt-4">
            Hell Yes !
          </Link>
        </div>
      </section>


      <section
        className="container flex flex-col-reverse md:flex-row justify-center items-center w-full my-12 mx-auto font-nun p-8">
        <img className="w-full md:w-1/2 my-6  m-10" data-aos="zoom-in-right"
          src="https://d33wubrfki0l68.cloudfront.net/19abff473651bcdc6c8816417e25e85d8a422919/7d3c2/static/ateam-849d02d29daff50ad627f56dd22a6d32.png"
          alt="" />
        <div className="left w-full md:w-1/2 text-left md:text-left mr-10" data-aos="zoom-in-left">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#3329e0]">
            Share your creativity with the world !.
          </h1>
          <p className="my-6">
            Add your friends in your network and see what colors they vibe with in their rooms and get inspired.
          </p>
          <Link to={"./inspire"} className="bg-[#3329e0] hover:bg-[#ccc9ff] ease-in transition-all duration-300 hover:text-[#3329e0] shadow-lg text-white px-8 py-4 rounded-full mt-6">
            Inspire Me !
          </Link>
        </div>
      </section>


      <section id='contact' className="fotter p-3 md:p-8 mt-6">

        <div className="flex flex-col md:flex-row items-center mx-auto md:mx-0 justify-between w-full p-4 ">
          <div className="dev font-nun w-full md:w-1/2 mt-12 md:mt-0">
            <div className="flex flex-row items-center justify-start">
              <div className="logo w-10 mr-5">
                <img
                  src="data:image/png;base64,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"
                  alt="" />
              </div>
              <h1 className="font-black text-2xl">Smart Decor</h1>
            </div>
            <p className="font-medium text-md my-4 text-left">
              We are making your paint and home decor problems go away, using our very own AI.
            </p>
            <p className="text-sm font-extralight text-left">
              @sm8uti 2022 All rights Reserved
            </p>
          </div>
          <div className="help-legal my-2 md:my-8 flex flex-row justify-between w-full xl:w-1/2 mx-auto  p-2 md:p-10 md:pr-2 mt-12">
            <div className="mr-4 md:mr-8">
              <h2 className="font-bold my-3">Contact us</h2>
              <ul>

                
                <li className="my-4 hover:text-blue-700 transition-all ease-in duration-300">
                  <a href="mailto:shantanuesakpal1420@gmail.com">Shantanu Sakpal</a>
                </li>
                <li className="my-4 hover:text-blue-700 transition-all ease-in duration-300">
                  <a href="mailto:someone@example.com">Stavan Shah</a>
                </li>
                <li className="my-4 hover:text-blue-700 transition-all ease-in duration-300">
                  <a href="mailto:someone@example.com">Neil Shukla</a>
                </li>
                <li className="my-4 hover:text-blue-700 transition-all ease-in duration-300">
                  <a href="mailto:someone@example.com">Atharva Salian</a>
                </li>

              </ul>
            </div>
            <div className="mr-4 md:mr-8">
              <h2 className="font-bold my-3">Help</h2>
              <ul>
                <li className="my-4 hover:text-blue-700 transition-all ease-in duration-300">
                  <a href="#">Support</a>
                </li>
                <li className="my-4 hover:text-blue-700 transition-all ease-in duration-300">
                  <a href="#">Sign up</a>
                </li>
                <li className="my-4 hover:text-blue-700 transition-all ease-in duration-300">
                  <a href="#">Sign in</a>
                </li>
              </ul>
            </div>
            <div className="mr-4 md:mr-8">
              <h2 className="font-bold my-3">Legal</h2>
              <ul>
                <li className="my-4 hover:text-blue-700 transition-all ease-in duration-300">
                  <a href="#">Privacy and Security</a>
                </li>
                <li className="my-4 hover:text-blue-700 transition-all ease-in duration-300">
                  <a href="#">Terms and Service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="social font-nun w-full  text-center mb-12">
          <h1 className="font-bold my-3 text-xl">Social media</h1>
          <ul className="flex flex-row items-center justify-center mt-6">
            <li className="mx-8">
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                  className="bi bi-facebook text-gray-600 hover:text-[#3329e0] transition-all ease-in duration-300"
                  viewBox="0 0 16 16">
                  <path
                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
            </li>
            <li className="mx-8">
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                  className="bi bi-twitter text-gray-600 hover:text-[#3329e0] transition-all ease-in duration-300"
                  viewBox="0 0 16 16">
                  <path
                    d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
            </li>
            <li className="mx-8">
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                  className="bi bi-instagram text-gray-600 hover:text-[#3329e0] transition-all ease-in duration-300"
                  viewBox="0 0 16 16">
                  <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </section>



    </>
  )
}
