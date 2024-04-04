import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { animateWGSAP } from "../utils/animations";
import { explore1Img, explore2Img, exploreVideo } from "../utils";
import gsap from "gsap";

const Features = () => {
  const videoRef = useRef();
  useGSAP(() => {
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });

    animateWGSAP("#features_title", { y: 0, opacity: 1 });
    animateWGSAP(
      ".g_grow",
      { scale: 1, opacity: 1, ease: "power1" },
      { scrub: 5.5 },
    );
    animateWGSAP(".g_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);
  return (
    <section className="common-padding relative h-full overflow-hidden bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">
            Read the full story.
          </h1>
        </div>
        <div className="felx-col flex items-center justify-center overflow-hidden">
          <div className="mb-24 mt-32 pl-24">
            <h2 className="text-5xl font-semibold lg:text-7xl">iPhone.</h2>
            <h2 className="text-5xl font-semibold lg:text-7xl">
              Forged in Titanium.
            </h2>
          </div>
          <div className="flex-center flex-col sm:px-10">
            <div className="relative flex h-[50vh] w-full items-center">
              <video
                playsInline
                id="exploreVideo"
                className="h-full w-full object-cover"
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>
            <div className="relative flex w-full flex-col">
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={explore1Img}
                    alt="titanium"
                    className="feature-video g_grow"
                  />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={explore2Img}
                    alt="titanium 2"
                    className="feature-text g_text"
                  />
                </div>
              </div>
              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    IPhone 15 Pro is{" "}
                    <span className="text-white">
                      the first IPhone to feature the aerospace-grade titanium
                    </span>
                    using the same alloy that is sent to space.
                  </p>
                </div>
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    Titanium has the best strength to weight ratio of any metal,
                    making these our{" "}
                    <span className="text-white">
                      lightest Pro models ever.
                    </span>
                    You will notice the differnce the moment you pick it up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
