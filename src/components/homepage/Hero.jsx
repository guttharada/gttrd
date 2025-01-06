
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import heroImg from "/src/assets/images/heroimg.webp";

export default function Hero() {
  const img = useRef(null);
  const imgContainer = useRef(null);
  const titles = useRef([]);
  const scrollLine = useRef(null);
  const scroll = useRef(null)
  const marqueeText = useRef(null);

  useEffect(() => {
    const marqueeWidth = marqueeText.current.offsetWidth; // ความกว้างของข้อความ
    const containerWidth = marqueeText.current.parentElement.offsetWidth; // ความกว้างของคอนเทนเนอร์

    // ใช้ GSAP เคลื่อนที่แบบ seamless
    gsap.to(marqueeText.current, {
      x: -marqueeWidth, 
      duration: 5,
      ease: "none", // ไม่มี easing
      repeat: -1, 
      // modifiers: {
      //   x: (x) => `${parseFloat(x) % marqueeWidth}px`, // ทำให้ seamless loop
      // },
    });
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.from(scrollLine.current, {
      translateX: -40,
      duration: 1.5,
      ease: "power4.inOut",
    });
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(imgContainer.current, {
      scale: 1.3,
      duration: 3.25,
      ease: "power3.inOut",
    })
      .from(
        img.current,
        { scale: 2, duration: 3.2, ease: "power4.inOut" },
        "-=3.1"
      )
      .to(titles.current, { y: 0, duration: 2, ease: "power4.inOut" }, "-=2.5")
      .from(scroll.current, {opacity: 0, duration: 1, ease:"out"}, "-=2")
  }, []);

  return (
    <section id="hero" className="hero relative flex w-full h-screen select-none items-center justify-center" aria-label="hero">
     <div className="marquee-container w-full overflow-hidden">
        <div
          ref={marqueeText}
         className="marquee-item whitespace-nowrap text-hero uppercase z-50 "
      >
          Gut Tharada &nbsp;&nbsp; | &nbsp;&nbsp; UX-UI Designer &nbsp;&nbsp; | &nbsp;&nbsp; Front-end developer &nbsp;&nbsp; 
          &nbsp;&nbsp; 
         
        </div>
    </div>
      {/* <div
        ref={imgContainer}
        className="absolute mx-auto  w-[55%] overflow-hidden rounded-md  "
      >
        <img
          ref={img}
          className=" scale-110 aspect-[11/16] sm:aspect-[5/6] md:aspect-[7/7] rounded-md opacity-50 lg:aspect-[11/9] w-full h-auto"
          src={heroImg}
          alt="Abstract cubic background image."
        />
      </div> */}
      <div ref={scroll} className="absolute bottom-12 right-0 flex flex-col items-center justify-center space-y-8">
        <span className=" rotate-90 text-body-3">scroll</span>
        <div className="relative h-1 w-10 rotate-90 overflow-hidden">
          <span
            ref={scrollLine}
            className="absolute h-[0.08em] w-10 translate-x-10 bg-accent-300"
          ></span>
        </div>
      </div>
    </section>
  );
}

