import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const animateWGSAP = (target, animationProps, scrollProps) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart reverse restart reverse",
      start: "top 85%",
      ...scrollProps,
    },
  });
};
export const animateWGSAPTimeline = (
  timeline,
  rotationRef,
  rotationState,
  firstT,
  secondT,
  animationProps,
) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: "power2.inOut",
  });
  timeline.to(firstT, { ...animationProps, ease: "power2.inOut" }, "<");
  timeline.to(secondT, { ...animationProps, ease: "power2.inOut" }, "<");
};
