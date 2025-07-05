import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React from "react";

export const Message = () => {

    useGSAP(() => {
        const firstSplit = SplitText.create(".first-message", {
          type: "words"
        }) 
        const secondSplit = SplitText.create(".second-message", {
          type: "words"
        }) 
        const messageSplit = SplitText.create(".message-content p", {
          type: "words, lines",
          linesClass: "paragraph-lines"
        }) 

        gsap.to(firstSplit.words, {
          color: "#faeade",
          ease: "power1.inOut",
          stagger: 1,
          scrollTrigger: {
            trigger: ".message-content",
            start: "top center",
            scrub: true,
            // markers: true,
            end: "25% center"
          }
        })
        
        gsap.to(secondSplit.words, {
          color: "#faeade",
          ease: "power1.inOut",
          stagger: 1,
          scrollTrigger: {
            trigger: ".message-content",
            start: "25% center",
            scrub: true,
            // markers: true,
            end: "top 5%"
          }
        })

        const fuelTl = gsap.timeline({
          delay: 1,
          scrollTrigger: {
            trigger: ".msg-text-scroll",
            start: "top 65%",
            end: "bottom 65%",
            scrub: 1,
            // markers: true
          }
        })

        fuelTl.to(".msg-text-scroll", {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.out"
        }) 

        const paragraphTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".message-content p",
            start: "top 80%",
            // markers: true
          }
        })

        paragraphTl.from(messageSplit.words, {
          yPercent: 300,
          rotate: 3,
          ease: "power1.inOut",
          duration: 1,
          stagger: 0.01
        })
    })


  return (
    <section className="message-content">
      <div className="container mx-auto flex-center py-28 relative">
        <div className="w-full h-full">
          <div className="msg-wrapper">
            <h1 className="first-message">Stir up your fearless past and </h1>
            <div
            style={{
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            }} 
            className="msg-text-scroll">
              <div className="bg-light-brown md:pb-5 pb-3 px-5">
                <h2 className="text-red-brown">Fuel Up</h2>
              </div>
            </div>

            <h1 className="second-message">
              your future with every gulp of Perfect Protein
            </h1>
          </div>

          <div className="flex-center md:mt-20 mt-10">
            <div className="max-w-md px-10 flex-center overflow-hidden">
                <p>
                    Rev up your rebel spirit and feed the adventure of life with 
                    SPYLT, where you're one chug away from epic nostalgia and fearless fun. 
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
