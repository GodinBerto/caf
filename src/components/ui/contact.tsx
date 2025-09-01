"use client";

import React from "react";
import { Mail, Phone, Clock, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="text-center mb-10 sm:mb-16">
        <div className="pulse-chip mx-auto mb-3 sm:mb-4 fade-in-element">
          <span>Contact Us</span>
        </div>
        <h2 className="section-title mb-3 sm:mb-4 fade-in-element leading-13">
          Let’s Build Something <br /> Great Together
        </h2>
        <p className="section-subtitle mx-auto fade-in-element max-w-2xl">
          Have a project in mind or just want to say hello? <br />
          Reach out today and our team will get back to you shortly.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl border-gray-400">
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full rounded-lg px-4 py-3 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                className="w-full rounded-lg px-4 py-3 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="We'll get back to you here"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Company Name
              </label>
              <input
                type="text"
                className="w-full rounded-lg px-4 py-3 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Let us know who you represent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Subject</label>
              <input
                type="text"
                className="w-full rounded-lg px-4 py-3 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                className="w-full rounded-lg px-4 py-3 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
                rows={4}
                placeholder="Tell us how we can help"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-800 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info & Map */}
        <div className="flex flex-col gap-8 justify-between">
          <div>
            <h4 className="text-xl font-semibold mb-4 text-gray-900">
              Prefer a Direct Approach?
            </h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-800" />
                <span>+62-8234-5674-8901</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-800" />
                <span>contact@landingxplay.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-800" />
                <span>Mon - Fri, 9 AM - 6 PM (GMT)</span>
              </li>
            </ul>
          </div>
          <div>
            <div className="rounded-lg overflow-hidden shadow mb-4">
              <iframe
                src="https://maps.google.com/maps?q=Innovation%20City&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="220"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
                title="Office Location"
              />
            </div>
            <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-800 mt-1" />
                <div>
                  <div className="font-semibold mb-1">Visit Our Office</div>
                  <div className="text-gray-700 mb-3">
                    123 SaaS Street, Innovation City, Techland 56789
                  </div>
                  <a
                    href="https://maps.google.com/?q=123+SaaS+Street,+Innovation+City,+Techland+56789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-800 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
