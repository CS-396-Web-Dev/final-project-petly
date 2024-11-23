import AOS from "aos";
import "aos/dist/aos.css";

export const initAOS = (options = {}) => {
  const defaultOptions = {
    offset: 120,
    delay: 0,
    duration: 400,
    easing: "ease",
    once: false,
    mirror: false,
    anchorPlacement: "top-bottom",
  };

  AOS.init({ ...defaultOptions, ...options });
};
