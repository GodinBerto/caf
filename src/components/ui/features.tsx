"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "feature-card glass-card p-4 sm:p-6",
        "lg:hover:bg-gradient-to-br lg:hover:from-white lg:hover:to-pulse-50",
        "transition-all duration-300"
      )}
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="rounded-full bg-pulse-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-pulse-500 mb-4 sm:mb-5">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base">{description}</p>
    </div>
  );
};

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in");
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      className="py-12 sm:py-16 md:py-20 pb-0 relative bg-gray-50"
      id="features"
      ref={sectionRef}
    >
      <div className="section-container">
        <div className="text-center mb-10 sm:mb-16">
          <div className="pulse-chip mx-auto mb-3 sm:mb-4 fade-in-element">
            <span>Services</span>
          </div>
          <h2 className="section-title mb-3 sm:mb-4 fade-in-element leading-13">
            Empowering Businesses, <br className="hidden sm:block" />
            One Solution at a Time
          </h2>
          <p className="section-subtitle mx-auto fade-in-element">
            Explore our range of professional services designed to help you
            grow, innovate, and succeed in a fast-changing world.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <FeatureCard
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="blue"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 sm:w-6 sm:h-6"
              >
                <path d="M3 12l2-2 4 4 8-8 4 4-12 12z"></path>
              </svg>
            }
            title="Custom Trading Platforms"
            description="We design and build reliable trading infrastructure software tailored to your unique business workflows."
            index={0}
          />
          <FeatureCard
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="blue"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 sm:w-6 sm:h-6"
              >
                <rect x="3" y="3" width="18" height="14" rx="2"></rect>
                <path d="M8 21h8"></path>
              </svg>
            }
            title="Business Applications"
            description="We develop enterprise-grade applications that streamline operations and drive efficiency across industries."
            index={1}
          />
          <FeatureCard
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="blue"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 sm:w-6 sm:h-6"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" x2="12" y1="15" y2="3"></line>
              </svg>
            }
            title="System Integration"
            description="Seamlessly connect trading platforms and third-party systems to create a unified digital ecosystem."
            index={2}
          />
          <FeatureCard
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="blue"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 sm:w-6 sm:h-6"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 6v6l4 2"></path>
              </svg>
            }
            title="Rapid Development"
            description="Our agile methods and high responsiveness ensure extremely short turnaround times for your projects."
            index={3}
          />
          <FeatureCard
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="blue"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 sm:w-6 sm:h-6"
              >
                <path d="M12 20l9-5-9-5-9 5 9 5z"></path>
                <path d="M12 12l9-5-9-5-9 5 9 5z"></path>
              </svg>
            }
            title="Scalable Solutions"
            description="We build robust software that grows with your business, handling complex trading needs effortlessly."
            index={4}
          />
          <FeatureCard
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="blue"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 sm:w-6 sm:h-6"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3h0a9 9 0 0 1 9.79 9.79z"></path>
              </svg>
            }
            title="Ongoing Support"
            description="We provide long-term maintenance, monitoring, and updates to keep your systems secure and optimized."
            index={5}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
