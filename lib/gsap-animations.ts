import gsap from "gsap"

export const animateOnScroll = (element: HTMLElement) => {
  if (!element) return

  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      end: "top 50%",
      scrub: false,
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
  })
}

export const animateStaggerCards = (container: HTMLElement) => {
  if (!container) return

  const cards = container.querySelectorAll("[data-animate-card]")
  gsap.to(cards, {
    scrollTrigger: {
      trigger: container,
      start: "top 80%",
      end: "top 20%",
    },
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "power3.out",
  })
}

export const animateFloatingElements = (element: HTMLElement) => {
  gsap.to(element, {
    y: -10,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  })
}

export const animateCounter = (element: HTMLElement, target: number, duration = 2) => {
  const obj = { value: 0 }
  gsap.to(obj, {
    value: target,
    duration,
    onUpdate: () => {
      if (element) {
        element.textContent = Math.floor(obj.value).toLocaleString()
      }
    },
    ease: "power2.out",
  })
}

export const pulseAnimation = (element: HTMLElement) => {
  gsap.to(element, {
    scale: 1.05,
    duration: 0.5,
    yoyo: true,
    repeat: 1,
    ease: "power2.out",
  })
}

export const shakeAnimation = (element: HTMLElement) => {
  gsap.to(element, {
    x: [-2, 2, -2, 2, 0],
    duration: 0.4,
    ease: "power2.inOut",
  })
}

export const revealText = (element: HTMLElement, staggerAmount = 0.05) => {
  const text = element.textContent
  element.textContent = ""

  const chars = text?.split("") || []
  const tl = gsap.timeline()

  chars.forEach((char) => {
    const span = document.createElement("span")
    span.textContent = char
    span.style.opacity = "0"
    element.appendChild(span)
  })

  tl.to(element.querySelectorAll("span"), {
    opacity: 1,
    duration: 0.05,
    stagger: staggerAmount,
    ease: "power2.out",
  })
}

export const parallaxEffect = (element: HTMLElement, speed = 0.5) => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      onUpdate: (self) => {
        gsap.to(element, {
          y: self.getVelocity() * speed,
          overwrite: "auto",
        })
      },
    },
  })
}
