import React from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="container mx-auto pt-10 md:pt-20 text-white/70 text-base">
      <div className="footer grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
        <aside>
          <a className="text-3xl font-extrabold">DigiTools</a>
          <p className="mt-2 leading-6">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Product</h6>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Templates</a>
          <a className="link link-hover">Integrations</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Press</a>
        </nav>
        <nav>
          <h6 className="footer-title">Resources</h6>
          <a className="link link-hover">Documentation</a>
          <a className="link link-hover">Help Center</a>
          <a className="link link-hover">Community</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social Links</h6>
          <ul className="grid grid-flow-col gap-4">
            <li className="bg-gray-100 hover:bg-[#9514FA] w-10 h-10 rounded-full flex justify-center items-center text-black hover:text-white">
              <FaInstagram className="text-xl"></FaInstagram>
            </li>
            <li className="bg-gray-100 hover:bg-[#9514FA] w-10 h-10 rounded-full flex justify-center items-center text-black hover:text-white">
              <FaFacebookSquare className="text-xl"></FaFacebookSquare>
            </li>
            <li className="bg-gray-100 hover:bg-[#9514FA] w-10 h-10 rounded-full flex justify-center items-center text-black hover:text-white">
              <FaXTwitter className="text-xl"></FaXTwitter>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mt-14 flex flex-col md:flex-row justify-between items-center py-8 border-t border-t-gray-100/40">
        <p>&copy; 2026 Digitools. All rights reserved.</p>
        <ul className="flex flex-col md:flex-row gap-2 md:gap-8 items-center mt-2 md:mt-0">
          <li>
            <a href="/">Privacy Policy </a>
          </li>
          <li>
            <a href="/">Terms of Service </a>
          </li>
          <li>
            <a href="/">Cookies </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
