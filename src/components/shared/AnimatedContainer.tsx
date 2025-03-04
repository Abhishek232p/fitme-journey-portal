
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type AnimatedContainerProps = {
  children: React.ReactNode;
  animation?: 
    | "fade-in" 
    | "slide-in" 
    | "scale-in" 
    | "none";
  delay?: number;
  className?: string;
  once?: boolean;
};

const AnimatedContainer = ({
  children,
  animation = "fade-in",
  delay = 0,
  className,
  once = true,
}: AnimatedContainerProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && containerRef.current) {
            observer.unobserve(containerRef.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [once]);

  const animationClass = animation === "none" ? "" : `animate-${animation}`;

  return (
    <div
      ref={containerRef}
      className={cn(
        isVisible ? animationClass : "opacity-0",
        delay > 0 && `delay-${delay}`,
        className
      )}
      style={{ 
        animationDelay: delay > 0 ? `${delay}ms` : undefined, 
        animationFillMode: "forwards" 
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedContainer;
