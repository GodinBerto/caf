import { Button } from "@/components/ui/button";
import ContactSection from "@/components/ui/contact";
import Features from "@/components/ui/features";
import LogoCarousel from "@/components/ui/logoSlider";
import { InfiniteMovingCards } from "@/components/ui/movingCards";
import TestimonialsSection from "@/components/ui/testimonial";
import { HeroString, IndustryLogos } from "@/constants/home";
import { ArrowDown, BadgeCheck, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div>
      <section className="h-[calc(100vh-40px)] flex md:mt-10 mt-20 flex-col overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4 md:gap-8 w-full">
          <div className="md:col-span-5 w-full p-6 md:p-16 gap-4 md:gap-8">
            <div>
              <h1 className="text-4xl md:text-8xl font-semibold">
                Trading Infrastructure. <br />
                <span className="text-blue-800">Built to Perfection</span>.
              </h1>
            </div>
            <div className="flex flex-wrap gap-x-8 md:gap-x-32 gap-y-3 mt-8">
              {HeroString.map((item, index) => (
                <p
                  key={index}
                  className="flex items-center gap-2 text-base md:text-xl"
                >
                  <BadgeCheck color="blue" />
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="md:col-span-2 w-full p-6 md:p-16 gap-4 md:gap-8 flex flex-col justify-between">
            <h1 className="text-lg md:text-2xl">
              Software development experts in trading infrastructure and
              business solutions.
            </h1>
            <button className="bg-black text-white p-3 rounded-md w-full md:w-auto">
              Explore
            </button>
          </div>
        </div>
        <div className="relative w-full mx-auto">
          <video
            src="/crypto.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[380px] md:h-auto object-cover"
          />

          {/* Black overlay with centered text + arrow */}
          <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-white">
            <div className="mt-32 md:flex flex-col items-center hidden">
              <h1 className="">Scroll Down</h1>
              <ArrowDown className="animate-bounce w-6 h-6 mt-4" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-50 overflow-hidden py-8 md:py-16">
        <div className="w-full flex flex-col items-center justify-center gap-8 text-white">
          <div>
            <LogoCarousel />
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 md:mb-10 sm:mb-16">
            <div className="pulse-chip mx-auto mb-2 md:mb-3 sm:mb-4 fade-in-element">
              <span>About us</span>
            </div>
            <h2 className="section-title mb-2 md:mb-3 sm:mb-4 fade-in-element leading-10 md:leading-13 text-2xl md:text-4xl">
              Shaping the Future with <br /> Purpose and Precision
            </h2>
            <p className="section-subtitle mx-auto fade-in-element text-base md:text-lg">
              As a Web Development Services we are Committed to Building Custom
              Web Solutions that Drive Business Success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={"/about/about.jpg"}
                alt="Professional team collaborating on web development projects in modern office environment"
                className="rounded-2xl shadow-medium w-full h-auto object-cover"
              />
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4 md:mb-6 text-base md:text-lg">
                  At{" "}
                  <span className="font-semibold">CAF Trading Solutions</span>,
                  we specialize in building powerful trading infrastructure and
                  business applications designed to help companies operate
                  efficiently and scale confidently. Our team of skilled
                  developers, system architects, and industry experts work
                  together to deliver reliable platforms, seamless integrations,
                  and innovative solutions tailored to each client’s unique
                  needs.
                </p>

                <p className="text-gray-600 leading-relaxed mb-6 md:mb-8 text-base md:text-lg">
                  Our mission is to empower businesses with technology that not
                  only keeps up with the fast-paced world of trading but also
                  positions them ahead of the curve. We are committed to
                  adopting the latest tools and best practices, ensuring every
                  solution we deliver is secure, scalable, and future-ready. At
                  CAF, we believe that technology should be a growth
                  engine—helping our clients connect, trade, and succeed in
                  today’s competitive markets.
                </p>
              </div>

              <div className="pt-2 md:pt-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-surface-elevated border-border-soft hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors duration-300 px-6 md:px-8 py-2 md:py-3 rounded-lg font-medium w-full md:w-auto"
                >
                  Get in touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-0">
        <Features />
      </section>

      <section className="px-4 md:px-0">
        <TestimonialsSection />
      </section>

      <section className="px-4 md:px-0">
        <ContactSection />
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-800 py-10 md:py-16 px-4 md:px-6 flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
          Ready to transform your trading infrastructure?
        </h2>
        <p className="text-base md:text-lg text-white mb-8 max-w-xl">
          Partner with CAF Trading Solutions and unlock the full potential of
          your business with our expert development team.
        </p>
        <Button
          size="lg"
          className="bg-white text-blue-800 font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-blue-50 transition-colors w-full md:w-auto"
        >
          Get Started
        </Button>
      </section>
    </div>
  );
}
