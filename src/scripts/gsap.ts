import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let pluginsRegistered = false;

/** Enregistre les plugins une seule fois et uniquement dans le navigateur. */
export function registerGsap(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  if (!pluginsRegistered) {
    const scrollTriggerAlreadyRegistered = Object.prototype.hasOwnProperty.call(
      gsap.plugins,
      "ScrollTrigger",
    );

    if (!scrollTriggerAlreadyRegistered) {
      gsap.registerPlugin(ScrollTrigger);
    }

    pluginsRegistered = true;

    // Les images différées et la police locale peuvent déplacer les repères de scroll.
    let refreshFrame = 0;
    const refreshLayout = () => {
      cancelAnimationFrame(refreshFrame);
      refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());
    };
    document.fonts.ready.then(refreshLayout);
    document.addEventListener("load", (event) => {
      if (event.target instanceof HTMLImageElement) refreshLayout();
    }, true);
  }

  return true;
}

export function getGsap() {
  registerGsap();

  return { gsap, ScrollTrigger };
}

export { gsap, ScrollTrigger };
