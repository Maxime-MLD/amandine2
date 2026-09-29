import { initMotion } from "./motion";

function existingElements<T extends Element>(
  elements: Array<T | null>,
): T[] {
  return elements.filter((element): element is T => element !== null);
}

export function initLandingMotion(): void {
  const main = document.querySelector<HTMLElement>("#main-content");
  if (!main) return;

  const isWaitingBelowViewport = (element: Element): boolean =>
    element.getBoundingClientRect().top >= window.innerHeight;

  initMotion(
    "landing-accompaniment",
    ({ gsap, conditions }) => {
      const hero = main.querySelector<HTMLElement>("#hero");
      if (hero) {
        const copy = hero.querySelector<HTMLElement>(".hero-copy");
        const badge = hero.querySelector<HTMLElement>(".hero-badge");
        const lines = Array.from(hero.querySelectorAll<HTMLElement>(".hero-line"));
        const secondaryItems = existingElements<HTMLElement>([
          hero.querySelector<HTMLElement>(".hero-description"),
          hero.querySelector<HTMLElement>(".hero-copy .btn-primary"),
          copy?.querySelector<HTMLElement>(":scope > p:last-child") ?? null,
        ]);
        const portrait = hero.querySelector<HTMLElement>(".hero-portrait");

        if (
          badge &&
          lines.length === 3 &&
          secondaryItems.length === 3 &&
          !hero.hasAttribute("data-hero-fallback")
        ) {
          // Le relais CSS → GSAP reste synchrone afin d'éviter une frame visible intermédiaire.
          hero.removeAttribute("data-hero-pending");
          gsap.set(badge, { autoAlpha: 0, y: 8 });
          gsap.set(lines, { yPercent: conditions.mobile ? 105 : 110 });
          gsap.set(secondaryItems, {
            autoAlpha: 0,
            y: conditions.mobile ? 8 : 12,
          });
          if (portrait) {
            gsap.set(portrait, {
              autoAlpha: 0,
              y: conditions.mobile ? 10 : 15,
              scale: 0.985,
            });
          }

          const heroTimeline = gsap.timeline({
            onComplete: () => {
              gsap.set(badge, { clearProps: "opacity,visibility,transform" });
              gsap.set(lines, { clearProps: "transform" });
              gsap.set(secondaryItems, { clearProps: "opacity,visibility,transform" });
              if (portrait) gsap.set(portrait, { clearProps: "opacity,visibility,transform" });
            },
          });

          heroTimeline
            .to(badge, { autoAlpha: 1, y: 0, duration: 0.45, ease: "power2.out" }, 0)
            .to(lines, {
              yPercent: 0,
              duration: conditions.mobile ? 0.82 : 0.9,
              stagger: 0.1,
              ease: "power3.out",
            }, 0.12)
            .to(secondaryItems, {
              autoAlpha: 1,
              y: 0,
              duration: conditions.mobile ? 0.5 : 0.55,
              stagger: 0.08,
              ease: "power2.out",
            }, 0.45);

          if (portrait) {
            heroTimeline.to(portrait, {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: conditions.mobile ? 0.82 : 0.9,
              ease: "power3.out",
            }, 0.32);
          }
        }
      }

      const revealContent = (
        targets: HTMLElement[],
        trigger: HTMLElement,
        id: string,
        stagger = 0,
        verticalOffset?: number,
      ): void => {
        if (targets.length === 0) return;

        // Une ancre ou une position restaurée ne doit jamais masquer un contenu
        // déjà visible ou situé au-dessus du viewport.
        if (!isWaitingBelowViewport(trigger)) return;

        const revealY = verticalOffset ?? (conditions.mobile ? 16 : 24);

        gsap.set(targets, {
          autoAlpha: 0,
          y: revealY,
        });

        gsap.to(targets, {
          autoAlpha: 1,
          y: 0,
          duration: conditions.mobile ? 0.58 : 0.7,
          ease: "power3.out",
          stagger,
          clearProps: "opacity,visibility,transform",
          scrollTrigger: {
            id: `reveal-${id}`,
            trigger,
            start: conditions.mobile ? "top 90%" : "top 88%",
            once: true,
            invalidateOnRefresh: true,
          },
        });
      };

      const about = main.querySelector<HTMLElement>("#about");
      const aboutContent = about
        ? Array.from(about.querySelectorAll<HTMLElement>('[data-reveal="about"]'))
        : [];
      if (about) {
        revealContent(aboutContent, about, "about");
      }

      const interventionArea = main.querySelector<HTMLElement>("#zone-intervention");
      const interventionContent = interventionArea
        ? Array.from(interventionArea.querySelectorAll<HTMLElement>('[data-reveal="intervention-area"]'))
        : [];
      if (interventionArea) {
        revealContent(interventionContent, interventionArea, "intervention-area", 0, 0);
      }

      const faq = main.querySelector<HTMLElement>("#faq");
      const faqContent = faq
        ? Array.from(faq.querySelectorAll<HTMLElement>('[data-reveal="faq"]'))
        : [];
      if (faq) revealContent(faqContent, faq, "faq", 0.08);

      const finalCta = main.querySelector<HTMLElement>(".final-cta");
      const ctaContent = finalCta
        ? Array.from(finalCta.querySelectorAll<HTMLElement>('[data-reveal="final-cta"]'))
        : [];
      if (finalCta) revealContent(ctaContent, finalCta, "final-cta");

      const contact = main.querySelector<HTMLElement>("#contact");
      const contactContent = contact
        ? Array.from(contact.querySelectorAll<HTMLElement>('[data-reveal="contact"]'))
        : [];
      if (contact) {
        revealContent(contactContent, contact, "contact", 0.08);
      }
    },
    { scope: main },
  );
}
