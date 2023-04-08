import React from 'react'
import Navbar from '../components/Navbar';
import mySvg from '../assets/blurry-gradient-haikei.svg';
import myImg from '../assets/bg_img.jpg';
import WaveSvg from '../assets/wave.svg';

export default function Home() {
  return (
    <>


      <div className="container p-8 mx-auto text-center ">
        <div className="text-area font-nun font-black text-[#3329e0]">
          <h2 className="text-3xl md:text-5xl my-14">
            A Fresh Coat of Paint, Without the Mess
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
            Visually create webpages and export to Html, React or Vue
          </h1>
          <p className="my-6">
            Create and edit beautiful designs and prototypes and export the code
            to use in your project right away.
          </p>
          <p className="">
            Windframe as a tailwind builder and editor makes it possible to
            visually create webpages and make edits to them in real time. This
            webpages can then be easily exported to different formats like
            <span className="font-bold">HTML, REACT OR VUE.</span>
          </p>
          <button className="bg-[#3329e0] shadow-lg text-white px-8 py-4 rounded-full mt-12 hover:bg-[#ccc9ff] ease-in transition-all duration-300 hover:text-[#3329e0]">
          Transform Your Home with Just a Click
          </button>
        </div>
        <img className="w-full md:w-1/2 my-6 md:my-0 border border-red-500" data-aos="fade-left"
          src="https://d33wubrfki0l68.cloudfront.net/4cec7c4fd345338b402158d5d6a717073e95a6d1/ec0f9/static/edit-content-5ac4e21e23781829b5fd741cdda90e12.png"
          alt="" />
      </div>



      <div className="container w-full mt-20 p-10 mx-auto">
        <div className="text text-center font-nun text-2xl md:text-4xl mb-10">
          <h1>How it works</h1>
        </div>
        <div className="box grid gap-3 w-fullc grid-cols-1 sm:grid-cols-2 justify-items-center lg:grid-cols-3">
          <div className="card text-center p-3 md:p-6 font-nun" data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <div className="img mb-12">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/2890a57d9e62a6b846d599617580e069c5f0a12f/d9a0c/static/first-step-59eb3eb212e332919543c02ec939ded9.png"
                alt="" />
            </div>
            <h2 className="my-4 text-xl font-medium">
              Build from scratch or select prebuilt tailwind templates
            </h2>
            <p className="text-md font-light p-5">
              Choose from a directory of 350+ tailwind css templates. These
              tailwind css blocks were professionally crafted to fit different
              needs ranging from landing, saas, portfolio, about us, contact us
              etc. and are constantly being updated with new website templates
            </p>
          </div>
          <div className="card text-center p-3 md:p-6 font-nun" data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <div className="img mb-12">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/c2e82d8575c1533514fe4e3e635a0e04326a360b/f1fa0/static/second-step-3328b46379b42647634e0f3175a6acc4.png"
                alt="" />
            </div>
            <h2 className="my-4 text-xl font-medium">
              Create or Customize the designs with numerous options
            </h2>
            <p className="text-md font-light p-5">
              Easily customize your selected tailwind css template or create your
              own design to fit your needs using our visual editor by either using
              tailwind css classes or the numerous edit options and features of
              the tailwind builder like cloning, undoing, deleting elments.
            </p>
          </div>
          <div className="card text-center p-3 md:p-6 font-nun" data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <div className="img mb-10">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/1f3af8c639846d239df57652df0cc14cacbfec4b/bb3a5/static/third-step-9c6d5dda0aabdaf5582da388a1c4a673.png"
                alt="" />
            </div>
            <h2 className="my-4 text-xl font-medium">
              Preview designs, save and export code
            </h2>
            <p className="text-md font-light p-5">
              Preview your designs in the tailwind builder to see how they render
              on a webpage and save them easily when you are done. You can come
              back when you wish to continue working on it or export the code from
              your designs to use elsewhere or host on your own server
            </p>
          </div>
        </div>
      </div>

      <div className="container w-full mx-auto p-8 text-center font-nun font-medium">
        <h2 className="text-2xl mb-3">Export code to:</h2>
        <ul className="grid grid-cols-2 gap-2 justify-items-center sm:grid-cols-3 xl:grid-cols-6 mt-12 mb-20 " data-aos="zoom-in-down">
          <li className="font-nun text-xl mb-4 mx-3 font-light flex flex-col">
            <img className="my-3 w-20" src="../src/images/icons/html-5.svg" alt="s" />HTML
          </li>
          <li className="font-nun text-xl mb-4 mx-3 font-light flex flex-col">
            <img className="my-3 w-20" src="../src/images/icons/react-native.svg" alt="s" />React
          </li>
          <li className="font-nun text-xl mb-4 mx-3 font-light flex flex-col">
            <img className="my-3 w-20" src="../src/images/icons/gatsbyjs.svg" alt="s" />Gatsby
          </li>
          <li className="font-nun text-xl mb-4 mx-3 font-light flex flex-col">
            <img className="my-3 w-20" src="../src/images/icons/vue-js.svg" alt="s" />Vue
            Js
          </li>
          <li className="font-nun text-xl mb-4 mx-3 font-light flex flex-col">
            <img className="my-3 w-20" src="../src/images/icons/nuxt-js.png" alt="s" />Nuxt Js
          </li>
          <li className="font-nun text-xl mb-4 mx-3 font-light flex flex-col">
            <img className="my-3 w-20" src="../src/images/icons/angularjs.svg" alt="s" />Angular
          </li>
        </ul>
      </div>
      <section className="bg-[#1A202C] py-16 pb-8">
        <div className="text text-center px-8 md:px-28">
          <h2 className="font-nun text-3xl md:text-6xl font-medium text-white">
            Visually design and Generate code for your frontend
          </h2>
          <button className="px-3 py-2 bg-green-600 hover:bg-green-700 rounded-md shadow-lg text-white text-md font-nun font-light mt-8">
            Start building for free
          </button>
        </div>
        <div className="p-12">
          <video className=""
            src="https://d33wubrfki0l68.cloudfront.net/3bc16990b655f1e010ea01d22b97bcf4dcc32964/f3f16/static/windframe-8ed8b799e6f4aee96fd251598d5ccece.mp4"
            muted loop autoplay></video>
        </div>
      </section>

      <section
        className="container flex flex-col-reverse md:flex-row justify-center items-center w-full my-12 mx-auto font-nun p-8">
        <img className="w-full md:w-1/2 my-6 md:my-0" data-aos="zoom-in-right"
          src="https://d33wubrfki0l68.cloudfront.net/3440b6f4c5f14a4d9fd73188abe0650fb48e3c3a/0ce39/static/adone-c515f91e68f94712b82e62360814b06b.png"
          alt="" />
        <div className="left w-full md:w-1/2 text-left md:text-left" data-aos="zoom-in-left">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#3329e0]">
            Create components, prototypes, websites and templates for projects 10x
            faster
          </h1>
          <p className="my-6">
            Easily create components or blocks that you can integrate with
            existing projects in seconds or create full websites and templates
            with very minimal effort and time
          </p>
          <button className="bg-[#3329e0] hover:bg-[#ccc9ff] ease-in transition-all duration-300 hover:text-[#3329e0] shadow-lg text-white px-8 py-4 rounded-full mt-4">
            Create a website
          </button>
        </div>
      </section>
      <section
        className="container flex flex-col-reverse md:flex-row justify-center items-center w-full my-12 mx-auto font-nun p-8" data-aos="zoom-in-up">
        <div className="left w-full md:w-1/2 text-left md:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#3329e0]">
            Save countless hours of coding and designing using our intuitive 350+
            templates
          </h1>
          <p className="my-6">
            Windframe features a large collection of beautiful already built
            templates made with tailwind css which are regularly updated with new
            templates.
          </p>
          <p className="my-6">
            You can easily edit these templates in the tailwind builder / editor
            to create any type of webpage and save countless hours redesigning
            from scratch
          </p>
        </div>
        <img className="w-full md:w-1/2 my-6 md:my-0"
          src="https://d33wubrfki0l68.cloudfront.net/d29c8fa1308b7d43c3d2442ec4b2368e2c15e21d/df214/static/awindframe31-55fd67cc4a4a0c0da2e6dcb924864755.png"
          alt="" />
      </section>
      <section
        className="container flex flex-col-reverse md:flex-row justify-center items-center w-full my-12 mx-auto font-nun p-8">
        <img className="w-full md:w-1/2 my-6 md:my-0" data-aos="zoom-in-right"
          src="https://d33wubrfki0l68.cloudfront.net/19abff473651bcdc6c8816417e25e85d8a422919/7d3c2/static/ateam-849d02d29daff50ad627f56dd22a6d32.png"
          alt="" />
        <div className="left w-full md:w-1/2 text-left md:text-left" data-aos="zoom-in-left">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#3329e0]">
            Collaborate with other team members and get better feedback on designs
            and code
          </h1>
          <p className="my-6">
            Add team members to a project and get feedback on the designs,
            prototypes or code you are working on. Easily allow team members to
            make edits and corrections to projects
          </p>
          <button className="bg-[#3329e0] hover:bg-[#ccc9ff] ease-in transition-all duration-300 hover:text-[#3329e0] shadow-lg text-white px-8 py-4 rounded-full mt-4">
            Start collaborating
          </button>
        </div>
      </section>
      <section className="bg-[#1A202C] py-16 pb-8 text-white">
        <div className="text text-center px-8 md:px-28">
          <h2 className="font-nun text-3xl md:text-4xl font-medium text-white">
            Create the perfect webpage you visualized in 2 minutes.
          </h2>
          <p className="my-6">
            Get projects to production faster than ever thought possible with very
            minimal effort.
          </p>
        </div>
        <div className="p-12">
          <img
            src="https://d33wubrfki0l68.cloudfront.net/ed50ad54844a48f3e30cb1f935ab074191310ca7/a291e/static/edit-321f194f30bb4468ee495fe4b35bfc22.gif"
            alt="" />
        </div>
      </section>


      <section className="w-full p-8 pt-10">
        <ul className="font-nun grid grid-cols-2 gap-8 md:grid-cols-4">
          <li className="text-center flex flex-col md:border-r md:border-gray-400">
            <span className="text-6xl my-4 font-black text-[#3329e0]">8K+</span>DESGINS EXPORTED
          </li>
          <li className="text-center flex flex-col md:border-r md:border-gray-400">
            <span className="text-6xl my-4 font-black text-[#3329e0]">1K+</span>SAVED
            PROJECTS
          </li>
          <li className="text-center flex flex-col md:border-r md:border-gray-400">
            <span className="text-6xl my-4 font-black text-[#3329e0]">2K+</span>USERS
          </li>
          <li className="text-center flex flex-col">
            <span className="text-6xl my-4 font-black text-[#3329e0]">350+</span>TEMPLATES
          </li>
        </ul>
      </section>

      <section className="bg-[#1A202C] py-16 pb-8 text-white">
        <div className="text text-center px-8 md:px-28">
          <p className="mt-6 mb-2">
            Create beautiful websites, prototypes and designs using an awesome
            editor and builder
          </p>
          <h2 className="font-nun text-4xl font-medium text-white mb-6">
            Start visually creating webpages using windframe
          </h2>
          <button className="bg-[#3329e0] hover:bg-[#ccc9ff] ease-in transition-all duration-300 hover:text-[#3329e0] shadow-lg text-white px-8 py-4 rounded-full mt-4 mb-16">
            Start creating for you
          </button>
        </div>
      </section>


      <section className="fotter p-3 md:p-8 mt-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full my-3">
          <div className="news font-nun">
            <h3 className="text-xl md:text-3xl font-medium">
              Subscribe to our Newsletter
            </h3>
            <p className="text-sm md:text-md my-4 ">
              Get notified first when we release new updates, tools and resources
            </p>
            <div className="my-4 w-full flex flex-row">
              <input className="rounded-md border py-2 px-8 w-full border-gray-500" type="email" name="" id="" />
              <button
                className="bg-[#ccc9ff] shadow-md rounded-md text-[#3329e0] py-2 px-6 mx-2 cursor-pointer hover:bg-blue-700 hover:text-white ease-in transition-all duration-300"
                type="submit">
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center mx-auto md:mx-0 justify-between w-full p-4 ">
          <div className="dev font-nun w-full md:w-1/2 mt-12 md:mt-0">
            <div className="flex flex-row items-center justify-start">
              <div className="logo w-10 mr-5">
                <img
                  src="data:image/png;base64,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"
                  alt="" />
              </div>
              <h1 className="font-black text-2xl">Devwares</h1>
            </div>
            <p className="font-medium text-md my-4 text-left">
              We Are Creating High Quality Resources And Tools To Aid Developers
              During The Development Of Their Projects
            </p>
            <p className="text-sm font-extralight text-left">
              @sm8uti 2022 All rights Reserved
            </p>
          </div>
          <div className="help-legal my-2 md:my-8 flex flex-row justify-between w-full xl:w-1/2 mx-auto  p-2 md:p-10 md:pr-2 mt-12">
            <div className="mr-4 md:mr-8">
              <h2 className="font-bold my-3">Devwares</h2>
              <ul>
                <li className="my-4 hover:text-blue-700 transition-all ease-in duration-300">
                  <a href="#">Resources</a>
                </li>
                <li className="my-4 hover:text-blue-700 transition-all ease-in duration-300">
                  <a href="#">Contact us</a>
                </li>
                <li className="my-4 hover:text-blue-700 transition-all ease-in duration-300">
                  <a href="#">Blog</a>
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
