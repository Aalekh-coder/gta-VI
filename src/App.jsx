import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { useState } from "react";
import 'remixicon/fonts/remixicon.css'

const App = () => {
  const [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();


    tl.to(".vi-mask-group", {
      rotate: 10,
      ease: "Power4.easeInOut",
      duration: 2,
      transformOrigin: "50% 50%",
    })
      .to(".vi-mask-group", {
        scale: 10,
        duration: 2,
        delay: -1.8,
        ease: "Expo.inOut",
        transformOrigin: "50% 50%",
        opacity: 0,
        onUpdate: function () {
          if (this.progress() >= 0.9) {
            document.querySelector(".svg").remove();
            setShowContent(true);
            this.kill()
          }
        }
      })

  })

  useGSAP(() => {

    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut"

    });

    gsap.to(".sky", {
      scale: 1.2,
      rotate: 0,
      duration: 2,
      delay: "-0.8",
      ease: "Expo.easeInOut"

    })
    gsap.to(".bg", {
      scale: 1.2,
      rotate: 0,
      duration: 2,
      delay: "-0.8",
      ease: "Expo.easeInOut"

    })

    gsap.to(".character", {
      scale: 0.85,
      x: "-50%",
      bottom: "-60%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
      overflowY:"hidden"
    });

    gsap.to(".text", {
      scale: 1.2,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });



    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".imagesdiv .text", {
        x: `${-xMove * 0.4}%`
      });
      gsap.to(".sky", {
        x: xMove,
      });

      gsap.to(".bg", {
        x: xMove * 1.7,
      });

    })
  }, [showContent])

  return (<div style={{ fontFamily: "'Bebas Neue', cursive" }}>
    <div className="svg fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
      <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <mask id="viMask">
            <rect width="100%" height="100%" fill="black" />
            <g className="vi-mask-group">
              <text
                x="50%"
                y="50%"
                fontSize="250"
                textAnchor="middle"
                fill="white"
                dominantBaseline="middle"
                fontFamily="Arial Black"
              >
                VI
              </text>
            </g>
          </mask>
        </defs>
        <image
          href="./bg.png"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          mask="url(#viMask)"
        />
      </svg>
    </div>

    {
      showContent && <div className="main w-full rotate-[-10deg] scale-[1.7] overflow-hidden">
        <div className="landing w-full h-screen bg-black  relative">
          <div className="navbar absolute w-full py-10 px-10 z-[10] top-0 left-0  overflow-hidden">
            <div className="logo flex gap-7">
              <div className="lines flex flex-col gap-[5px]">
                <div className="line w-10 h-1 bg-white" />
                <div className="line w-8 h-1 bg-white" />
                <div className="line w-5 h-1 bg-white" />
              </div>
              <h2 className="text-2xl -mt-[8px] leading-none text-white">Rockstar</h2>
            </div>
          </div>


          <div className="imagesdiv w-full overflow-hidden h-screen relative">
            <img src="./sky.png" className=" scale-[1.7] sky rotate-[-20deg] absolute top-0 left-0 w-full h-full object-cover" />
            <img src="./bg.png" className="absolute scale-[1.5] rotate-[-3deg] bg top-0 left-0 w-full h-full object-cover" />
            <div className="text absolute top-10 flex flex-col gap-4 left-[45rem] -translate-x-1/2 text-white scale-[1.4] rotate-[-10deg]">
              <h1 className="text-[5.5rem] leading-none  -ml-20">Grand</h1>
              <h1 className="text-[5.5rem] leading-none  ml-65">theft</h1>
              <h1 className="text-[5.5rem] leading-none  -ml-27">auto</h1>
            </div>

            <img src="./girlbg.png" className="absolute character -bottom-[150%] left-1/2 -translate-x-1/2  scale-[3] rotate-[-20deg] overflow-hidden" />


          </div>

          <div className="btnbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
            <div className="flex gap-4 items-center">
              <i className="text-2xl ri-arrow-down-long-line"></i>
              <h3 className="text-xl" style={{ fontFamily: "'Share Tech', sans-serif" }}>Scroll Down</h3>
            </div>
            <img src="./ps5.png" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[60px]" />
          </div>
        </div>

        <div className="w-full h-screen flex items-center justify-center bg-black">
          <div className="cntnr flex text-white w-full h-[80%]">
            <div className="limg w-1/2 relative h-full">
              <img src="./imag.png" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " />
            </div>
            <div className="rg w-[40%]">
              <h1 className="text-8xl">Still Running</h1>
              <h1 className="text-6xl">Not Hunting</h1>
              <p className="mt-10" style={{ fontFamily: "'Sansation', sans-serif" }}>Experience the thrill of Grand Theft Auto 6, where action meets adventure. Explore dynamic cities, engage in epic missions, and immerse yourself in a world of limitless possibilities.</p>

              <p className="mt-3" style={{ fontFamily: "'Sansation', sans-serif" }}> Discover breathtaking landscapes, intense missions, and endless adventures in the world of GTA 6.</p>

              <button className="bg-yellow-500 px-10 py-5 text-black mt-10">Download Now</button>
            </div>
          </div>

        </div>
      </div>
    }
  </div>

  )
}

export default App