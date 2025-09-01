import { Facebook, Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold">CAF</h2>
          <p className="text-gray-600 mt-4 text-sm">
            CAF Trading Solutions builds high-performance trading infrastructure
            and custom business applications — empowering businesses to grow
            with speed, reliability, and innovation.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-gray-500">
            <Facebook className="w-5 h-5 hover:text-black cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-black cursor-pointer" />
            <Linkedin className="w-5 h-5 hover:text-black cursor-pointer" />
            <Github className="w-5 h-5 hover:text-black cursor-pointer" />
          </div>
        </div>

        {/* Product */}
        <div>
          <h3 className="font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Integrations</a>
            </li>
            <li>
              <a href="#">Changelog</a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="#">Documentation</a>
            </li>
            <li>
              <a href="#">Tutorials</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Partners</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 py-6 mt-6 text-sm text-gray-500 ">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 md:px-12">
          <p>
            © {new Date().getFullYear()} CAF Trading Solutions. All rights
            reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
