import { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";
import { animate } from "framer-motion";

interface ScrollLinkProps {
  href: string;
  children: ReactNode;
}

const ScrollLink: React.FC<ScrollLinkProps> = ({ href, children }) => {
  const pathname = usePathname();

  useEffect(() => {
    const handleHashChange = () => {
      const elementId = href.split("#")[1];
      const element = document.getElementById(elementId);

      if (element) {
        animateScrollToElement(element);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("hashchange", handleHashChange);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("hashchange", handleHashChange);
      }
    };
  }, [href, pathname]);

  const animateScrollToElement = (element: HTMLElement) => {
    const isMobile = () => {
      return window.innerWidth <= 768;
    };

    const yOffset = isMobile() ? -190 : -80;
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

    animate(window.scrollY, y, {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (value) => window.scrollTo(0, value),
    });
  };

  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        const elementId = href.split("#")[1];
        const element = document.getElementById(elementId);
        if (element) {
          animateScrollToElement(element);
          window.history.pushState(null, "", href);
        }
      }}
    >
      {children}
    </a>
  );
};

export default ScrollLink;
