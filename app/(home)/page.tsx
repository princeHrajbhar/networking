'use client'
import React, { useState, useEffect, useRef } from 'react';
import Hero1 from "@/Components/hero1";
import Hero2 from "@/Components/hero2";
import Hero3 from '@/Components/hero3';
import Hero4 from '@/Components/hero4';

// Helper function to add animation classes when section is in view
const useAnimationOnScroll = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }
    );

    // Store the current value of sectionRef to avoid stale ref in cleanup
    const currentSectionRef = sectionRef.current;
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  return { isVisible, sectionRef };
};

// Main Page Component
const Page = () => {
  const { isVisible: isVisibleHero1, sectionRef: sectionRefHero1 } = useAnimationOnScroll();
  const { isVisible: isVisibleHero2, sectionRef: sectionRefHero2 } = useAnimationOnScroll();
  const { isVisible: isVisibleHero3, sectionRef: sectionRefHero3 } = useAnimationOnScroll();
  const { isVisible: isVisibleHero4, sectionRef: sectionRefHero4 } = useAnimationOnScroll();

  return (
    <div>
      {/* Hero Section 1 */}
      <section
        ref={sectionRefHero1}
        className={`transition-all duration-1000 ease-in-out ${isVisibleHero1 ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}
      >
        <Hero1 />
      </section>

      {/* Hero Section 2 */}
      <section
        ref={sectionRefHero2}
        className={`transition-all duration-1000 ease-in-out ${isVisibleHero2 ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}
      >
        <Hero2 />
      </section>

      {/* Hero Section 3 */}
      <section
        ref={sectionRefHero3}
        className={`transition-all duration-1000 ease-in-out ${isVisibleHero3 ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}
      >
        <Hero3 />
      </section>

      {/* Hero Section 4 */}
      <section
        ref={sectionRefHero4}
        className={`transition-all duration-1000 ease-in-out ${isVisibleHero4 ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}
      >
        <Hero4 />
      </section>
    </div>
  );
};

export default Page;
