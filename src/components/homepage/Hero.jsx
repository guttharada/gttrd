import { gsap } from "gsap";
import { useRef, useEffect } from "react";

export default function Hero() {
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

  return (
    <section
      id="hero"
      className="hero relative flex w-full h-screen select-none items-center justify-center overflow-hidden "
      aria-label="hero"
    >
      <div className="marquee-container w-full overflow-hidden">
        <div
          ref={marqueeText}
          className="marquee-item whitespace-nowrap text-hero uppercase "
        >
          Gut Tharada &nbsp;&nbsp; | &nbsp;&nbsp; UX-UI Designer &nbsp;&nbsp; | &nbsp;&nbsp; Front-end developer &nbsp;&nbsp; 
          &nbsp;&nbsp; 
         
        </div>
      </div>
    </section>
  );
}
